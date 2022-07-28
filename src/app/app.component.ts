import { Component } from '@angular/core';
import { Film, Model } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  model = new Model();
  isDisplay = false;

  getName(){
    return this.model.user;
  }

  getItems(){
    if (this.isDisplay){
      return this.model.items;
    }
    return this.model.items.filter(item => !item.durum);

  }
  addItem(value){
    if(value !=""){
      this.model.items.push(new Film(value,false));
    }
  }

}
