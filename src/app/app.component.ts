import { Component, OnInit } from '@angular/core';
import { MarvelService } from './marvel.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public heroes: any;
  private mapa: any;
  private matches: any[] = [];
  private flippeds: any[] = [];

  constructor(service: MarvelService) {
    service.getHeroesList()
      .subscribe((resp) => {
        this.heroes = this.createDeck(resp);
        this.heroes.forEach((hero, index) => {
          this.matches.push(index);
        });
        setTimeout(() => {
          this.matches = [];
        }, 3000);
      });
  }

  public createDeck(heroesArray: any[]) {
    const arr1 = heroesArray.slice();
    const arr2 = heroesArray.slice();
    return arr1.concat(arr2).sort(() => .5 - Math.random());
  }

  public isFlipped(index: any) {
    return this.matches.includes(index); //|| this.flippeds.includes(index);
  }

  public checkMatch(index: any) {
    this.flippeds.push(index);
    if (this.flippeds.length === 2) {
      if (this.flippeds[0] === this.flippeds[1]) {
        this.matches.push(this.flippeds[0]);
        this.matches.push(this.flippeds[1]);
        console.log(this.matches);
      }
      this.flippeds = [];
    }
  }
}
