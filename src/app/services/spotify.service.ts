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
      'Authorization': 'Bearer BQCvkVFO9JrVV9nk2E-kIwu_rZf1CeP2Tw0wcMMFclMVTJofUnd_yLuqB0Bj2e-NWVab9dwtGPggl8iV3i0'
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
