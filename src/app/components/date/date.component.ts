import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss'],
})
export class DateComponent implements OnInit {

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
      //alert('data invalida');
      this.data = '';
      this.onGetValue.emit(this.data);
      return;
    }

    let dataFormatada = this.convertToDate(this.data)
    this.onGetValue.emit(dataFormatada);
    this.onValid.emit(true);
  }

  validateDate(input_date) {
    var parts = input_date.split(/[\/\-\.]/);

    if (parts.length < 3) {
      return false;
    }
    var dt = new Date(parts[2], parts[1] - 1, parts[0]);
    //console.log("date is ", dt.toString());
    return (dt && dt.getMonth() === parseInt(parts[1], 10) - 1)

  }

  convertToDate(input_date) {
    var parts = input_date.split(/[\/\-\.]/);

    if (parts.length < 3) {
      return false;
    }
    var dt = new Date(parts[2], parts[1] - 1, parts[0]);

    return dt;

  }
}
