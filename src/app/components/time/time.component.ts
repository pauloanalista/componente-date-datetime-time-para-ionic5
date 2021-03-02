import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.scss'],
})
export class TimeComponent implements OnInit {
  @Output() onGetValue = new EventEmitter<any>();

  @Input("value")
  data: any;

  @Input("required")
  required: any = false;

  constructor() { }

  ngOnInit() { }


  validarTime() {
    if (JSON.parse(this.required)==true && (this.data==undefined || this.data.length < 1 || this.data=='')){
      alert('Horário inválido!');
      this.data='';
      this.onGetValue.emit(this.data); 
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
      alert('Horário inválido!');
      this.data='';
      this.onGetValue.emit(this.data); 
    }
    this.onGetValue.emit(this.data); 
    return valid;
  }
}