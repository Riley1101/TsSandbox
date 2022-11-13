// Top Types
export interface HasEmail {
    name:string
    email : string
}
export interface HasPhone {
    name:string
    phone : number
}
export function isHasEmail(x:any):x is HasEmail{
    return typeof x.name === 'string' && typeof x.email ==='string'
}
export function isHasPhone(x:any):x is HasPhone{
    return typeof x.name === 'string' && typeof x.phone ==='string'
}

export function isDefined<T> (arg :T |undefined):arg is T{
    return typeof arg !== "undefined"
}

// branded vs unbrand

interface BrandedA {
    _this_is_branded_a :"a"
}
interface BrandedB{
    _this_is_branded_b:"b"
}
export function brandA(val:string):BrandedA{
    return (val as unknown) as BrandedA
}
export function brandB(val:{value:string}):BrandedB{
    return (val as unknown) as BrandedB
}
export function unBrandA(val:BrandedA):string{
    return (val as unknown) as string
}
export function unBrandB(val:BrandedB):{value:string}{
    return (val as unknown) as {value:string}
}

// const secretA = brandA('secret')
// const secretB = brandB({value:'Another secret'})

// never be mixed
// secretA = secretB 

// cannot be unbrand with different types
// unBrandB(secretA)
// unBrandA(secretB)

// can be in the right way
// unBrandA(secretA)
// unBrandB(secretB)

// Bottom Types

class UnReachAbleError extends Error{
    constructor(val:never,message:string){

        super(`Typescript denied reaching here\n ${message} \n value is ${val}`)
    }
}

export function dontReachElse(val : number | string){
    if(typeof val === 'string'){
        return val
    }else if (typeof val === 'number'){
        return val
    }
    else{
        throw new UnReachAbleError(val,'never is reached')
    }
}