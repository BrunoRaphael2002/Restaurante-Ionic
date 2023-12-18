import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IonicModule } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonicModule, RouterLink, RouterLinkActive, CommonModule],
})
export class AppComponent {
  public appPages = [
   
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Lanches', url: '/lanches', icon: 'fast-food' },
    { title: 'Pratos de Entrada', url: '/pratos', icon: 'ellipse' },
    { title: 'Sobremesas', url: '/sobremesas', icon: 'ice-cream' },
    { title: 'Bebidas', url: '/bebidas', icon: 'beer' },
    
    
   
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
