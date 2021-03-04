import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, NgModule, OnInit, Output, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-datetime',
  templateUrl: './datetime.component.html',
  styleUrls: ['./datetime.component.scss'],
})


export class DatetimeComponent implements OnInit {
  @Output() onGetValue = new EventEmitter<any>();
  @Output() onValid = new EventEmitter<boolean>();

  @Input("value")
  data: any;

  @Input("required")
  required: any = false;

  constructor() { }

  ngOnInit() { }

  validarData() {

    if (JSON.parse(this.required) == false && (this.data == null || this.data == undefined || this.data == '')) {
      this.onGetValue.emit(this.data);
      return;
    }

    if (JSON.parse(this.required) == true && (this.data == null || this.data == undefined || this.data == '')) {
      this.onGetValue.emit(this.data);
      this.onValid.emit(false);
      return;
    }

    if (this.validateDate(this.data) == false) {
      this.onValid.emit(false);
      this.data = '';
      this.onGetValue.emit(this.data);
      return;
    }

    let dataFormatada = this.convertToDateTime(this.data);
    this.onGetValue.emit(dataFormatada);
    this.onValid.emit(true);

  }

  // A data passada deve estar no padrão:
  // DD/MM/YYYY HH:mm
  convertToDateTime(dateTimeString) {
    // Primeiro, dividimos a data completa em duas partes:
    const [date, time] = dateTimeString.split(' ');

    // Dividimos a data em dia, mês e ano:
    const [DD, MM, YYYY] = date.split('/');

    // Dividimos o tempo em hora e minutos:
    const [HH, mm] = time.split(':');

    // Retornamos a data formatada em um padrão compatível com ISO:
    let newFormat = `${YYYY}-${MM}-${DD}T${HH}:${mm}`;

    return new Date(newFormat);
  }

  validateDate(dt) {
    try {
      var isValidDate = false;
      var arr1 = dt.split('/');
      var year = 0; var month = 0; var day = 0; var hour = 0; var minute = 0; var sec = 0;
      if (arr1.length == 3) {
        var arr2 = arr1[2].split(' ');
        if (arr2.length == 2) {
          var arr3 = arr2[1].split(':');
          try {
            year = parseInt(arr2[0], 10);
            month = parseInt(arr1[1], 10);
            day = parseInt(arr1[0], 10);
            hour = parseInt(arr3[0], 10);
            minute = parseInt(arr3[1], 10);
            //sec = parseInt(arr3[0],10);
            sec = 0;
            var isValidTime = false;
            if (hour >= 0 && hour <= 23 && minute >= 0 && minute <= 59 && sec >= 0 && sec <= 59 && month >= 0 && month <= 11)
              isValidTime = true;
            else if (hour == 24 && minute == 0 && sec == 0 && month >= 0 && month <= 11)
              isValidTime = true;

            if (isValidTime) {
              var isLeapYear = false;
              if (year % 4 == 0)
                isLeapYear = true;

              if ((month == 4 || month == 6 || month == 9 || month == 11) && (day >= 0 && day <= 30))
                isValidDate = true;
              else if ((month != 2) && (day >= 0 && day <= 31))
                isValidDate = true;

              if (!isValidDate) {
                if (isLeapYear) {
                  if (month == 2 && (day >= 0 && day <= 29))
                    isValidDate = true;
                }
                else {
                  if (month == 2 && (day >= 0 && day <= 28))
                    isValidDate = true;
                }
              }
            }
          }
          catch (er) { isValidDate = false; }
        }

      }

      return isValidDate;
    }
    catch (err) { alert('ValidateDate: ' + err); }
  }
}
