// @logClass
// @logProperty
// @logMethod
// @logSet
// @factory


const enumerable = (value: boolean) => {
  return (
    target: any, 
    propertyKey: string | symbol,
    descriptor: PropertyDescriptor
  ) => {
    descriptor.enumerable = value;
  }
}

class User {
  constructor(public name:string, public age: number) {}

  @enumerable(false)
  public getPass(): string {
    return `${this.name}${this.age}`
  }
}