import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { request } from 'http';
import {  map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { console.log("hellor world") }

  getQuery(query: string){
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQAAzqXrUswMfaiPZFz9JnoFXMVRV83Pov_UMtqetWyJLkdbLUJm8BstIk5xoa7X52io_0UpdCcz39iiTDk'
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

  getArtist(id: string){
    return this.getQuery(`artists/${ id }`);
  }

  getTracks(id: string){
    return this.getQuery(`artists/${ id }/top-tracks?country=us`).pipe(
      map( request => request["tracks"] ));
  }

}
