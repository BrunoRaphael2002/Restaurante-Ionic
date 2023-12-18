import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, NavController } from '@ionic/angular';

@Component({
  selector: 'app-empanado',
  templateUrl: './empanado.page.html',
  styleUrls: ['./empanado.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class EmpanadoPage implements OnInit {

  constructor(private navController: NavController) { }
  voltar(){
  this.navController.navigateBack('lanches')
  }

  ngOnInit() {
  }

}
