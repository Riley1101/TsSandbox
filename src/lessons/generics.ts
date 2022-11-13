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

function resolveOrTimeOut<T>(promise: Promise<T>, timeout: number) {
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

function startTuple<T>(a:T){
  return function endTuple<U>(b:U){
    return [a,b] as [T,U]
  }
}

// using generics

interface Shape {
  draw() : void
  isDrawn : boolean
}

interface Circle extends Shape{
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