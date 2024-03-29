import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { TranslationService } from '../shared/translation.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  idade = moment().diff('1999/12/04', 'years');

  getLanguageValue!: boolean;

  constructor(
    private translation: TranslationService
  ) { }

  ngOnInit() {
    this.getLanguageValue = this.translation.portugues;
  }

}
