import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(public alertController: AlertController) {}
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Muchas Gracias',
      message: 'Nuestros asesores se contactarán con tu referido. Pronto recibirás tus GoldenPuntos!',
      buttons: ['OK']
     
    });

    await alert.present();

  }

}
