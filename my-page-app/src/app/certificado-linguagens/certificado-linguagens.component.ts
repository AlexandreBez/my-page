import { Component, OnInit } from '@angular/core';
import { TranslationService } from '../shared/translation.service';

@Component({
  selector: 'app-certificado-linguagens',
  templateUrl: './certificado-linguagens.component.html',
  styleUrls: ['./certificado-linguagens.component.css']
})
export class CertificadoLinguagensComponent implements OnInit {

  getLanguageValue!: boolean;

  constructor(
    private translation: TranslationService
  ) { }

  ngOnInit() {
    this.getLanguageValue = this.translation.portugues;
  }

}
