# @wicle/is

JavaScript and TypeScript type testing library uniquely identifying types without overlap.

It does type testing for following types:
- Array
- Object
- Function: (a: unknown): a is Function =>
- String
- Number
- Date
- RegExp
- Error
- Symbol
- Map
- WeakMap
- Set
- WeakSet
- Class

If a variable is one of the above types, it means it is not of any other types above.
For example, a variable is of type Function, then it is not of type Object. A class instance is of type Class,
but not of type Object or Funciton, etc.

## Installation
```
npm i --save-dev @wicle/is

# or
yard add -D @wicle/is

# or
pnpm add -D @wicle/is
```

## Uagae

```js
function (arg: any) {
    if (is.Function(arg)) {
        // ...
    }
    else if (is.Class(arg)) {
        //...
    }
    //...
}
```

## API
* is.Array(arg)
* is.Object(arg)
* is.Function(arg): (a: unknown): a is Function =>
* is.String(arg)
* is.Number(arg)
* is.Date(arg)
* is.RegExp(arg)
* is.Error(arg)
* is.Symbol(arg)
* is.Map(arg)
* is.WeakMap(arg)
* is.Set(arg)
* is.WeakSet(arg)
* is.Class(arg)

## Notes
Class type means Class definition. An instance of a Class is of type Object, not Class.

```js
class classA { ... }
const instanceA = new classA()

is.Class(classA) --> true
is.Class(instanceA) --> flase
is.Object(instanceA) --> true
```
