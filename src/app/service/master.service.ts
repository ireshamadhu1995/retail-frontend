import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http: HttpClient) { }

  GetProducts() {
    return this.http.get('https://localhost:7281/api/product');
  }
  GetProductbyId(id: any) {
    return this.http.get(`https://localhost:7281/api/product/id?id=${id}`);
  }

  GetAllInvoice(){
    return this.http.get('https://localhost:7281/api/invoice');
  }

  GetInvHeaderbycode(invoiceno:any){
    return this.http.get('https://localhost:7281/Invoice/GetAllHeaderbyCode?invoiceno='+invoiceno);
  }
  GetInvDetailbycode(invoiceno:any){
    return this.http.get('https://localhost:7281/Invoice/GetAllDetailbyCode?invoiceno='+invoiceno);
  }
  RemoveInvoice(invoiceno:any){
    return this.http.delete(`https://localhost:7281/api/invoice?id=${invoiceno}`);
  }

  SaveInvoice(invoicedata:any){
    return this.http.post('https://localhost:7281/api/invoice',invoicedata);
  }

  GenerateInvoicePDF(invoiceno:any){
    return this.http.get(`https://localhost:7281/api/invoice/print?id=${invoiceno}`, { responseType: 'blob' });
    
  }



}
