import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { console.log("hellor world") }

  getQuery(query: string){
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDYpd7rAIABUb7WKng_tS_Gp0s7XQEx5mgj2WDv3mJY-PXy3qywm-zkG1E6Rpz1-zKtiuD-Hs2wChNk5W4'
    });
    return this.http.get(url, { headers });
  }
  getNewReleases(){
    return this.getQuery('browse/new-releases')
    .pipe(map( request => request["albums"].items ));
  }

  getArtists(key: string){
    return this.getQuery(`search?q=${key}&type=artist&limit=25`)
    .pipe(map( request => request["artists"].items ));
    
  }
}
