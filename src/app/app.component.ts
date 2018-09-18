import { Component } from '@angular/core';
import { WorkerService } from './services/worker-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'klarasmartai-app';

  constructor(private workerService : WorkerService){
       this.init();
  }

  /**
   * Init
   */
  init() : void
  {
    let tempObj = {
      action : 'search',
      result: []
    };
    this.sendMessage(tempObj);
  }

  /**
   * 
   * @param data Send Message
   */
  public sendMessage(data: any)
  {
       this.workerService.postMessage(data);
  }
}
