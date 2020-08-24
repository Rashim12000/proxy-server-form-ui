import { Component, OnInit } from '@angular/core';
import { UserSettings } from '../data/user-settings';
import { NgForm, NgModel } from '@angular/forms';
import { UserSettingService } from './user-settings-service';

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css']
})
export class UserSettingsFormComponent implements OnInit {

  userSettings: UserSettings = {
    name: 'Sheldon',
    savePayment: true,
    amount: "10",
    subscriptionType: 'Annual',
    notes: 'some notes....'
  }
  constructor(
    private userSettingService: UserSettingService
  ) { }

  ngOnInit() {
    this.userSettingService.getMerchant().subscribe(response => {
      console.log("merchants respinse .", response);
      alert(JSON.stringify(response));
    });

  }
  onBlur(field: NgModel) {
    console.log('in onBlur: ', field.valid);
  }
  onSubmit(form: NgForm) {
    console.log('in onSubmit: ', form.valid);

    this.userSettingService.submitPayment(form.value).subscribe(uploadResponse => {
      console.log("form submit success.");
      alert("form submit success : " + JSON.stringify(uploadResponse));
    });
  }
}
