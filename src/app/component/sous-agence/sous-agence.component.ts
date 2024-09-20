import { Component } from '@angular/core';
import { SidebarComponent } from "../sidebar/sidebar.component";

@Component({
  selector: 'app-sous-agence',
  standalone: true,
  imports: [SidebarComponent],
  templateUrl: './sous-agence.component.html',
  styleUrl: './sous-agence.component.scss'
})
export class SousAgenceComponent {

}
