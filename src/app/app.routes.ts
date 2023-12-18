import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {

    path: 'home',
    loadComponent: () => import('./Projeto-ionic-app/home/home.page').then( m => m.HomePage)
  },
  {
    path: 'lanches',
    loadComponent: () => import('./Projeto-ionic-app/lanches/lanches.page').then( m => m.LanchesPage)
  },
  {
    path: 'pratos',
    loadComponent: () => import('./Projeto-ionic-app/pratos/pratos.page').then( m => m.PratosPage)
  },
  {
    path: 'sobremesas',
    loadComponent: () => import('./Projeto-ionic-app/sobremesas/sobremesas.page').then( m => m.SobremesasPage)
  },
  {
    path: 'bebidas',
    loadComponent: () => import('./Projeto-ionic-app/bebidas/bebidas.page').then( m => m.BebidasPage)
  },
  {
    path: 'combo',
    loadComponent: () => import('./Projeto-ionic-app/combo/combo.page').then( m => m.ComboPage)
  },
  {
    path: 'empanado',
    loadComponent: () => import('./Projeto-ionic-app/empanado/empanado.page').then( m => m.EmpanadoPage)
  },
  {
    path: 'x-burgger',
    loadComponent: () => import('./Projeto-ionic-app/x-burgger/x-burgger.page').then( m => m.XBurggerPage)
  },
  {
    path: 'pizza',
    loadComponent: () => import('./Projeto-ionic-app/pizza/pizza.page').then( m => m.PizzaPage)
  },
  {
    path: 'churrasco-espeto',
    loadComponent: () => import('./Projeto-ionic-app/churrasco-espeto/churrasco-espeto.page').then( m => m.ChurrascoEspetoPage)
  },
  {
    path: 'vegano',
    loadComponent: () => import('./Projeto-ionic-app/vegano/vegano.page').then( m => m.VeganoPage)
  },
  {
    path: 'almondega',
    loadComponent: () => import('./Projeto-ionic-app/almondega/almondega.page').then( m => m.AlmondegaPage)
  },
  {
    path: 'salmao',
    loadComponent: () => import('./Projeto-ionic-app/salmao/salmao.page').then( m => m.SalmaoPage)
  },
  {
    path: 'salada',
    loadComponent: () => import('./Projeto-ionic-app/salada/salada.page').then( m => m.SaladaPage)
  },
  {
    path: 'espaguete',
    loadComponent: () => import('./Projeto-ionic-app/espaguete/espaguete.page').then( m => m.EspaguetePage)
  },
  {
    path: 'frango-potato',
    loadComponent: () => import('./Projeto-ionic-app/frango-potato/frango-potato.page').then( m => m.FrangoPotatoPage)
  },
  {
    path: 'macaron',
    loadComponent: () => import('./Projeto-ionic-app/macaron/macaron.page').then( m => m.MacaronPage)
  },
  {
    path: 'bolo',
    loadComponent: () => import('./Projeto-ionic-app/bolo/bolo.page').then( m => m.BoloPage)
  },
  {
    path: 'cake-pops',
    loadComponent: () => import('./Projeto-ionic-app/cake-pops/cake-pops.page').then( m => m.CakePopsPage)
  },
  {
    path: 'morango',
    loadComponent: () => import('./Projeto-ionic-app/morango/morango.page').then( m => m.MorangoPage)
  },
  {
    path: 'muffin',
    loadComponent: () => import('./Projeto-ionic-app/muffin/muffin.page').then( m => m.MuffinPage)
  },
  {
    path: 'guarana-l',
    loadComponent: () => import('./Projeto-ionic-app/guarana-l/guarana-l.page').then( m => m.GuaranaLPage)
  },
  {
    path: 'coca-l',
    loadComponent: () => import('./Projeto-ionic-app/coca-l/coca-l.page').then( m => m.CocaLPage)
  },
  {
    path: 'limoneto',
    loadComponent: () => import('./Projeto-ionic-app/limoneto/limoneto.page').then( m => m.LimonetoPage)
  },
  {
    path: 'guarana-lata',
    loadComponent: () => import('./Projeto-ionic-app/guarana-lata/guarana-lata.page').then( m => m.GuaranaLataPage)
  },
  {
    path: 'coca-zero',
    loadComponent: () => import('./Projeto-ionic-app/coca-zero/coca-zero.page').then( m => m.CocaZeroPage)
  },
  

 

];
