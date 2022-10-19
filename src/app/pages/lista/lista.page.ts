import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage implements OnInit {



  constructor() { }

  coleccion:any=[];
  avatar=
  {
    imagen:'/assets/ecchi.jpg',
    nombre:'Juan Guajardo',
    subtexto:'Me eche Introduccion a la confiteria'
  }
  

  ngOnInit() {
  }

  doRefresh(evento){
    console.log("Refrescando la página");
    console.log(evento);

    setTimeout(() => {
      evento.target.complete();
      
      for (let index = 0; index < 1; index++) {
        this.coleccion[index]=this.avatar;
        
      }


    }, 2000);
  }

}

