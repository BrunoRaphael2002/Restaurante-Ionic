import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, NavController } from '@ionic/angular';

@Component({
  selector: 'app-x-burgger',
  templateUrl: './x-burgger.page.html',
  styleUrls: ['./x-burgger.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class XBurggerPage implements OnInit {

  constructor(private navController: NavController) { }
  voltar(){
  this.navController.navigateBack('lanches')
  }

  ngOnInit() {
  }

}
