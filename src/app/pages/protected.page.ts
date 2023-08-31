import { Component } from '@angular/core';
import {injectLoad} from "@analogjs/router";
import {load} from "./protected.server";

@Component({
  selector: 'app-protected',
  standalone: true,
  template: `This is only showing if you logged inside the app`,
})
export default class ProtectedPage {
  count = 0;
  // $data = injectLoad<typeof load>()

  increment() {
    this.count++;
  }
}
