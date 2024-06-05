import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Demo1';
  isvideo:boolean=false;
  isimg:boolean=true;
  dmarr=["../assets/np.jpg","../assets/random.mp4","../assets/sl2.jpeg"];
  val:number=0;
  private imageExtensions = ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'webp'];
  private videoExtensions = ['mp4', 'webm', 'ogg'];
  private getFileExtension(url: string | undefined): string | undefined {
    if (!url) {
      return undefined;
    }
    const parts = url.split('.');
    return parts.length > 1 ? parts.pop()?.toLowerCase() : undefined;
  }
  newcl():void{
    const audio=new Audio("https://www.fesliyanstudios.com/play-mp3/387")
    audio.play();
  }
  nextbtn():void{
   
    if(this.val<this.dmarr.length-1)
   { this.val+=1;
    const extension=this.getFileExtension(this.dmarr[this.val]);
    if( extension ? this.videoExtensions.includes(extension) : false)
      {this.isvideo=true;
        this.isimg=false;
        
      }
    else{
      this.isimg=true;
      this.isvideo=false;
    }
  }


  }
  prevbtn():void{
   

    if(this.val>0)
    {this.val-=1;
     
    
    const extension=this.getFileExtension(this.dmarr[this.val]);
  
    if( extension ? this.videoExtensions.includes(extension) : false)
      {this.isvideo=true;
        this.isimg=false;
      }
    else{
      this.isimg=true;
      this.isvideo=false;
    }
  }
  }
  side:boolean=false;
  opensb():void{
this.side=!this.side;
  }
  opensb1():void{
    this.side=false;
      }
}
