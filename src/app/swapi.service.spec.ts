import { TestBed } from '@angular/core/testing';
import { SwapiService } from './swapi.service';
import {HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";

describe('SwapiService', () => {
  let service: SwapiService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SwapiService],
    });
    service = TestBed.inject(SwapiService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it("GetFilms called", () => {

    service.GetFilms().subscribe( data => {
      expect(data).toEqual([]);
    });

    const request = httpTestingController.expectOne( 'https://swapi.dev/api/films/');
    expect(request.request.method).toBe("GET");
  });

});
