import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { console.log("hellor world") }

  getNewReleases(){
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDApraqud8iQWZgz-bhhuWWW6H6rw1gVPXJacDgrQg_WIqWiZs4U5ZF8ofXUEe0K4jDfLLbCfhJwAC1H3I'
    });
    this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers })
    .subscribe(request => {
      console.log(request);
    });
  }
}
