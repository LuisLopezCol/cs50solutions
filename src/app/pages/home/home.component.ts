import { Component, OnInit } from '@angular/core';
import contentDB from "../home/content.json";
import { Cs50Service } from 'src/app/services/cs50.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {  Router } from '@angular/router';
import Swal from 'sweetalert2';
import { CS50 } from 'src/app/models/cs50';

interface Content{
  title: String;
  logo: String;
  solutions: any
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  remainingText = 350
  contentDB: Content[] = contentDB;
  modalContent: any = {
    "title":"N/A","logo":"N/A","solutions":[]};
  
    constructor(private cs50Service:Cs50Service, private fb: FormBuilder, private router: Router) { 
    this.messageForm = this.fb.group({
			nameMessage: ['', Validators.required],
			messageMessage: ['', Validators.required],
		});
  }

  ngOnInit(): void {
    this.getMessages();
  }
  updateModal(game: any, lectura: boolean){if(lectura){return this.modalContent = game}};

  valueChange(value: string) {
    this.remainingText = 350 - value.length;
  }
  
  //--------------------Fetch data from DB--------------------//
  //To be uesd to store the JSON imported from the DB
  listMessages: any= [];
  getMessages(){
    this.cs50Service.getMessages().subscribe((MessagesDB) => {  
      this.listMessages = MessagesDB;
      console.log(MessagesDB);
    }, error =>{
      console.log(error);
    })
  }
  //---Save a worker in the DB
  messageForm: FormGroup;
  postMessage(){
    const MESSAGE: CS50 = {
			name: this.messageForm.get('nameMessage')?.value,
			message: this.messageForm.get('messageMessage')?.value,
		}
    this.cs50Service.postMessage(MESSAGE).subscribe( data => {
      this.router.navigate(['/admin'])
      Swal.fire({
        icon: 'success',
        title: 'Message added',
        text: 'Your message is now in Our testimonial'
      })
    })
    setTimeout(() => {
      this.getMessages();
      this.messageForm.reset();
    }, 1000);
  }
}
