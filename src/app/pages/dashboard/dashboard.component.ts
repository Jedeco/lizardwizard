import { Component } from '@angular/core';
import { saveAs } from 'file-saver';

@Component({
  selector: 'ngx-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {
  
  images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);

  date = new Date();

  firstClick() {
    var FileSaver = require('file-saver');
  var blob = new Blob(["<3<3<3"], {type: "text/plain;charset=utf-8"});
  FileSaver.saveAs(blob, "virus.txt");
    
    console.log('Tom is een faggot');
  }
}