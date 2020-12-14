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
  tracks : any = [];
  loading: Boolean = false;

  constructor(private router : ActivatedRoute, private spotify : SpotifyService) {
    this.loading = true;
    this.router.params.subscribe(params => {
      this.getArtist(params['id']);
      this.getTracks(params['id']);
    });
  }

  getArtist(id: string){
    this.spotify.getArtist(id).subscribe(artist => {
      this.artist = artist;
      this.loading = false;
    });
  }

  getTracks(id: string){
    this.spotify.getTracks(id).subscribe(tracks => {
      console.log(tracks);
      this.tracks = tracks;
    })
  }

  ngOnInit(): void {
  }

}
