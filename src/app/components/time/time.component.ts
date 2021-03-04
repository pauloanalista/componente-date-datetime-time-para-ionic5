import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.scss'],
})
export class TimeComponent implements OnInit {
  @Output() onGetValue = new EventEmitter<any>();
  @Output() onValid = new EventEmitter<boolean>();

  @Input("value")
  data: any;

  @Input("required")
  required: any = false;

  constructor() { }

  ngOnInit() { }


  validarTime() {
    if (JSON.parse(this.required)==true && (this.data==undefined || this.data.length < 1 || this.data=='')){
      this.data='';
      this.onGetValue.emit(this.data); 
      this.onValid.emit(false);
      return;
    }

    if ((!this.data || this.data.length < 1)) { return false; }
    var time = this.data.split(':');
    let valid = time.length === 2
      && parseInt(time[0], 10) >= 0
      && parseInt(time[0], 10) <= 23
      && parseInt(time[1], 10) >= 0
      && parseInt(time[1], 10) <= 59;

    if (valid == false) {
      this.data='';
      this.onGetValue.emit(this.data); 
    }
    
    this.onGetValue.emit(this.data); 
    this.onValid.emit(valid);
    return valid;
  }
}