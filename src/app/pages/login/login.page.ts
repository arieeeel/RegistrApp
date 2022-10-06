import { Component, OnInit } from '@angular/core';
import { 
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
 } from '@angular/forms';
import { AlertController, NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formularioLogin: FormGroup;

  constructor(public fb: FormBuilder,
    public alertController: AlertController,
    public navCtrl: NavController,
    private toastCtrl: ToastController) {

    this.formularioLogin = this.fb.group({
      'nombre': new FormControl("",Validators.required),
      'password': new FormControl("",Validators.required)
    })

   }

  ngOnInit(){
  }

  async ingresar(){

    var f = this.formularioLogin.value;

    var usuario = JSON.parse(localStorage.getItem('usuario'));
    if(usuario.nombre == f.nombre && usuario.password == f.password){
      this.presentToast('Bienvenido ' + usuario.nombre);
      console.log('Ingresado');
      localStorage.setItem('ingresado','true');
      this.navCtrl.navigateRoot('home');
    }else{
      const alert = await this.alertController.create({
        header: 'Datos Incorrectos',
        message: 'Los datos que ingresaste son incorrectos o estan incompletos.',
        buttons: ['Aceptar']
      });

      await alert.present();
    }
  }

  async presentToast(message: string, duration?: number){
    const toast = await this.toastCtrl.create({
      message : message,
      duration : duration?duration:5000,
      icon : 'happy',
      color : "dark"
      
    });
    toast.present();
  }



}
