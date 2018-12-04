import { Component, OnInit } from '@angular/core';
import { HttpApiService } from '../services/http-api.service';
import { IAddress } from '../interfaces/address.interface';

@Component({
  selector: 'cep-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  zipCodeSearch: string;
  addresResult: IAddress;
  lastResults: Array<string> = [];
  lastResultsView: Array<any> = [];
  addresResultError: boolean;
  
  maskZipCode = [/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/];

  constructor(private searchByZipCode: HttpApiService) { }

  ngOnInit() {
    this.getStorangeLastResults();
  }

  getLocationByCep(){

    let zipCode = Number(this.zipCodeSearch.replace('-', ''));

    this.searchByZipCode.getLocation(zipCode).then((result: IAddress)=>{
      this.addresResult = result;
      this.addStorangeLastResult(result);
      this.addresResultError = false;

    }).catch(() => {
      this.addresResultError = true;
      this.addresResult = null;
    });
    
  }

  addStorangeLastResult(newResult: IAddress){
    
    this.getStorangeLastResults();
    this.lastResults.unshift(JSON.stringify(newResult));
    this.lastResults = this.lastResults.slice(0,9);
    this.setStorangeLastResults();
    
  }

  getStorangeLastResults(){
    
    if(localStorage.getItem('lastResults')){
      this.lastResults = JSON.parse(localStorage.getItem('lastResults'));
      this.setViewResults();
    }else{
      //console.log('storange vazio');
    }
    return this.lastResults;
  }

  setStorangeLastResults(){
    
    localStorage.setItem('lastResults', JSON.stringify(this.lastResults));
    this.setViewResults();
  }

  setViewResults(){
    let newArrayResult: Array<any> = [];
    for(let lr of this.lastResults.slice().reverse()){
      newArrayResult.unshift(JSON.parse(lr));
    }
    this.lastResultsView = newArrayResult;
  }

  cleanStorageLastResults(){
    localStorage.removeItem('lastResults');
    this.lastResults = [];
    this.lastResultsView = [];
  }

  keyDownFunction(event) {
    if(event.keyCode == 13) {
      this.getLocationByCep();
    }
  }

}
