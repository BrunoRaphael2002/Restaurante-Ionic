import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, NavController } from '@ionic/angular';

@Component({
  selector: 'app-espaguete',
  templateUrl: './espaguete.page.html',
  styleUrls: ['./espaguete.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class EspaguetePage implements OnInit {

  constructor(private navController: NavController) { }
  voltar(){
  this.navController.navigateBack('pratos')
  }

  ngOnInit() {
  }

}
