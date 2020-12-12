import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: [
  ]
})
export class ArtistComponent implements OnInit {
  artist : any = {};
  loading: Boolean = false;

  constructor(private router : ActivatedRoute, private spotify : SpotifyService) {
    this.loading = true;
    this.router.params.subscribe(params => {
      this.getArtist(params['id']);
    });
  }

  getArtist(id: string){
    this.spotify.getArtist(id).subscribe(artist => {
      console.log(artist);
      this.artist = artist;
      this.loading = false;
    });
  }

  ngOnInit(): void {
  }

}
