import { AccountService } from './../account.service';

import { Component, EventEmitter, Output } from '@angular/core';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // providers :[LoggingService]
})
export class NewAccountComponent {


  constructor(private logginservice: LoggingService, private accountScrvice: AccountService) { 
    // this.accountScrvice.statusUpdated.subscribe(
    //   (status:string)=>alert("New Sataus:"+status)
    // )
  }
  onCreateAccount(accountName: string, accountstatus: string) {
    //call method of account services
    this.accountScrvice.addAccount(accountName, accountstatus)
    // this.logginservice.logstatusChanged(accountName)

  }
}
