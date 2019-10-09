import { Component } from '@angular/core';
import { PolicyService } from './policy.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fakeapi';
  policies: any[] = [];
  constructor(private policyService: PolicyService) { }
  
  ngOnInit() {
    this.policyService.getPolicies().subscribe((data : any[])=>{
        console.log(data);
      //  this.policies = data;
    })
  }
}
