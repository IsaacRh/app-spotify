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
      'Authorization': 'Bearer BQD5f2Xzr11G7QR28wlO6PByYLnambvmEsqJgPm82LJMdyXT_WCH9wUhkfsFpyrswD7Ot0oj1GwvR1yQUZo'
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
