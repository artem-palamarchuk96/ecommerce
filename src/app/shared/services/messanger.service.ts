import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';


@Injectable()
export class MessangerService {

    static instance: MessangerService;

    private subjects: any[] = [];

    constructor() {
        return MessangerService.instance = MessangerService.instance || this;
    }

    listener(name): any {
        this.createIfNew(name);
        return this.subjects[name].asObservable();
    }

    send(name, item?):void {
        this.createIfNew(name);
        this.subjects[name].next(item);
    }

    private checker(name): any {
        let newItem = true;
        for (let prop in this.subjects) {
            if (prop === name) newItem = false;
        };
        return newItem;
    }

    private createIfNew(name):void {
        if (this.checker(name)) this.subjects[name] = new Subject();
    }

}