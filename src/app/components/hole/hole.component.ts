import { Component, ElementRef, Input, OnInit, SimpleChanges, ViewChild, ViewContainerRef } from '@angular/core';
import { RabbitState } from 'rabbit-chaser';

@Component({
  selector: 'button[app-hole]',
  templateUrl: './hole.component.html',
  styleUrls: ['./hole.component.scss']
})
export class HoleComponent implements OnInit {
  @Input() rabbitState!: RabbitState;
  @ViewChild('rabbit', { static: true }) private readonly rabbit?: ElementRef<HTMLDivElement>;
  @ViewChild('leftArrow', { static: true, read: ViewContainerRef }) private readonly leftArrow?: ViewContainerRef;
  @ViewChild('rightArrow', { static: true, read: ViewContainerRef }) private readonly rightArrow?: ViewContainerRef;

  ngOnInit(): void {
    this.animateRabbit(false, this.rabbitState.rabbitIsInHole);
  }

  ngOnChanges(simpleChanges: SimpleChanges): void {
    const rabbitStateChanges = simpleChanges['rabbitState'];

    if (rabbitStateChanges.firstChange) {
      return;
    }

    const previousRabbitState = rabbitStateChanges.previousValue as RabbitState;
    const currentRabbitState = rabbitStateChanges.currentValue as RabbitState;

    this.animateRabbit(previousRabbitState?.rabbitIsInHole ?? false, currentRabbitState.rabbitIsInHole);

    this.animateLeftArrow(previousRabbitState?.rabbitIsInHole && previousRabbitState?.cameFromLeft, currentRabbitState.rabbitIsInHole && currentRabbitState.cameFromLeft);
    this.animateRightArrow(previousRabbitState?.rabbitIsInHole && previousRabbitState?.cameFromRight, currentRabbitState.rabbitIsInHole && currentRabbitState.cameFromRight);
  }

  animateRabbit(fromShown: boolean, toShown: boolean): void {
    if (!this.rabbit) {
      return;
    }

    const initalState = fromShown ? '0' : '-100%';
    const lastState = toShown ? '0' : '-100%';

    this.rabbit.nativeElement.animate([
      // keyframes
      { bottom: initalState },
      { bottom: '-100%' },
      { bottom: lastState },
    ], {
      // timing options
      duration: 400,
      iterations: 1
    });
  }

  animateLeftArrow(fromShown: boolean, toShown: boolean): void {
    this.animateArrow(fromShown, toShown, this.leftArrow?.element.nativeElement);
  }

  animateRightArrow(fromShown: boolean, toShown: boolean): void {
    this.animateArrow(fromShown, toShown, this.rightArrow?.element.nativeElement);
  }

  animateArrow(fromShown: boolean, toShown: boolean, arrowElement?: HTMLElement): void {
    if (!arrowElement) {
      return;
    }

    const initalState = fromShown ? '.5' : '0';
    const lastState = toShown ? '.5' : '0';

    arrowElement.animate([
      // keyframes
      { opacity: initalState },
      { opacity: '0' },
      { opacity: lastState },
    ], {
      // timing options
      duration: 400,
      iterations: 1
    });
  }
}
