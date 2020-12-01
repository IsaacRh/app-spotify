import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { console.log("hellor world") }

  getNewReleases(){
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQAeWvdtN44jRoZTLhB_DKetg6iN5PCdjBVvUqnuWsxKd60BxY49VuerRyI0bi_XfhrnF-bzxDoODd-ZQwA'
    });
    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers });
  }
}
