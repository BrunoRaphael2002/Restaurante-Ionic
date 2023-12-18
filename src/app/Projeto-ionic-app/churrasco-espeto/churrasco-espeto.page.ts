import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, NavController } from '@ionic/angular';

@Component({
  selector: 'app-churrasco-espeto',
  templateUrl: './churrasco-espeto.page.html',
  styleUrls: ['./churrasco-espeto.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ChurrascoEspetoPage implements OnInit {

  constructor(private navController: NavController) { }
  voltar(){
  this.navController.navigateBack('lanches')
  }

  ngOnInit() {
  }

}
