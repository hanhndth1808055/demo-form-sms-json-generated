import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { CreateJsonFormGenService } from './create-json-form-gen.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demo-sms';
  variableArr = [];

  smsOptions = new FormControl();

  selected = '';
  smsResult = '';

  smsOptionArr: string[] = ['Thông tin của bạn là [ho_ten], mã khuyến mãi: [khuyen_mai], địa chỉ: [dia_chi].', 'Địa chỉ: [dia_chi_chi_tiet], Quận: [quan] và huyện [huyen].', 'Số chứng minh thư của bạn là: [so_cmnd], ngày cấp: [ngay_cap], nơi cấp: [noi_cap].'];
  
  form = new FormGroup({});

  // Values of formly generated
  model = {};

  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
  ];

  constructor(
    private createJsonFormGenService: CreateJsonFormGenService
  ) {  }

  ngOnInit(){
    // this.result = this.createJsonFormGenService.findInputNameArr('Can nhap [ho_ten] va [khuyen_mai] cung [dia_chi]');
    // this.fields = this.createJsonFormGenService.createJSONArr(['abc']);
    // this.model = this.createJsonFormGenService.createModel(['abc']);
  }

  onCheckSMS() {
    // console.log(this.form.controls);
    let arr = this.variableArr;

    for (let i = 0; i < arr.length; i++) {
      if(this.form.get(arr[i])) {
        // console.log(this.smsResult);
        // console.log(arr[i]);
        this.smsResult = this.smsResult.replace('['+ arr[i] + ']', this.form.get(arr[i]).value)
      };      
    }
    // alert(
    //   JSON.stringify(this.model, null, 4)
    // );
  }

  onOptionsSelected(event){
    this.variableArr = this.createJsonFormGenService.findInputNameArr(this.selected);
    this.fields = this.createJsonFormGenService.createJSONArr(this.variableArr);
    this.model = this.createJsonFormGenService.createModel(this.variableArr);
    this.smsResult = 'Your Result: ' + this.selected;
  }
}
