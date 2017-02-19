import { Component } from '@angular/core';

import { RestService } from '../../services/rest.service';
import { FormData, Question } from '../../models';

@Component({
    selector: 'new-app',
    template: require('./app.component.html'),
//    styleUrls: ['./app.component.css']
})
export class AppComponent {
    forms: FormData[] = null;


    constructor(private restService: RestService) {
        restService.getForms().subscribe((forms: FormData[]) => {
          this.forms = forms;

        });
    }
}
