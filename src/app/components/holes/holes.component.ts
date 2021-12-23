import { Component, Input, OnInit } from '@angular/core';
import { RabbitChaser, RabbitState } from 'rabbit-chaser';

@Component({
  selector: 'app-holes',
  templateUrl: './holes.component.html',
  styleUrls: ['./holes.component.scss']
})
export class HolesComponent implements OnInit {
  @Input() rabbitStates!: boolean[];
  rabbitChaser!: RabbitChaser;
  caughtAtIndex?: number;
  constructor() { }

  ngOnInit(): void {
    this.rabbitChaser = new RabbitChaser(this.rabbitStates);
  }

  indexTrackBy(index: number, _: unknown): number {
    return index;
  }

  guess(index: number): void {
    // this.getDistanceFromAnswer(index);
    this.rabbitChaser.checkIfRabbitAtIndex(index);

    if (this.rabbitChaser.rabbitsAreCaught()) {
      setTimeout(() => {
        alert(`You caught the rabbit with ${this.rabbitChaser.guesses} guesses`);
      }, 400);
      this.caughtAtIndex = index;
    } else {
      this.rabbitChaser.setNextRabbitStates();
    }
  }
}
