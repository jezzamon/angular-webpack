import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { RestService } from './services/rest.service';

import {
    AppComponent
} from './components';

@NgModule({
    bootstrap: [ AppComponent ],
    declarations: [ AppComponent],
    imports: [
        BrowserModule,
        HttpModule,


    ],
    providers: [ RestService ]
})
export class AppModule {}
