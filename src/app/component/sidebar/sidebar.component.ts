import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { ActivatedRoute,NavigationEnd,Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [NgFor,NgIf,RouterLink, NgClass,RouterOutlet],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  visible = false;
  activeRoute:string='';

  constructor(public router:Router){
    this.router.events.subscribe((event)=>{
      if(event instanceof NavigationEnd){
        this.activeRoute = event.urlAfterRedirects;
      }
    });
  }




ngOnInit() {
  this.activeRoute = this.router.url;
}

Affiche() {
  if (this.visible === false) {
    this.visible = true;
  } else {
    this.visible = false;
  }
}

}
