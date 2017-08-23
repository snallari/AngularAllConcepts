
import { Hero } from '../models/hero';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  // properties
  title = 'Tour of heroes';
  // Creating array of heros
  HEROES: Hero[] = [{id: 11, name: 'Mr Nice'}, {id: 12, name: 'Narco'}, {id: 12, name: 'Narco'}, {id: 12, name: 'Narco'}, {id: 12, name: 'Narco'}]
  heroes = this.HEROES;
  // renaming the hero class
  selectedHero: Hero;

  // Calling the class with constructor
  hero: Hero = {
    id: 1, name: 'windstrom'
  };

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }



  constructor() {}

  ngOnInit() {
  }

}
