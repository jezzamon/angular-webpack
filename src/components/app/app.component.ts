import { Component } from '@angular/core';

import { RestService } from '../../services/rest.service';
import { FormData, Question } from '../../models';

@Component({
    moduleId: module.id,
    selector: 'new-app',
    templateUrl: 'app.component.html'/*,
    styleUrls: []*/
})
export class AppComponent {
    forms: FormData[] = null;


    constructor(private restService: RestService) {
        restService.getForms().subscribe((forms: FormData[]) => {
          this.forms = forms;

        });
    }
}
