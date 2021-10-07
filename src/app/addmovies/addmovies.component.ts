import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-addmovies',
  templateUrl: './addmovies.component.html',
  styleUrls: ['./addmovies.component.css']
})
export class AddmoviesComponent implements OnInit {

  
  ngOnInit(): void {
  }

  title: string = "";
  year: number = 0;
  movieId: string = "";
  constructor(private dbService: DatabaseService, private router: Router) {}
  
  onSaveMovie() {
    let obj = { title: this.title, year: this.year };
    this.dbService.createMovie(obj).subscribe(result => {
      this.router.navigate(["/listmovies"]);
    });
  }

}