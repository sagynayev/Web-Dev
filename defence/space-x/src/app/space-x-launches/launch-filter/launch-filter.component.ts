import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-launch-filter',
  templateUrl: './launch-filter.component.html',
  styleUrls: ['./launch-filter.component.css']
})
export class LaunchFilterComponent {
  @Output() filterEvent = new EventEmitter<void>();
  
  filter(): void {
    this.filterEvent.emit();
  }
}


