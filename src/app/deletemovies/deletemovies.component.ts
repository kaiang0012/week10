import { Component, OnInit } from '@angular/core';
import { DatabaseService } from "../database.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-deletemovies',
  templateUrl: './deletemovies.component.html',
  styleUrls: ['./deletemovies.component.css']
})

export class DeletemoviesComponent implements OnInit {

  
  moviesDB: any[] = [];
  constructor(private dbService: DatabaseService, private router: Router) { }
  //Get all 
  onGetMovies() {
    console.log("From on GetActors");
    return this.dbService.getMovies().subscribe((data: any) => {
      this.moviesDB = data;
    });
  }
  //Delete 
  onDeleteMovie(item:any) {
    this.dbService.deleteMovie(item._id).subscribe(result => {
      this.onGetMovies();
      this.router.navigate(["/listmovies"]);
    });
  }
  // This callback function will be invoked with the component get initialized by Angular.
  ngOnInit() {
    this.onGetMovies();
  }

}