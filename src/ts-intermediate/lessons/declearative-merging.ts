export interface Fruit{
    name:string
    color:string
    mass:number
}
const Fruit = {
    name : 'orange',
    color:'yellow',
    mass:20
}

 namespace ${
    export function createFruit():Fruit{
        return {
            name:'apple',
            color:'string',
            mass:20
        }
    }
}

export {Fruit,$} 