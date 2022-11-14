// type queries
// type DatePropertyNames = keyof Date
// type DatePropertiesNamesStrings = keyof Date & string
// type DatePropertiesNamesSymbols = keyof Date & symbol

export async function apiResponse (){
 const data = await Promise.all([
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(() => Promise.resolve([{id:1,name:'something'}]))
 ])
//  type ApiResponseType = typeof data
 console.log(data)
}

export class SomeFruit {
  constructor(
   public readonly name :string,
   public readonly color : string,
  ) {
   
  }
  static createBanana(){
   return new SomeFruit('banana','yellow')
  }
}
// const fruit = SomeFruit
// const banana = SomeFruit.createBanana()