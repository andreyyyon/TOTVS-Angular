import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';

import {
  ProtheusLibCoreModule,
  ProAppConfigService
} from '@totvs/protheus-lib-core';

import {
  PoMenuItem,
  PoMenuModule,
  PoPageModule,
  PoToolbarModule,
} from '@po-ui/ng-components';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    PoToolbarModule,
    PoMenuModule,
    PoPageModule,
    ProtheusLibCoreModule,
    RouterOutlet
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  // Ao carregar a pagina, cria o construtor
  constructor(private proAppConfigService: ProAppConfigService, private router: Router) {
    if (! this.proAppConfigService.insideProtheus()) {
      this.proAppConfigService.loadAppConfig();
      sessionStorage.setItem("insideProtheus", "0");
      sessionStorage.setItem("ERPTOKEN", '{"access_token": ""}');
    }
    else {
      sessionStorage.setItem("insideProtheus", "1");
    }
  }

  readonly menus: Array<PoMenuItem> = [
    { label: 'Visualizar', action: this.viewClick.bind(this), icon: 'po-icon-clipboard', shortLabel: 'Visualizar' },
    { label: 'Ajuda (Help)', action: this.aboutClick.bind(this), icon: 'po-icon-help', shortLabel: 'Ajuda' },
    { label: 'Sair', action: this.closeApp.bind(this), icon: 'po-icon-exit', shortLabel: 'Sair' }
  ];

  // Visualizar
  private viewClick() {
    this.router.navigate(['/', 'view'])
  }

  // Sobre (Help)
  private aboutClick() {
    this.router.navigate(['/', 'about'])
  }

  // Sair
  private closeApp() {
    if(this.proAppConfigService.insideProtheus()){
      this.proAppConfigService.callAppClose();
    }else{
      alert("Clique não veio do Protheus.")
    }
  }
}
