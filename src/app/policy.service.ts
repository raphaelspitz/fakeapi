import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PolicyService {
  mocks = true;
  SERVER_URL: string = "api/";
  constructor(private httpClient: HttpClient) { }

  public getPolicies(){ 
        if(this.mocks)
          return this.httpClient.get(this.SERVER_URL + 'proute');
          else
          return this.httpClient.get('https://jsonplaceholder.typicode.com/posts');
  }

  public getPolicy(policyId){
       return this.httpClient.get(`${this.SERVER_URL + 'policies'}/${policyId}`); 
  }

}
