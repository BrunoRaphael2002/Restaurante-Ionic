import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, NavController } from '@ionic/angular';

@Component({
  selector: 'app-lanches',
  templateUrl: './lanches.page.html',
  styleUrls: ['./lanches.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class LanchesPage implements OnInit {

  constructor(private navController: NavController) { }
  frangoEmpanado(){
  this.navController.navigateForward('empanado')
  }
  xBurgger(){
    this.navController.navigateForward('x-burgger')
    }
    pizza(){
      this.navController.navigateForward('pizza')
      }
     churrasco(){
        this.navController.navigateForward('churrasco-espeto')
        }
       vegan(){
          this.navController.navigateForward('vegano')
          }
  ngOnInit() {
  }

}
