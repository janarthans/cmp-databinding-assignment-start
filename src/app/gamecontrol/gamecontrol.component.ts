import { Component } from '@angular/core';
import { EventEmitter, Output, OnInit, OnChanges, SimpleChanges } from '@angular/core';


@Component({
    selector : 'app-gamecontrol',
    templateUrl : './gamecontrol.component.html'
})

export class GameControlComponent implements OnInit, OnChanges {
    ngOnChanges(changes: SimpleChanges): void {
        console.log('SimpleChanges ' + changes);
    }

    myNumber : number = 1;
    intervalReference : any;
    @Output() getTheGeneratedNumber = new EventEmitter<{ generatedNumber : number }>();

    constructor() {
        this.myNumber = 1;
        this.getTheGeneratedNumber = new EventEmitter<{ generatedNumber : number }>();
    }

    startTheGame() {
        this.intervalReference = setInterval(() => {
            this.myNumber = this.myNumber + 1;
            console.log('The number ' + this.myNumber);
            this.getTheGeneratedNumber.emit({ generatedNumber : this.myNumber });
        }, 1000);
    }

    stopTheGame() {
        console.log('Stop the game');
        clearInterval(this.intervalReference);
    }

    ngOnInit(): void {
        console.log('ngOnInit ' + this.myNumber);
    }
}