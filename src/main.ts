import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { platformWorkerAppDynamic } from '@angular/platform-webworker-dynamic';
import { bootstrapWorkerUi } from '@angular/platform-webworker';
import { environment } from './environments/environment';
import { AppModule} from './app/app.module';

if (environment.production) {
  enableProdMode();
}

// bootstrapWorkerUi('webworker.bundle.js');

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
