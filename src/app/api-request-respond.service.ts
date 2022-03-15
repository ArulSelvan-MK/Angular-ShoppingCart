import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class ApiRequestRespondService {

    baseUrl : String = 'https://uiexercise.onemindindia.com/api/';

    constructor(public http : HttpClient) {}


    processGet(path : String) {
        return this.http.get(this.baseUrl + '' + path);
    }


    processPost(path : String, contentType : any, data : object) {
        const httpOptions = {
            headers: new HttpHeaders(
                {'Content-Type': contentType}
            )
        };
        return this.http.post(this.baseUrl + '' + path, httpOptions, data);
    }
}
