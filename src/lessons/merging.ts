import { HasEmail } from ".";
//  partial makes everything optional

type MayHasEmail = Partial<HasEmail>
export let MayHasEmail:MayHasEmail = {}

export type Fruit = Pick<{apple:"apple","banana":'banana'},'apple'>
export type OnlyStrings = Extract<"a" | "b" | 12,string>