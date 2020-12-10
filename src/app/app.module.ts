import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistComponent } from './components/artist/artist.component';
import { NabvarComponent } from './components/shared/nabvar/nabvar.component';
//import routes
import { ROUTES } from './app.routes';
// services
import { SpotifyService } from './services/spotify.service';

import { HttpClientModule } from "@angular/common/http";
import { NoImagePipe } from './pipes/no-image.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtistComponent,
    NabvarComponent,
    NoImagePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES, {useHash : true}) //import routes from app.routes.ts
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
