import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-skils',
  templateUrl: './my-skils.component.html',
  styleUrls: ['./my-skils.component.css']
})
export class MySkilsComponent implements OnInit {

  tabelaDeProjetos = [
    {
      'nome': 'MyList Company',
      'linguagem': 'Spring Boot',
      'link': 'https://github.com/AlexandreBez/MiniProjetos/tree/main/Springboot/MyListCompany'
    },
    {
      'nome': 'Lista de Tarefas',
      'linguagem': 'Angular',
      'link': 'https://github.com/AlexandreBez/MiniProjetos/tree/main/Angular/ListaDePrioridades'
    },
    {
      'nome': 'Tela de login',
      'linguagem': 'Angular',
      'link': 'https://github.com/AlexandreBez/MiniProjetos/tree/main/Angular/TelaDeLogin'
    },
    {
      'nome': 'Calculadora',
      'linguagem': 'Angular',
      'link': 'https://github.com/AlexandreBez/MiniProjetos/tree/main/Angular/calculator-app'
    },
    {
      'nome': 'Pagina de abaixo assinado',
      'linguagem': 'Angular',
      'link': 'https://github.com/AlexandreBez/MiniProjetos/tree/main/Angular/petition-page'
    },
    {
      'nome': 'Cloud Server Management',
      'linguagem': 'Angular',
      'link': 'https://github.com/AlexandreBez/CloudsServerManager/tree/main/cloud-server-manager'
    },
    {
      'nome': 'Teste Lista de Tarefas',
      'linguagem': 'Cypress',
      'link': 'https://github.com/AlexandreBez/MiniProjetos/tree/main/Angular/Cypress/cypress/integration/ListaDeTarefas'
    },
    {
      'nome': 'Teste Cloud Server Management',
      'linguagem': 'Cypress',
      'link': 'https://github.com/AlexandreBez/CloudsServerManager/tree/main/Cypress/cypress/integration/cloudsServerManagement'
    },
    {
      'nome': 'Teste tela de login',
      'linguagem': 'Cypress',
      'link': 'https://github.com/AlexandreBez/MiniProjetos/tree/main/Angular/Cypress/cypress/integration/TelaDeLogin1.0.0'
    },
    {
      'nome': 'Teste tela de login',
      'linguagem': 'Cypress',
      'link': 'https://github.com/AlexandreBez/MiniProjetos/tree/main/Angular/Cypress/cypress/integration/TelaDeLogin1.0.0'
    },
    {
      'nome': 'Guest the number',
      'linguagem': 'Python',
      'link': 'https://github.com/AlexandreBez/MiniProjetos/tree/main/Python/GuessTheNumber'
    },

  ];

  isLoading = false;

  constructor() { }

  ngOnInit() {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }

}
