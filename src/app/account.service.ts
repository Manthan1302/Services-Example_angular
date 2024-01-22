import {  EventEmitter, Injectable } from "@angular/core";
import { LoggingService } from "./logging.service";

//for inject a service into another service
@Injectable()
export class AccountService {
    accounts = [
        {
            name: "Master Account",
            status: 'active'
        },
        {
            name: "Test Account",
            status: 'inactive'
        },
        {
            name: "Hidden Account",
            status: 'unknown'
        },
    ];

    // statusUpdated = new EventEmitter<string>();

    // create a instance of logging service(inject service)
    constructor(private loggingService: LoggingService) {

    }

    addAccount(name: string, status: string) {
        this.accounts.push({ name: name, status: status });
        this.loggingService.logstatusChanged(status);
        console.log(this.accounts);

    };
    updateAccount(id: number, status: string) {
        this.accounts[id].status = status
        this.loggingService.logstatusChanged(status);
    };

    getData(){
        return this.accounts;
    }
}