import { Component, OnInit } from '@angular/core';
import { TranslationService } from '../shared/translation.service';

@Component({
  selector: 'app-meus-certificados',
  templateUrl: './meus-certificados.component.html',
  styleUrls: ['./meus-certificados.component.css']
})
export class MeusCertificadosComponent implements OnInit {

  getLanguageValue!: boolean;

  constructor(
    private translation: TranslationService
  ) { }

  ngOnInit() {
    this.getLanguageValue = this.translation.portugues;
  }

}
