import { Component } from '@angular/core';
import { RabbitChaser, RandomRabbitChaser } from "rabbit-chaser";

declare const RC: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rabbit-chaser-demo';

  // rc: RandomRabbitChaser;
  rc: RabbitChaser;

  caughtAtIndex?: number;

  constructor() {
    const size = 8;
    const index = Math.floor(Math.random() * size);
    // this.rc = new RandomRabbitChaser(size, index);
    // this.rc = new RabbitChaser(size);
    // this.rc = new RabbitChaser(new Array(size).fill(true));
    this.rc = new RabbitChaser([false, true, true, true, false, false, false, false, false]);
  }

  guess(index: number): void {
    this.getDistanceFromAnswer(index);
    this.rc.checkIfRabbitAtIndex(index);

    if (this.rc.rabbitsAreCaught()) {
      setTimeout(() => {
        alert(`You caught the rabbit with ${this.rc.guesses} guesses`);
      }, 2000);
      this.caughtAtIndex = index;
    }

    this.rc.setNextRabbitStates();
  }

  getDistanceFromAnswer(index: number): void {
    // const rabbitIndex = this.rc.getRabbitIndex();

    // const distance = Math.abs(rabbitIndex - index);

    // const maxIndex = this.rc.rabbitStates.length - 1;

    // if (distance > maxIndex * .9) {
    //   console.log("ICE cold");
    //   return;
    // }

    // if (distance > maxIndex * .7) {
    //   console.log("freezing cold");
    //   return;
    // }

    // if (distance > maxIndex * .5) {
    //   console.log("cold");
    //   return;
    // }

    // if (distance > maxIndex * .3) {
    //   console.log("cold");
    //   return;
    // }

    // if (distance > maxIndex * .1) {
    //   console.log("hot");
    //   return;
    // }

    // if (distance === 0) {
    //   console.log("CAUGHT 'EM");
    //   return;
    // }

    // console.log("BOILING hot");
  }

  handleKeydown(keydownEvent: KeyboardEvent, index: number): void {
    if(keydownEvent.which === 13){
      this.guess(index);
    }
  }

  customTrackBy(index: number, _: unknown): number {
    return index;
  }
}
