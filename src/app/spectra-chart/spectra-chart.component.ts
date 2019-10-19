import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
    selector: 'app-spectra-chart',
    templateUrl: './spectra-chart.component.html',
    styleUrls: ['./spectra-chart.component.css']
})
export class SpectraChartComponent implements OnInit {

    // xScaleMin = 70.0;
    // xScaleMax = 710.0;
    // yScaleMin = 12000.0;
    // yScaleMax = 6402000;

    @Input() data: any = {};
    @Input() width?: number;
    @Input() height?: number;

    results: any[];

    // options
    view = [this.width || 700, this.height || 400];
    showXAxis = true;
    showYAxis = true;
    gradient = false;
    showLegend = false;
    showXAxisLabel = true;
    showYAxisLabel = true;
    xAxisLabel = 'Mass';
    yAxisLabel = 'Intensity';
    // legendTitle = '';
    colorScheme = {
        domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
    };

    constructor() {
        this.results = [];
    }

    ngOnInit() {}

    addResult(res: any, name: string) {
        return {
            "name": name, 
            "series": [
                {
                    "name": Number(res[0]),
                    "value": Number(res[1])
                },
                {
                    "name": Number(res[0]),
                    "value": 0
                }
            ]
        };
    }
    
    processResults(spectra: any) {
        // this.legendTitle = spectra["name"];
        const mi_pairs = spectra["spectra"].split(' ').map(mi => mi.split(':'));

        // const maxIn = Math.max(mi_pairs.map(x => Number(x[1])));

        mi_pairs.forEach(pair => {
            this.results.push(this.addResult(pair, spectra["name"]));
        });
    }

    isEmpty(dict: any): Boolean {
        for (const key in dict) {
            return false;
        }
        return true;
    }

    ngOnChanges() {
        if (!this.isEmpty(this.data)) {
            this.processResults(this.data);
        }
    }
    
}
