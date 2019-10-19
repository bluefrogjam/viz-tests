import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxTestComponent } from './ngx-test/ngx-test.component';
import { ViewChartComponent } from './view-chart/view-chart.component';

import { NgxChartsModule } from '@swimlane/ngx-charts';
import { HttpClientModule } from '@angular/common/http';

import { StaticData } from 'src/app/static-data';
import { SpectraChartComponent } from './spectra-chart/spectra-chart.component';

@NgModule({
	declarations: [
		AppComponent,
		NgxTestComponent,
		ViewChartComponent,
		SpectraChartComponent
	],
	imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        NgxChartsModule,
        HttpClientModule
	],
	providers: [ StaticData ],
	bootstrap: [AppComponent]
})
export class AppModule { }
