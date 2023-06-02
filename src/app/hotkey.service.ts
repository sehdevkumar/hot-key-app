import { Injectable, HostListener } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HotKeyService {
  pressedKeyList: Set<string> = new Set();

  keyStore: Map<string, () => void> = new Map();

  constructor() {}

  onKeyDown(keyEvt: KeyboardEvent) {
    this.pressedKeyList.add(keyEvt?.key.toLowerCase());
    this.onVerifyPressedKeys();
  }

  onKeyUp(keyEvt: KeyboardEvent) {
    this.pressedKeyList.delete(keyEvt?.key.toLowerCase());
  }

  onVerifyPressedKeys() {
    const keyCombination = Array.from(this.pressedKeyList).join('+');
    console.log(keyCombination);
    this.keyStore.forEach((callback, key) => {
      if (key === keyCombination) {
        callback();
      }else {

      }
    });
  }

  onRegisterShortcutKey(key: string, callback: () => void) {
    this.keyStore.set(key.toLowerCase(), callback);
  }

  onUnRegisterShortcutKeys(key: string) {
    this.keyStore.delete(key.toLowerCase());
  }
}
