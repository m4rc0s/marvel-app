import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.css']
})
export class CartaComponent implements OnInit {

  @Input() hero: any;
  @Output() heroSelected: EventEmitter<any> = new EventEmitter();
  @Input() flipped;

  constructor() { }

  ngOnInit() {
  }

  private imageClicked() {
    if (!this.flipped) {
      this.heroSelected.emit(this.hero);
    }
  }

  public getImage() {
    let imgUrl = 'https://i.pinimg.com/736x/60/98/09/6098096c27dff632d4eefdb3d5650490--marvel-logo-marvel-avengers.jpg';
    if (this.flipped) {
      imgUrl = this.hero.thumbnail.path + '.' + this.hero.thumbnail.extension;
    }
    return imgUrl;
  }
}
