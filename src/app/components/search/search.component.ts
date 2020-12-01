import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent {

  artists:any[] = [];
  constructor(private spotify: SpotifyService) { }

  search(key:string){
    this.spotify.getArtists(key)
    .subscribe((request: any) => {
      console.log(request);
      this.artists = request.artists.items;
    });
  }

}
