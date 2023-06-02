import { Component, HostListener } from '@angular/core';
import { HotKeyService } from './hotkey.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private hts: HotKeyService) {
    this.hts.onRegisterShortcutKey('Control+Shift+X', this.callMe.bind(this));
  }

  @HostListener('window:keydown', ['$event'])
  onKeyDown(e: KeyboardEvent) {
    this.hts.onKeyDown(e);
  }

  @HostListener('window:keyup', ['$event'])
  onKeyUp(e: KeyboardEvent) {
    this.hts.onKeyUp(e);
  }

  callMe() {
    console.log('Hello World');
  }
}
