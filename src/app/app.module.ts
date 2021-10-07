import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddactorsComponent } from './addactors/addactors.component';
import { UpdateactorsComponent } from './updateactors/updateactors.component';
import { ListactorsComponent } from './listactors/listactors.component';
import { DeleteactorsComponent } from './deleteactors/deleteactors.component';
import { ViewnotfoundComponent } from './viewnotfound/viewnotfound.component';
import { DatabaseService } from './database.service';
import { AddmoviesComponent } from './addmovies/addmovies.component';
import { ListmoviesComponent } from './listmovies/listmovies.component';
import { DeletemoviesComponent } from './deletemovies/deletemovies.component';
import { InsertactorComponent } from './insertactor/insertactor.component';
import { AgePipe } from './age.pipe';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

const appRoutes: Routes = [
  {path: 'listactors', component: ListactorsComponent},
  {path: 'addactors', component: AddactorsComponent},
  {path: 'updateactors', component: UpdateactorsComponent},
  {path: 'deleteactors', component: DeleteactorsComponent},
  {path: 'listmovies', component: ListmoviesComponent},
  {path: 'addmovies', component: AddmoviesComponent},
  {path: 'deletemovies', component: DeletemoviesComponent},
  {path: 'insertactor', component: InsertactorComponent},
  {path: '', redirectTo: '/listactors', pathMatch: 'full'},
  {path: '**', component: ViewnotfoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    AddactorsComponent,
    UpdateactorsComponent,
    ListactorsComponent,
    DeleteactorsComponent,
    ViewnotfoundComponent,
    AddmoviesComponent,
    ListmoviesComponent,
    DeletemoviesComponent,
    InsertactorComponent,
    AgePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, {useHash: true}),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
  ],
  providers: [DatabaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
