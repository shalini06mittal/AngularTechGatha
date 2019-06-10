import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl : './app.component.1.html',
  styleUrls:['./app.component.1.scss']
})
export class AppComponent1 {
  course:string = 'Angular';
  invalid:boolean = true;
  randomcolor = this.getRandomColor();
  heading:string = 'main heading';
  hasError:boolean = true;
  isspeical:boolean = true;
  style1:string = 's1';
  
  msgs={
    'success':!this.hasError,
    'failure':this.hasError,
    'special':this.isspeical,
  }
  //function to get random colors
  public getRandomColor() {
      var letters = '0123456789ABCDEF'.split('');
      var color = '#';
      for (var i = 0; i < 6; i++){
          color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
  }

  //function to set a new random color
  setColor() {
      this.randomcolor = this.getRandomColor();
  }
}
