import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  user = 'Mehmet';

  items= [
    {FilmAdi: "Film1", Durum:"No"},
    {FilmAdi: "Film2", Durum:"No"},
    {FilmAdi: "Film3", Durum:"No"},
    {FilmAdi: "Film4", Durum:"No"}


  ];
}
