import { getCurrencySymbol } from '@angular/common';
import { CloneVisitor } from '@angular/compiler/src/i18n/i18n_ast';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 loadedFeauture='recipe';
  onNavigate(feauture:string){
this.loadedFeauture=feauture;
  }
  
}
