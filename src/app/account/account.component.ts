import { AccountService } from '../account.service';
import { LoggingService } from './../logging.service';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // providers: [AccountService]
})
export class AccountComponent {
  // @Input() account!: { name: string, status: string };
  // @Input() id!: number;


  constructor(private logginService: LoggingService, private accountScrvice: AccountService) { }
  data= this.accountScrvice.getData();

  onSetTo(id:number,status: string) {
    //call method of account services
    this.accountScrvice.updateAccount(id, status)
    // this.logginService.logstatusChanged(status)
    // this.accountScrvice.statusUpdated.emit(status)
  }

  
}
