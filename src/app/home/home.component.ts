import { Component } from '@angular/core';
import { HostListener } from '@angular/core';
import $ from 'jquery';
import { TimeInterval } from 'rxjs/internal/operators/timeInterval';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  number: number = 0;
  amountOfPhotos: number = 7;
  photoPath: string ='assets/img/photo1.png';
  timer1:NodeJS.Timeout | undefined;
  timer2:NodeJS.Timeout | undefined;

  createDots():void{
    const app = document.getElementById("dot");
    for(let i=1;i<=1;i++){
      let dot = document.createElement('div');
      dot.classList.add('dots');
      dot.style.width='25px';
      dot.style.height='25px';
      dot.style.border='2px solid white';
      dot.style.float='left';
      dot.style.margin= '0vh 1%';
      dot.textContent=this.number.toString();

      app?.appendChild(dot);
    }
  }
  hidePhoto():void{
   $('#gallery').fadeIn(500);
  }

  showPhoto():void{
    if(this.number>this.amountOfPhotos){
      this.number=1;
    }
    this.photoPath ='assets/img/photo'+this.number+'.png';
    this.number++;

    $('#gallery').fadeOut(500);
  }


  start():void{
    //TODO: Fix below lines
    this.timer1=setTimeout(() => this.showPhoto(),4000);
    this.timer2=setTimeout(() => this.hidePhoto(),3500);
  }

  @HostListener('window:load')
  onLoad() {
    this.start();
  }



}
