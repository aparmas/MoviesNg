import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-base-list',
  standalone: true,
  imports: [],
  templateUrl: './base-list.component.html',
  styleUrl: './base-list.component.css'
})
export class BaseListComponent {
  @Input({required : true})
  list:any;

}
