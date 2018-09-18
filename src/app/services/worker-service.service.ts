import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class WorkerService {

  /**
   * @type{*}
   * @memberof WorkerService
   */
  webWorker: any

  requestResultSubcription$: BehaviorSubject<any>;

  requestResult: any;
  
  tempObject : any = {
    action : 'search',
    result: []
  };

  constructor() {
    this.webWorker = new Worker('/assets/scripts/web-worker.js');
    this.onmessage(this.tempObject);    
    //this.requestResultSubcription$ = new BehaviorSubject<any>([]);
  }

  /**
   * 
   * @param data 
   */
  postMessage(data: any): void {
    console.warn(data);
    this.webWorker.postMessage(data);
  }

  onmessage(data): void {
    this.webWorker.onmessage = function (data: any) {
      this.requestResult = data.data.result;
      console.warn(this.requestResult);
    }.bind(this);
  }

  terminate(): void {
    this.webWorker.terminate();
  }


}
