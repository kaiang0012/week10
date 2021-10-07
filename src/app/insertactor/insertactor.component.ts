import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-insertactor',
  templateUrl: './insertactor.component.html',
  styleUrls: ['./insertactor.component.css']
})
export class InsertactorComponent implements OnInit {

  title:string="";
  year:number=0;
  movieId:string="";
  moviesDB:any[] = [];
  fullName: string = "";
  bYear: number = 0;
  actorId: string = "";
  actorsDB: any[] = [];

  constructor(private dbService: DatabaseService, private router: Router) {}

  onGetMovies() {
    return this.dbService.getMovies().subscribe((data: any) => {
      this.moviesDB = data;
    });
  }
  
  onGetActors() {
    return this.dbService.getActors().subscribe((data: any) => {
      this.actorsDB = data;
    });
  }

  onSelectMovie(item:any) {
    this.title = item.title;
    this.year = item.year;
    this.movieId = item._id;
  }

  onSelectActor(item:any) {
    this.fullName = item.name;
    this.bYear = item.bYear;
    this.actorId = item._id;
  }

  onInsertActor() {
    let obj = {id: this.actorId};
    this.dbService.addActorToMovie(this.movieId, obj).subscribe(result => {
      this.onGetMovies();
    })
  }

  ngOnInit(): void {
    this.onGetActors();
    this.onGetMovies();
  }
}
