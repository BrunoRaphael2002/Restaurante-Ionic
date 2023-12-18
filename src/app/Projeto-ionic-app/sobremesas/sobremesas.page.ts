import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, NavController } from '@ionic/angular';

@Component({
  selector: 'app-sobremesas',
  templateUrl: './sobremesas.page.html',
  styleUrls: ['./sobremesas.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class SobremesasPage implements OnInit {

  constructor(private navController: NavController) { }
 macaron(){
  this.navController.navigateForward('macaron')
  }
  bolo(){
    this.navController.navigateForward('bolo')
    }
    cakePops(){
      this.navController.navigateForward('cake-pops')
      }
     morango(){
        this.navController.navigateForward('morango')
        }
       muffin(){
          this.navController.navigateForward('muffin')
          }

  ngOnInit() {
  }

}
