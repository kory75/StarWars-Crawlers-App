import {Component, OnInit, Output, EventEmitter, OnChanges, SimpleChanges, Input} from '@angular/core';
import {SwapiService} from "../swapi.service";
import {Observable} from "rxjs";
import {Film} from "../models/film";


@Component({
  selector: 'app-film-selector',
  templateUrl: './film-selector.component.html',
  styleUrls: ['./film-selector.component.scss']
})
export class FilmSelectorComponent  {

  @Output() selectFilm: EventEmitter<number> = new EventEmitter();
  public selectedFilm: number = 4;
  @Input() films$: Observable<Film[]> = new Observable<Film[]>();

  public ChangeFilm(id: number) {
    this.selectFilm.emit(id)
  }

}
