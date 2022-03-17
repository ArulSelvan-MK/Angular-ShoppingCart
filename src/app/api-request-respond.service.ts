import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class ApiRequestRespondService {

    baseUrl : String = 'https://uiexercise.onemindindia.com/api/';

    constructor(public http : HttpClient) {}


    processGet(path : String) {
        return this.http.get(this.baseUrl + '' + path);
    }


    processPost(path : String, data : object) {
        return this.http.post(this.baseUrl + '' + path, data);
    }
}
