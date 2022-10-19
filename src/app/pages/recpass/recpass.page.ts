import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-recpass',
  templateUrl: './recpass.page.html',
  styleUrls: ['./recpass.page.scss'],
})
export class RecpassPage implements OnInit {

  recpass={
    email:''
  }

  constructor(private router:Router,private alertController:AlertController) { }

  ngOnInit() {
  }

  async onSubmit()
  {
    if(this.recpass.email=='saru@saru')
    {
      const alert = await this.alertController.create({
        header:'Recuperacion de contraseña',
        subHeader:'',
        message:'Se enviara un correo con un enlace para la recuperacion de la contraseña',
        buttons: [
          {
            text: 'Aceptar',
            role: 'confirm',
            handler: () => {
              console.log('Alert confirmed');
            }
          }

        ],
        mode:'ios',
      backdropDismiss:false,
      cssClass:'miclase',
      });
      await alert.present();

      const { role } = await alert.onDidDismiss();
      console.log(`Dismissed with role: ${role}`);
    }
    }

  }
  


