import { Component, OnInit } from '@angular/core';
import { RoomPage } from  '../room/room';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {
  data = { nickname:"" };
  constructor() {
    
   }
   enterNickname() {
    this.navCtrl.setRoot(RoomPage, {
      nickname: this.data.nickname
    });
  }
  ngOnInit() {
  }

}
