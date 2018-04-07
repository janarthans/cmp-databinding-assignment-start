import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  theNumberToProcess : number;
  theOddNumber : number;
  theEvenNumber : number;

  oddNumbersArray : number[] = [];
  evenNumbersArray : number[] = [];

  processTheNumber(dataToProcess : { generatedNumber : number }) {
    console.log('Number to Process ' + dataToProcess.generatedNumber);
    this.theNumberToProcess = dataToProcess.generatedNumber;
    if(this.theNumberToProcess % 2 === 0) {
      this.theEvenNumber = this.theNumberToProcess;
      this.theOddNumber = undefined;
      this.evenNumbersArray.push(this.theNumberToProcess);
    }
    else {
      this.theOddNumber = this.theNumberToProcess;
      this.theEvenNumber = undefined;
      this.oddNumbersArray.push(this.theNumberToProcess);
    }
  }
}
