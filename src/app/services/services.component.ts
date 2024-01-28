import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
    password:string= 'costam';
    passDisp:string ='';
    photoPath:string='assets/hangman/photo5.png';
    message:string= '';
    nameOfButton:string='Start';
    letterToWin:number=0;
    displayedPassword:Array<string>=[];
    lives:number=5;

    setup():void{
        const n:number = this.password.length;
        this.letterToWin = this.password.length;
        for(let i=0;i<n;i++){
            this.displayedPassword[i]='_';
        }
        this.passDisp= this.displayedPassword.join(' ');
        this.lives=5;
        this.photoPath = "assets/hangman/photo"+this.lives+".png";
        this.nameOfButton='Restart';
    }
    game():void{
        const n:number = this.password.length;
        if(this.nameOfButton!='Start'){
            this.message='';
            let letter = (document.getElementById('letter') as HTMLInputElement).value;
            let done:number=0;
            if(letter.length==0){
                this.message='Enter the letter!';
            }
            else{
                for(let i=0;i<n;i++){
                    if(this.password[i]==letter && this.displayedPassword[i]!=letter){
                        this.displayedPassword[i]=letter;
                        this.passDisp= this.displayedPassword.join(' ');
                        this.letterToWin--;
                        done=1;
                        this.message='';
                    }
                    else if(this.password[i]==letter && this.displayedPassword[i]==letter){
                        this.message='You have already guessed this letter!';
                        done=1;
                    }
                }
            }
            (document.getElementById('letter') as HTMLInputElement).value='';
            if(!done){
                this.lives--;
                this.photoPath = "assets/hangman/photo"+this.lives+".png";
            }

            if(this.letterToWin==0 && this.lives>0){
                this.message="Winner!! Congratulations!!";
            }
            else if(this.lives==0){
                this.message="You are loose!";
            }
        }
    }


}
