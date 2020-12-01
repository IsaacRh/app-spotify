import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { console.log("hellor world") }

  getNewReleases(){
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBhlmlLjgnP-E7MZDO8Necv2wALQT5m8b35vMMSEQ2NK3Q6sqhya1uG54g11NgM9NuHMwkqGcGSnGE9zz0'
    });
    return this.http.get('https://api.spotify.com/v1/browse/new-releases', { headers });
  }

  getArtists(key: string){
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBhlmlLjgnP-E7MZDO8Necv2wALQT5m8b35vMMSEQ2NK3Q6sqhya1uG54g11NgM9NuHMwkqGcGSnGE9zz0'
    });
    return this.http.get(`https://api.spotify.com/v1/search?q=${key}&type=artist&limit=25`, { headers });
  }
}
