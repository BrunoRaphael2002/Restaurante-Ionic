import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, NavController } from '@ionic/angular';

@Component({
  selector: 'app-pratos',
  templateUrl: './pratos.page.html',
  styleUrls: ['./pratos.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class PratosPage implements OnInit {

  constructor(private navController: NavController) { }
  almondega(){
  this.navController.navigateForward('almondega')
  }
salmao(){
    this.navController.navigateForward('salmao')
    }
   salada(){
      this.navController.navigateForward('salada')
      }
     espaguete(){
        this.navController.navigateForward('espaguete')
        }
       frango(){
          this.navController.navigateForward('frango-potato')
          }

  ngOnInit() {
  }

}
