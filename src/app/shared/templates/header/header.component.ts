import { Component, OnInit } from '@angular/core';
import { ProgressBarMode } from '@angular/material/progress-bar';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
statusMenu=0;
color = '#511182';
mode: ProgressBarMode = 'determinate';
buffer=100;
home = "../../../assets/images/icon-home.png";
person ="../../../assets/images/icon-user.png";
mission ="../../../assets/images/icon-quest.png";
invite ="../../../assets/images/icon-invite.png";
start:boolean=false;
titleStart:boolean=false;
menuExpand:boolean = false;
menus=[
  false,false,false,false
  ]
  constructor() { }

  ngOnInit(): void {
  }
encheMenu(index:string){
  for(let i=0;i<this.menus.length;i++){
    this.menus[i]=false;
  }
console.log(this.menus)
  switch(index){
    case "home":
      this.statusMenu = 25;
      this.menus[0]=true;
      this.home = "../../../assets/images/icon-home-active.png";
      this.person ="../../../assets/images/icon-user.png";
      this.mission ="../../../assets/images/icon-quest.png";
      this.invite ="../../../assets/images/icon-invite.png";
      break;
    case "person":
      this.statusMenu = 50;
      this.menus[0]=true;
      this.menus[1]=true;
      this.home = "../../../assets/images/icon-home-active.png";
      this.person = "../../../assets/images/icon-user-active.png";
      this.mission ="../../../assets/images/icon-quest.png";
      this.invite ="../../../assets/images/icon-invite.png";
      break;
    case "mission":
      this.statusMenu = 75;
      this.menus[0]= true;
      this.menus[1]= true;
      this.menus[2]= true;
      this.home = "../../../assets/images/icon-home-active.png";
      this.person = "../../../assets/images/icon-user-active.png";
      this.mission ="../../../assets/images/icon-quest-active.png";
      this.invite ="../../../assets/images/icon-invite.png";
      break;
    case "invite":
      this.statusMenu = 100;
      this.menus[0]= true;
      this.menus[1]= true;
      this.menus[2]= true;
      this.menus[3]= true;
      this.home = "../../../assets/images/icon-home-active.png";
      this.person = "../../../assets/images/icon-user-active.png";
      this.mission ="../../../assets/images/icon-quest-active.png";
      this.invite ="../../../assets/images/icon-invite-active.png";
      break;
           
  }
}
startGame(){
  this.start = !this.start;
  this.titleStart = !this.titleStart;

  if(this.start){
    this.menuExpand=true;
  }
  else{
    this.menuExpand=false;
  }
}
}
