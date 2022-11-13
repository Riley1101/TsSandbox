import { isHasEmail,isDefined,dontReachElse } from "./type-guard";

// @type-guard.ts

describe("Type guard", () => {
  test(" Checking if email exists", () => {
    expect(
      isHasEmail({
        name: "riley",
        email: "something@gmail.com",
      })
    ).toBeTruthy();
    expect(
      isHasEmail({
        name: "riley",
      })
    ).toBeFalsy(); 
  });

  let list : any[] = [1,2,3,4,undefined]
  let obj : any = {name:'riley',email:'something@gmail.com'}
  test("Checking if defined",()=>{
    const filtered = list.filter(isDefined)
    expect(filtered.length).toEqual(4)
    expect(isDefined(obj.name)).toBeTruthy()
    expect(isDefined(obj.age)).toBeFalsy()
  })

  test('Dont reach else',()=>{
      expect(typeof dontReachElse('hello')).toBe('string')
      expect(typeof dontReachElse(123)).toBe('number')
  })
});

