import { Component, OnInit } from '@angular/core';
import { TranslationService } from '../shared/translation.service';

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.css']
})
export class ProjetosComponent implements OnInit {

  getLanguageValue!: boolean;

  constructor(
    private translation: TranslationService
  ) { }

  ngOnInit() {
    this.getLanguageValue = this.translation.portugues;
  }

}
