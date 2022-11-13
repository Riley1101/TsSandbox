import type { HasEmail,HasPhone } from "."

export interface CommunicationMethods{
    email : HasEmail;
    phone : HasPhone;
    fax : { fax:number };
}

export function contact<K extends keyof CommunicationMethods>(
    methods : K,
    contact : CommunicationMethods[K]
){
    // type AllKeys = keyof CommunicationMethods
    // type AllValues = CommunicationMethods[keyof CommunicationMethods]
 return {contact,methods}
}


export type EventualType<T>= T extends Promise<infer S>
    ? S 
    : T;

// let a : EventualType<Promise<number>>;
// let b : EventualType<number[]>