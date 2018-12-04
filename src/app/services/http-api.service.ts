import { Injectable } from '@angular/core';
import { reject } from 'q';
import { HttpClient } from '@angular/common/http';
import { Address, IAddress } from '../interfaces/address.interface';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpApiService {

  urlApiZipCode: string = "https://api.postmon.com.br/v1/cep/";
  regiao: Object = {};

  ufsRegiaoNorte: Array<string> = ['AM', 'RR','AP','PA','TO','RO','AC'];
  ufsRegiaoCentroOeste: Array<string> = ['DF','GO','MT','MS'];
  ufsRegiaoSul: Array<string> = ['SC','PR','RS'];
  ufsRegiaoSudeste: Array<string> = ['ES','MG','RJ','SP'];
  ufsRegiaoNordeste: Array<string> = ['AL','BA','CE','MA','MP','PE','PI','RN','SE'];

  constructor(private http: HttpClient) { }

  getLocation(zipCodeRequest: number){

    return new Promise ( (resolve, reject) =>{
      try{
        this.http
        .get<any>(this.urlApiZipCode + zipCodeRequest)
        .subscribe(
          response=>{   
            if(!response.regiao && response.estado){
              this.ufsRegiaoNorte.indexOf(response.estado)>=0?this.regiao={region:'Norte'}:"";
              this.ufsRegiaoSul.indexOf(response.estado)>=0?this.regiao={region:'Sul'}:"";
              this.ufsRegiaoSudeste.indexOf(response.estado)>=0?this.regiao={region:'Sudeste'}:"";
              this.ufsRegiaoCentroOeste.indexOf(response.estado)>=0?this.regiao={region:'Centro-Oeste'}:"";
              this.ufsRegiaoNordeste.indexOf(response.estado)>=0?this.regiao={region:'Nordeste'}:"";
            }
            let address: IAddress = new Address(
              response.cep,
              response.logradouro,
              response.bairro,
              response.cidade,
              response.estado,
              response.complemento,
              response.regiao
            )
            address = Object.assign(address,this.regiao);
          resolve(address);
          },
          (err) => reject(err)
        )}
      catch{(error)=>{
        reject(error);
      }}
    })

  }

}
