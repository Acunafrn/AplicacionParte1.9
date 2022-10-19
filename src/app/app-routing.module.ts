import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NoIngresadoGuard } from './no-ingresado.guard';
import { IngresadoGuard } from './ingresado.guard';

const routes: Routes = [

  {
    path: 'loginpage',
    loadChildren: () => import('./pages/loginpage/loginpage.module').then( m => m.LoginpagePageModule),
    canActivate: [NoIngresadoGuard]
  
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule),
    canActivate: [IngresadoGuard]
  },
  {
    path: '',
    redirectTo: 'loginpage',
    pathMatch: 'full'
  },
  {
    path: 'cursos',
    loadChildren: () => import('./pages/cursos/cursos.module').then( m => m.CursosPageModule),
    canActivate: [IngresadoGuard]
  },
  {
    path: 'recpass',
    loadChildren: () => import('./pages/recpass/recpass.module').then( m => m.RecpassPageModule),
    canActivate: [NoIngresadoGuard]
  },
  {
    path: 'lista',
    loadChildren: () => import('./pages/lista/lista.module').then( m => m.ListaPageModule),
    canActivate: [IngresadoGuard]
  },
  {
    path: 'pgy',
    loadChildren: () => import('./pages/pgy/pgy.module').then( m => m.PgyPageModule),
    canActivate: [IngresadoGuard]
  },
  {
    path: 'lectorqr',
    loadChildren: () => import('./pages/lectorqr/lectorqr.module').then( m => m.LectorqrPageModule),
    canActivate: [IngresadoGuard]
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule),
    canActivate: [NoIngresadoGuard]
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
