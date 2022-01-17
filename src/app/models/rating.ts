export class RATING{
    _id?: string;
    name: String;
    rating: Number;
    votes: Number;
    constructor(
        name: String,
        rating: Number,
        votes: Number,
        ){
            this.name = name;
            this.rating = rating;
            this.votes = votes;
        }
}