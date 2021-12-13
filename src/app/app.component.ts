import { Component } from '@angular/core';
import { RandomRabbitChaser } from "rabbit-chaser";

declare const RC: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rabbit-chaser-demo';

  rc: RandomRabbitChaser;

  constructor() {
    const index = Math.floor(Math.random() * 100);
    this.rc = new RandomRabbitChaser(100, index);
  }

  guess(index: number): void {
    this.getDistanceFromAnswer(index);
    this.rc.checkIfRabbitAtIndex(index);
    this.rc.getNextRabbitStates();
  }

  getDistanceFromAnswer(index: number): void {
    const rabbitIndex = this.rc.getRabbitIndex();

    const distance = Math.abs(rabbitIndex - index);

    const maxIndex = this.rc.rabbitStates.length - 1;

    if (distance > maxIndex * .9) {
      console.log("ICE cold");
      return;
    }

    if (distance > maxIndex * .7) {
      console.log("freezing cold");
      return;
    }

    if (distance > maxIndex * .5) {
      console.log("cold");
      return;
    }

    if (distance > maxIndex * .3) {
      console.log("cold");
      return;
    }

    if (distance > maxIndex * .1) {
      console.log("hot");
      return;
    }

    if (distance === 0) {
      console.log("CAUGHT 'EM");
      return;
    }

    console.log("BOILING hot");
  }
}
