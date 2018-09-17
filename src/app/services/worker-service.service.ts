import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WorkerService {

  /**
   * @type{*}
   * @memberof WorkerService
   */
  webWorker:any

  constructor() {
    this.webWorker = new Worker('/assets/scripts/search-worker.js');
   }

   /**
    * 
    * @param data 
    */
   postMessage(data: any) : void{
     this.webWorker.postMessage(data);
   }

   
}
