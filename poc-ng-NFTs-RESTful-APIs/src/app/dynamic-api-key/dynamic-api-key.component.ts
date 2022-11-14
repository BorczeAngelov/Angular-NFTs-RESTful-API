import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-dynamic-api-key',
  templateUrl: './dynamic-api-key.component.html',
  styleUrls: ['./dynamic-api-key.component.css']
})
export class DynamicApiKeyComponent implements OnInit {

  formControl = new FormControl('', [Validators.required, Validators.nullValidator]);

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {

    this.formControl.valueChanges.subscribe(value => {
      console.log("Api Key value changed. New value = " + value);

      if (value) {
        this.httpService.apiKey = value
      }
    });
  }

}
