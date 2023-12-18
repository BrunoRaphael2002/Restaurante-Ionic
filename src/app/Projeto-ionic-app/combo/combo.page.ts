import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, NavController } from '@ionic/angular';

@Component({
  selector: 'app-combo',
  templateUrl: './combo.page.html',
  styleUrls: ['./combo.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ComboPage implements OnInit {

  constructor(private navController: NavController) { }
  voltar(){
  this.navController.navigateBack('home')
  }

  ngOnInit() {
  }

}
