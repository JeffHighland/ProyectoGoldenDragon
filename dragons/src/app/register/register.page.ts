import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {

  constructor (
    public alertController: AlertController,
    private navCtrl : NavController
    )
    {}

  back(){
    this.navCtrl.navigateForward('');
  }
  async register() {
    const alert = await this.alertController.create({
      header: 'Muchas Gracias',
      message: 'En un momento enviaremos su usuario y contraseña para poder acceder',
      buttons: ['OK']
     
    });
    await alert.present();
}
}