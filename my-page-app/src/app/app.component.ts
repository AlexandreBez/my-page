import { Component, OnInit } from '@angular/core';
import { TranslationService } from './shared/translation.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  getLanguageValue!: boolean;

  constructor(
    private translation: TranslationService,
    private router: Router
  ){}

  ngOnInit(){
    this.getLanguageValue = this.translation.portugues;
  }

  changeLanguage(){
    console.log(this.getLanguageValue)
    if(this.translation.portugues === true){
      // muda para ingles
      this.translation.portugues = false
      this.getLanguageValue = false;
      this.router.navigate(['/Dummy']);
      console.log(this.getLanguageValue);
    } else{
      // retorna para portugues
      this.translation.portugues = true
      this.getLanguageValue = true;
      this.router.navigate(['/Dummy']);
      console.log(this.getLanguageValue);
    }
  }
}
