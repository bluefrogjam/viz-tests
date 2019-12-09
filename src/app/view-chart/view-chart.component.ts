import { Component, OnInit } from '@angular/core';
import { ReadJsonFileService } from '../read-json-file.service';

import { Observable } from 'rxjs';
import { Config } from 'protractor';

import { timeout } from 'rxjs/operators';

@Component({
    selector: 'app-view-chart',
    templateUrl: './view-chart.component.html',
    styleUrls: ['./view-chart.component.css']
})
export class ViewChartComponent implements OnInit {

    data: any;
    
    constructor(
        private readJsonFileService: ReadJsonFileService
    ) { }

    ngOnInit() {
        this.data = {};
    }

    getData() {
        const self = this;
        this.readJsonFileService.getJSON().pipe(timeout(5000)).subscribe({
            next(jsonData) {
                self.data = jsonData['spectra'];
            },
            error() {
                console.log("LOL ERROR");
            }
        });
    }

}
