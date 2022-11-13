interface WrapperProps<X> {
  value: X;
}

let vale: WrapperProps<string> = {
  value: "hello",
};

vale.value;

interface FilterProps<T> {
  value: T;
}

let value = "string";

const obj: FilterProps<typeof value> = {
  value: value,
};

export function resolveOrTimeOut<T>(promise: Promise<T>, timeout: number) {
  return new Promise<T>((resolve, reject) => {
    const task = setTimeout(() => reject("time up"), timeout);
    promise.then((val) => {
      clearTimeout(task);
      resolve(val);
    });
  });
}

function arrToDict(arr: {id:string}[]) {
  const res: { [k: string]: { id: string } } = {};
  arr.forEach((item) => {
    res[item.id] = item;
  });
  return res;
}

function arrToDict2<T extends {id:string}>(arr : T[]){
  const res : {[ k:string]:T} = {}
  arr.forEach(item=>{
    res[item.id] = item
  })
  return res
}

export function startTuple<T>(a:T){
  return function endTuple<U>(b:U){
    return [a,b] as [T,U]
  }
}

// using generics

export interface Shape {
  draw() : void
  isDrawn : boolean
}

export interface Circle extends Shape{
  radius:number
}

function drawShape(shapes:Shape[]){
  shapes.map(item=>{
    item.draw()
    
  })
}
function drawShape2<T extends Shape>(shapes:T[] ){
  shapes.map(item=>{
    item.draw()
  })
}

export {drawShape,drawShape2,arrToDict,arrToDict2}