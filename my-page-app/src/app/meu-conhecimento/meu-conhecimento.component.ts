import { Component, OnInit } from '@angular/core';
import { TranslationService } from '../shared/translation.service';

@Component({
  selector: 'app-meu-conhecimento',
  templateUrl: './meu-conhecimento.component.html',
  styleUrls: ['./meu-conhecimento.component.css']
})
export class MeuConhecimentoComponent implements OnInit {

  getLanguageValue!: boolean;

  constructor(
    private translation: TranslationService
  ) { }

  ngOnInit() {
    this.getLanguageValue = this.translation.portugues;
  }

}
