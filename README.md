# @wicle/is

JavaScript and TypeScript type testing library uniquely identifying types without overlap.

It does type testing for the following types:

- Array
- Object
- Function
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
- Promise
- AsyncFunction
- Glob

If a variable is one of the above types, it means it is not of any other types above.
For example, if a variable is of type Function, then it is not of type Object. A class instance is of type Object,
but not of type Class or Function, etc.

## Installation

```bash
npm install @wicle/is

# or
yarn add @wicle/is

# or
pnpm add @wicle/is
```

## Usage

```js
import is from '@wicle/is'

function processValue(arg) {
    if (is.isFunction(arg)) {
        // Handle function
        arg()
    } else if (is.isClass(arg)) {
        // Handle class constructor
        const instance = new arg()
    } else if (is.isString(arg)) {
        // Handle string
        console.log(arg.toUpperCase())
    }
    // ... handle other types
}
```

## API

All functions return `true` if the value matches the specified type, `false` otherwise.

- `is.isArray(arg)` - Tests if value is an Array
- `is.isObject(arg)` - Tests if value is a plain Object
- `is.isFunction(arg)` - Tests if value is a Function (excluding classes and async functions)
- `is.isString(arg)` - Tests if value is a String
- `is.isNumber(arg)` - Tests if value is a Number
- `is.isDate(arg)` - Tests if value is a Date
- `is.isRegExp(arg)` - Tests if value is a RegExp
- `is.isError(arg)` - Tests if value is an Error
- `is.isSymbol(arg)` - Tests if value is a Symbol
- `is.isMap(arg)` - Tests if value is a Map
- `is.isWeakMap(arg)` - Tests if value is a WeakMap
- `is.isSet(arg)` - Tests if value is a Set
- `is.isWeakSet(arg)` - Tests if value is a WeakSet
- `is.isClass(arg)` - Tests if value is a Class constructor
- `is.isPromise(arg)` - Tests if value is a Promise-like object
- `is.isAsyncFunction(arg)` - Tests if value is an async function
- `is.isGlob(arg)` - Tests if value is a glob pattern (string or array of strings)

## Important Notes

### Class vs Object vs Function

This library makes clear distinctions between:

- **Class**: A class constructor/definition
- **Function**: A regular function (not a class or async function)
- **Object**: A plain object or class instance

```js
class MyClass {}
const myFunction = () => {}
const myObject = {}
const myInstance = new MyClass()

is.isClass(MyClass) // true
is.isFunction(MyClass) // false
is.isObject(MyClass) // false

is.isFunction(myFunction) // true
is.isClass(myFunction) // false
is.isObject(myFunction) // false

is.isObject(myObject) // true
is.isClass(myObject) // false
is.isFunction(myObject) // false

is.isObject(myInstance) // true (class instances are objects)
is.isClass(myInstance) // false
is.isFunction(myInstance) // false
```

### Type Safety

All functions provide TypeScript type guards for better type safety:

```typescript
function processValue(value: unknown) {
    if (is.isString(value)) {
        // TypeScript now knows 'value' is a string
        console.log(value.toUpperCase())
    }

    if (is.isArray(value)) {
        // TypeScript now knows 'value' is an array
        console.log(value.length)
    }
}
```
