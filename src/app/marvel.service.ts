import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {Md5} from 'ts-md5/dist/md5';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class MarvelService {

  private static URL_DOCUMENTATION = 'http://gateway.marvel.com/docs/public';

  private static URL_API = 'http://gateway.marvel.com/v1/public/';
  private static API_PUBLIC_KEY = '7667efc3d3a3d9dd26aeea068194b302';
  private static API_PRIVATE_KEY = '792a610d0f25ff2b4fe3ff7430908b5f7ef25510';

  constructor(private http: Http ) {}

  public getHeroesList() {
    const timestamp: Number = new Date().getTime();

    return this.http
    .get(MarvelService.URL_API
      + 'characters?ts='
      + new Date().getTime()
      + '&apikey=' + MarvelService.API_PUBLIC_KEY
      + '&hash=' + this.genHash(timestamp, MarvelService.API_PRIVATE_KEY, MarvelService.API_PUBLIC_KEY))
    .map( resp  => resp.json())
    .map(heroes => heroes.data.results.filter(hero => hero.thumbnail.path.search('image_not_available') === -1));
  }

  private genHash (timestamp: Number, privateKey: String, publicKey: String): string | Int32Array {
    const md5 = new Md5();
   // Append incrementally your file or other input
   // Methods are chainable
   md5.appendStr(timestamp.toString() + privateKey + publicKey);
   // Generate the MD5 hex string
   return md5.end();
  }

}
