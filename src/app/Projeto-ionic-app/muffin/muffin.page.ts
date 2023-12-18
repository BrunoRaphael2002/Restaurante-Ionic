import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, NavController } from '@ionic/angular';

@Component({
  selector: 'app-muffin',
  templateUrl: './muffin.page.html',
  styleUrls: ['./muffin.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class MuffinPage implements OnInit {

  constructor(private navController: NavController) { }
  voltar(){
  this.navController.navigateBack('sobremesas')
  }

  ngOnInit() {
  }

}
