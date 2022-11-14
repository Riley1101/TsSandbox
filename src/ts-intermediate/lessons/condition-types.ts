class Grill {
    startGas(){}
    stopGas(){}
}
class Ovan{
    setTemperature(){}
}

export  type cookingDevice<T> = T extends 'grill' ? Grill : Ovan

// let device1 : cookingDevice<"grill">;
// let device2 : cookingDevice<"ovan">;

export {Grill, Ovan}
