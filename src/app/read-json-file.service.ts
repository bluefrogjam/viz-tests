import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ReadJsonFileService {

    constructor(
        private http: HttpClient
    ) { }
    
    getJSON(): Observable<any> {
        return this.http.get('../assets/042019_LiLysoDrugs_CSHPOS_030_Li_16.msms_small.json') as Observable<any>;
    }
}
