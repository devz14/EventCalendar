import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { DemoModule } from './app/app.module';
import { DemoComponent } from './app/app.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DemoModule
  ],
  bootstrap: [DemoComponent]
})
export class BootstrapModule { }

platformBrowserDynamic().bootstrapModule(BootstrapModule).then(ref => {
  // Ensure Angular destroys itself on hot reloads.
  // tslint:disable-next-line: no-string-literal
  if (window['ngRef']) {
    // tslint:disable-next-line: no-string-literal
    window['ngRef'].destroy();
  }
  // tslint:disable-next-line: no-string-literal
  window['ngRef'] = ref;

  // Otherwise, log the boot error
}).catch(err => console.error(err));
