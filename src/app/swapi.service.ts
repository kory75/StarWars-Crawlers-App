import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Film} from "./models/film";
import {Films} from "./models/films";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SwapiService {

  constructor(private httpClient: HttpClient) { }

  public GetFilms(): Observable<Film[]> {
    return this.httpClient.get<Films>('https://swapi.dev/api/films/') . pipe(
      map(data => {
          return data.results.map( film => {
            return {
              title: film.title as string,
              episode_id: film.episode_id as number,
              opening_crawl: film.opening_crawl as string
            }
          })
      })
    );
  }
}
