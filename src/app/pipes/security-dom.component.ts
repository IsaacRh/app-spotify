import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";

@Pipe({
  name: 'SecurityDom',
})
export class SecurityDom implements PipeTransform {

  constructor(private domSanitazer: DomSanitizer){}

  transform(value: string): SafeResourceUrl {
    const url = "https://open.spotify.com/embed?uri=";
    return this.domSanitazer.bypassSecurityTrustResourceUrl(url + value);
  }

}
