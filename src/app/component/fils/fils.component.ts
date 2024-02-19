import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-fils',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.css']
})
export class FilsComponent {
  // on a créer l'event
  @Output()
  sendMessage = new EventEmitter<string>()

  // filsComponent(message = 'my own message')

  @Input({
    // required: true,
    // alias: 'fils',
    // transform:
  }) message = 'my own message';


  /**
   *
   */
  onSendMessage() {
    this.sendMessage.emit('cc papa');
  }
}
