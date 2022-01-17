import { Component, OnInit } from '@angular/core';
import contentDB from "../../pages/home/content.json";

interface Content{
  week: String;
  title: String;
  logo: String;
  solutions: any
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  contentDB: Content[] = contentDB;

  constructor() { }

  ngOnInit(): void {
  }

}
