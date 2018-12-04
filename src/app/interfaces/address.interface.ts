/** 
 * @description
 * Interface Address
 * 
 * @class
 * Address ( zipCode: number, puiblicArea: string, 
 * neighborhood : string, city: string, state: string,
 * region?: string, complement?: string ) for implements IAddress
 * 
 */

export interface IAddress {
    zipCode: number;
    puiblicArea: string;
    neighborhood : string;
    city: string;
    state: string;
    region?: string;
    complement?: string;
}

export class Address implements IAddress{
    constructor(
        public zipCode: number,
        public puiblicArea: string,
        public neighborhood: string,
        public city: string,
        public state: string,
        public region: string,
        public complement: string
    ){}
}