import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, NavController } from '@ionic/angular';

@Component({
  selector: 'app-bebidas',
  templateUrl: './bebidas.page.html',
  styleUrls: ['./bebidas.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class BebidasPage implements OnInit {

  constructor(private navController: NavController) { }
  guaranaLitro(){
  this.navController.navigateForward('guarana-l')
  }
  cocaZero(){
    this.navController.navigateForward('coca-zero')
    }
    cocaLitro(){
      this.navController.navigateForward('coca-l')
      }
     h2O(){
        this.navController.navigateForward('limoneto')
        }
       latinha(){
          this.navController.navigateForward('guarana-lata')
          }

  ngOnInit() {
  }

}
