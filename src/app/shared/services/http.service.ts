import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';


@Injectable()
export class HttpService {

    private headers:Headers = new Headers();

    constructor(private http:Http) {
        this.configHeaders();
    }

    get(url) {
        return this.http.get(url, {headers: this.headers});
    }

    post(url, data?) {
        return this.http.post(url, data, {headers: this.headers});
    }

    put(url, data?) {
        return this.http.put(url, data, {headers: this.headers});
    }

    delete(url, data?) {
        return this.http.delete(url, data);
    }

    private configHeaders() {
        this.headers.append('Content-Type', 'application/json');
        this.headers.append("Cache-Control", "no-cache");
        this.headers.append("Pragma", "no-cache");
    }

    errorHandler = (err) => {
        console.log(err);
    };

}