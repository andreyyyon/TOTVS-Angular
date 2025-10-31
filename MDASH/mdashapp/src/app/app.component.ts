import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProAppConfigService } from '@totvs/protheus-lib-core';

import {
  PoMenuItem,
  PoToolbarAction,
  PoMenuModule,
  PoPageModule,
  PoToolbarModule,
  PoPageAction
} from '@po-ui/ng-components';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    PoToolbarModule,
    PoMenuModule,
    PoPageModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  constructor(
      private proAppConfigService: ProAppConfigService // Inje��o do Servi�o Protheus
  ) {}

  readonly menus: Array<PoMenuItem> = [
    { label: 'Home', action: this.onClick.bind(this) },
  ];

  readonly toolbarActions: Array<PoToolbarAction> = [
      {
        label: 'Fechar Aplicação',
        icon: 'po-icon-close',
        action: this.closeApp.bind(this)
      }
    ];

  pageActions: PoPageAction[] = [
    { 
      label: 'Fechar', 
      icon: 'po-icon-close', 
      action: () => this.closeApp()
    }
  ];
  
  public closeApp(): void { 
      if (this.proAppConfigService.insideProtheus()) {
          this.proAppConfigService.callAppClose();
      } else {
          alert('O App não está sendo executado dentro do Protheus.');
      }
  }

  private onClick() {
    alert('Clicked in menu item');
  }
}
