import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpeningCrawlComponent } from './opening-crawl.component';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";

describe('OpeningCrawlComponent', () => {
  let component: OpeningCrawlComponent;
  let fixture: ComponentFixture<OpeningCrawlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ OpeningCrawlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpeningCrawlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should Brake Paragraphs', () => {
    let text = "hello. this is a test. last line...";
    let expectedResult = ["hello"," this is a test"," last line..."];
    expect(component.BrakeParagraphs(text)).toEqual(expectedResult);
  });
});
