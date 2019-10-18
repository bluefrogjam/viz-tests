import { Component, OnInit, Input } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { StaticData } from '../static-data';

// Testing stuff
import { saveAs } from 'file-saver';

@Component({
    selector: 'app-ngx-test',
    templateUrl: './ngx-test.component.html',
    styleUrls: ['./ngx-test.component.css']
})
export class NgxTestComponent implements OnInit {
    @Input() data: any = {};
    @Input() width?: number;
    @Input() height?: number;

    results: any[];

    // options
    view = [this.width || 700, this.height || 400];
    showXAxis = true;
    showYAxis = true;
    gradient = false;
    showLegend = true;
    showXAxisLabel = true;
    showYAxisLabel = true;
    xAxisLabel = 'Original';
    yAxisLabel = 'Corrected';
    colorScheme = {
        domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
    };

    // xScaleMin = 70.0;
    // xScaleMax = 710.0;
    // yScaleMin = 12000.0;
    // yScaleMax = 6402000;

    fakeData: any = {};

    constructor(
        private staticData: StaticData
    ) { 
        // this.results = [];
    }

    ngOnInit() {
        this.results = [];
        // this.results = this.staticData.dataSpectra;
        // console.log(this.results);
        // this.results = [];
    }

    processResult(spectra: any[]): any {
        return {
            "name": spectra["name"],
            "series": spectra["spectra"].split(' ').map(mi => {
                const pair = mi.split(':');
                return {
                    "name": pair[0], "value": Number(pair[1])
                };
            })
        };
    }

    getResults() {
        this.data.forEach((element: any) => {
            this.results.push(this.processResult(element));
        });
        console.log(this.results);

        // this.writeJsonFile();
    }

    fakeGetResults() {
        // fails
        // this.fakeData = this.staticData.dataSpectra;
        // this.fakeData.forEach((element: any) => {
        //     this.results.push(element);
        //     // console.log(element);
        // });
        // console.log(this.results);

        // works
        this.results = this.staticData.dataSpectra;
    }

    ngOnChanges() {
        // console.log(this.results);
        // // For some reason this line is crucial for getResults() to work
        this.results = [];
        // console.log(this.results);

        if (this.data && this.data.length > 0) {
            this.getResults();
            // this.fakeGetResults();
        }
    }

    // Turn this.results into a json file
    writeJsonFile() {
        let spectraStr = '[\n';
        let nameSerArr = [];
        let nameSerStr = '';
        this.results.forEach((nameSer: any) => {
            nameSerStr = '{\n\t"name": "' + nameSer['name'] + '",\n\t"series": [\n';
            let nameValStr = '';
            let nameValArr = [];
            nameSer['series'].forEach((nameVal: any) => {
                nameValArr.push('\t{\n\t\t\t"name": "' + nameVal['name'] + '",\n\t\t\t"value": ' + nameVal['value'] + '\n\t\t}');
            });
            nameValStr = nameValArr.join(',\n\t');
            nameSerStr += nameValStr + '\n\t]\n}';
            nameSerArr.push(nameSerStr);
        });
        spectraStr += nameSerArr.join(',\n') + '\n];';
        const blob = new Blob([spectraStr], {type: 'text/plain;charset=utf-8'});
        saveAs(blob, "json_test.txt");
    }

}
