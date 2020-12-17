import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { logging } from 'protractor';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent {

  artists:any[] = [];
  loading: Boolean = false;
  error:Boolean = false;
  errorMessage: string = '';

  constructor(private spotify: SpotifyService) { }

  search(key:string){
    this.loading = key ? true : false;
    this.error = false;
    this.spotify.getArtists(key)
    .subscribe((request: any) => {
      console.log(request);
      this.artists = request;
      this.loading = false;
    }, (error) => {
      this.error = true;
      this.loading = false;
      this.errorMessage = error.error.error.message;
    });
  }

}
