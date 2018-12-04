import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare var $:any;

@Component({
  selector: 'cep-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    $(document).ready(function(){
      $('.sidenav').sidenav();
    });
  }


  changeRoute(route){

    switch(route){
      case 'main':
        this.router.navigate(['/main']);
      break;
      case 'search':
        this.router.navigate(['/search']);
      break;
      case 'about':
        this.router.navigate(['/about']);
      break;
    }
  }
}
