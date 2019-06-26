import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor( public alertController: AlertController ) {}
  async refaction() {
    const alert = await this.alertController.create({
      header: 'Solicitud Enviada',
      message: 'En unos minutos un asesor se comunicará contigo.',
      buttons: ['OK']
     
    });

    await alert.present();
    

  }

}
