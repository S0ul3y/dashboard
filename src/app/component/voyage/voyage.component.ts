import { Component } from '@angular/core';
import { SidebarComponent } from "../sidebar/sidebar.component";

@Component({
  selector: 'app-voyage',
  standalone: true,
  imports: [SidebarComponent],
  templateUrl: './voyage.component.html',
  styleUrl: './voyage.component.scss'
})
export class VoyageComponent {

}
