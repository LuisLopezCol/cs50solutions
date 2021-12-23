import { Component, OnInit } from '@angular/core';
import contentDB from "../home/content.json";

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

    contentDB: Content[] = contentDB;

  constructor() { }

  ngOnInit(): void {
  }

}
