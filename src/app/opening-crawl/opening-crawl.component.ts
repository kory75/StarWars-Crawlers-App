import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Film} from "../models/film";
import {SwapiService} from "../swapi.service";

@Component({
  selector: 'app-opening-crawl',
  templateUrl: './opening-crawl.component.html',
  styleUrls: ['./opening-crawl.component.scss']
})
export class OpeningCrawlComponent implements OnInit {

  public selectedFilm: number = 4;
  films$: Observable<Film[]> = new Observable<Film[]>();

  constructor(private swapiService: SwapiService) {
  }

  ngOnInit() : void {
    this.GetFilms();
  }

  public GetFilms () : void {
    this.films$ = this.swapiService.GetFilms();
  }

  public UpdateSelectedFilm(id: number) {
    this.selectedFilm = id;
  }

  public BrakeParagraphs(text: string) : string[] {
    let textOnly: string[] = text.split("...");
    let paragraphs = textOnly[0].split(".");
    paragraphs[paragraphs.length -1] += "...";
    return paragraphs;
  }

}
