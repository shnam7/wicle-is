# @wicle/is

Runtime type-checking library for JavaScript and TypeScript with precise, non-overlapping type identification.

Each type check is mutually exclusive: if a value is identified as one type, it will not match any other type in this library. For example, a class constructor returns `true` for `isClass` but `false` for `isFunction` and `isObject`.

## Installation

```bash
npm install @wicle/is
# or
pnpm add @wicle/is
# or
yarn add @wicle/is
```

## Usage

### Default import

```ts
import is from '@wicle/is'

is.isString('hello')   // true
is.isNumber(42)        // true
is.isArray([1, 2, 3])  // true
```

### Individual imports

```ts
import {isString, isNumber, isArray} from '@wicle/is'

isString('hello')   // true
isNumber(42)        // true
isArray([1, 2, 3])  // true
```

## API

All functions return `true` if the value matches the type, `false` otherwise. Each function is a TypeScript type guard that narrows the type in the enclosing scope.

| Function | TypeScript narrowed type | Description |
|---|---|---|
| `isArray(a)` | `unknown[]` | Array |
| `isObject(a)` | `Record<string, unknown>` | Plain object or class instance |
| `isFunction(a)` | `(...args: unknown[]) => unknown` | Regular or async function (not a class) |
| `isString(a)` | `string` | String |
| `isNumber(a)` | `number` | Number |
| `isDate(a)` | `Date` | Date |
| `isRegExp(a)` | `RegExp` | RegExp |
| `isError(a)` | `Error` | Error |
| `isSymbol(a)` | `symbol` | Symbol |
| `isMap(a)` | `Map<unknown, unknown>` | Map |
| `isWeakMap(a)` | `WeakMap<WeakKey, unknown>` | WeakMap |
| `isSet(a)` | `Set<unknown>` | Set |
| `isWeakSet(a)` | `WeakSet<WeakKey>` | WeakSet |
| `isClass(a)` | `new (...args: unknown[]) => unknown` | Class constructor |
| `isPromise(a)` | — | Thenable object (duck-typed) |
| `isAsyncFunction(a)` | `(...args: unknown[]) => Promise<unknown>` | Async function |
| `isGlob(a)` | `Glob` | String or readonly string array |

The exported `Glob` type is `string | readonly string[]`.

## Type narrowing

```ts
function process(value: unknown) {
    if (isString(value)) {
        console.log(value.toUpperCase()) // value: string
    } else if (isArray(value)) {
        console.log(value.length)        // value: unknown[]
    } else if (isFunction(value)) {
        value()                          // value: (...args: unknown[]) => unknown
    } else if (isClass(value)) {
        new value()                      // value: new (...args: unknown[]) => unknown
    }
}
```

## Type overlap behaviour

### `isFunction` vs `isClass` vs `isAsyncFunction`

`isFunction` returns `true` for regular and async functions, but `false` for class constructors. Use `isClass` to check for classes specifically, or `isAsyncFunction` to check exclusively for async functions.

```ts
class MyClass {}
const fn = () => {}
const asyncFn = async () => {}

isClass(MyClass)         // true
isFunction(MyClass)      // false

isFunction(fn)           // true
isAsyncFunction(fn)      // false

isFunction(asyncFn)      // true  — async functions are still functions
isAsyncFunction(asyncFn) // true
isClass(asyncFn)         // false
```

### `isObject` and class instances

`isObject` returns `true` for both plain objects and class instances. It returns `false` for arrays, functions, classes, and primitives.

```ts
class MyClass {}
const instance = new MyClass()

isObject({})         // true
isObject(instance)   // true
isObject([])         // false
isObject(MyClass)    // false
```

### `isPromise`

`isPromise` uses duck-typing: it returns `true` for any non-null object with a `.then` method (i.e., a thenable). This matches native `Promise`, resolved values from other libraries, and custom thenable objects.

```ts
isPromise(Promise.resolve(1))  // true
isPromise({then: () => {}})    // true
isPromise(async () => {})      // false — async functions are not thenables
```

## License

MIT
