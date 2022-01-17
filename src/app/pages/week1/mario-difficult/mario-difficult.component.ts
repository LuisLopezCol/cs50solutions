import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cs50Service } from 'src/app/services/cs50.service';
import Swal from 'sweetalert2';
import { RATING } from 'src/app/models/rating';

@Component({
  selector: 'app-mario-difficult',
  templateUrl: './mario-difficult.component.html',
  styleUrls: ['./mario-difficult.component.css']
})
export class MarioDifficultComponent implements OnInit {

  panelOpenState = false;
  rated = true;
  ratingID: string = "61d3c4b464abe3fa40b98e7b";
  constructor(private cs50Service:Cs50Service, private router: Router) { }

  ngOnInit(): void {
    this.getRating(this.ratingID);
  }

    //--------------------Fetch rating from DB--------------------//
  //To be uesd to store the JSON imported from the DB
  currentRate: number = 0;
  currentVotes: number = 0;
  getRating(id: String){
    this.cs50Service.getRating(id).subscribe((RatingDB) => {  
      this.currentRate = RatingDB.rating;
      this.currentVotes = RatingDB.votes;
    }, error =>{
      console.log(error);
    })
  }
  rate = this.currentRate;
  //---Save in the DB
  updatedRating: any = 0;
  updatedVotes: any = 0;
  totalRanking: any = 0;  
  postRating(newVote: number){
    this.updatedVotes = this.currentVotes + 1;
    this.updatedRating = this.currentRate + newVote;
    this.totalRanking = parseFloat((this.updatedRating / this.updatedVotes).toFixed(2));
    console.log(parseInt(this.totalRanking));
    
    const RATING: RATING = {
      name: "hello",
			rating: this.updatedRating,
      votes: this.updatedVotes,
		}
    console.log(this.rate);
    if (this.rate > 0 && this.rate <= 5) {
      this.cs50Service.putRating(this.ratingID, RATING).subscribe( data => {
        this.router.navigate(['/admin'])
        Swal.fire({
          icon: 'success',
          title: 'Your rating was added',
          text: 'Your rate was added, thank you so much!'
        })
        this.rated = false;
      }, error =>{
        Swal.fire({
          icon: 'warning',
          title: 'Oops! Something went wrong',
          text: 'Try again!'
        })
    })
    } else{
      Swal.fire({
          icon: 'warning',
          title: 'Your rating was not added',
          text: 'First select the rating and then submit it'
        })
    }
  }

}
