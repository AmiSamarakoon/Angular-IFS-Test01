import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VirtualMachine } from './virtual-machine';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VirtualMachineService {

  private baseURL ="http://localhost:8080/api/v1/virtualMachines";

  constructor(private httpClient: HttpClient) { }

  getVirtualMachineList():Observable<VirtualMachine[]>{
    return this.httpClient.get<VirtualMachine[]>(`${this.baseURL}`)
  }
  addVirtualMachine(virtualMachine:VirtualMachine):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, virtualMachine);
  }
  
}
