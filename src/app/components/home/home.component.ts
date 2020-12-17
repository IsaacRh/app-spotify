import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  newReleases:any[] = [];
  loading: Boolean = false;
  error:Boolean = false;
  errorMessage: string = '';

  constructor(private spotify: SpotifyService) {
    this.loading = true;
    this.error = false;
    this.spotify.getNewReleases().subscribe((request: any) => {
      console.log(request);
      this.newReleases = request;
      this.loading = false;
    }, (error) => {
      this.error = true;
      this.loading = false;
      this.errorMessage = error.error.error.message;
    });
  }

  ngOnInit(): void {
  }

}
