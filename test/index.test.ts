/* eslint-disable unicorn/throw-new-error */
/* eslint-disable new-cap */
import {expect, test} from 'vitest'
import is from '../src/index.js'

const _array = []
const _object = {}
const _function = () => {}
const _string = ''
const _number = 123
const _date = new Date()
const _regexp = /abc/g
const _error = new Error('error')
const _symbol = Symbol('abc')
const _map = new Map()
const _weakmap = new WeakMap()
const _set = new Set()
const _weakset = new WeakSet()
const _class = class {
    protected _dummy = 0
    constrctor() {
        this._dummy = 1
    }
}
const _classInstance = new _class() // Class instance should be of Object type.
const _promise = Promise.resolve()
const _asyncFunction = async () => 1

test('Array', () => {
    expect(is.Array(_array)).toBeTruthy() // -----> true
    expect(is.Array(_object)).not.toBeTruthy()
    expect(is.Array(_function)).not.toBeTruthy()
    expect(is.Array(_string)).not.toBeTruthy()
    expect(is.Array(_number)).not.toBeTruthy()
    expect(is.Array(_date)).not.toBeTruthy()
    expect(is.Array(_regexp)).not.toBeTruthy()
    expect(is.Array(_error)).not.toBeTruthy()
    expect(is.Array(_symbol)).not.toBeTruthy()
    expect(is.Array(_map)).not.toBeTruthy()
    expect(is.Array(_weakmap)).not.toBeTruthy()
    expect(is.Array(_set)).not.toBeTruthy()
    expect(is.Array(_weakset)).not.toBeTruthy()
    expect(is.Array(_class)).not.toBeTruthy()
    expect(is.Array(_classInstance)).not.toBeTruthy()
    expect(is.Array(_promise)).not.toBeTruthy()
    expect(is.Array(_asyncFunction)).not.toBeTruthy()
})

test('Object', () => {
    expect(is.Object(_array)).not.toBeTruthy()
    expect(is.Object(_object)).toBeTruthy() // -----> true
    expect(is.Object(_function)).not.toBeTruthy()
    expect(is.Object(_string)).not.toBeTruthy()
    expect(is.Object(_number)).not.toBeTruthy()
    expect(is.Object(_date)).not.toBeTruthy()
    expect(is.Object(_regexp)).not.toBeTruthy()
    expect(is.Object(_error)).not.toBeTruthy()
    expect(is.Object(_symbol)).not.toBeTruthy()
    expect(is.Object(_map)).not.toBeTruthy()
    expect(is.Object(_weakmap)).not.toBeTruthy()
    expect(is.Object(_set)).not.toBeTruthy()
    expect(is.Object(_weakset)).not.toBeTruthy()
    expect(is.Object(_class)).not.toBeTruthy()
    expect(is.Object(_classInstance)).toBeTruthy() // -----> true: class Instanc is an object
    expect(is.Object(_promise)).not.toBeTruthy()
    expect(is.Object(_asyncFunction)).not.toBeTruthy()
})

test('Function', () => {
    expect(is.Function(_array)).not.toBeTruthy()
    expect(is.Function(_object)).not.toBeTruthy()
    expect(is.Function(_function)).toBeTruthy() // -----> true
    expect(is.Function(_string)).not.toBeTruthy()
    expect(is.Function(_number)).not.toBeTruthy()
    expect(is.Function(_date)).not.toBeTruthy()
    expect(is.Function(_regexp)).not.toBeTruthy()
    expect(is.Function(_error)).not.toBeTruthy()
    expect(is.Function(_symbol)).not.toBeTruthy()
    expect(is.Function(_map)).not.toBeTruthy()
    expect(is.Function(_weakmap)).not.toBeTruthy()
    expect(is.Function(_set)).not.toBeTruthy()
    expect(is.Function(_weakset)).not.toBeTruthy()
    expect(is.Function(_class)).not.toBeTruthy()
    expect(is.Function(_asyncFunction)).toBeTruthy()
    expect(is.Function(_classInstance)).not.toBeTruthy()
    expect(is.Function(_promise)).not.toBeTruthy()
    expect(is.Function(_asyncFunction)).toBeTruthy() // -----> true: async function is a function
})

test('String', () => {
    expect(is.String(_array)).not.toBeTruthy()
    expect(is.String(_object)).not.toBeTruthy()
    expect(is.String(_function)).not.toBeTruthy()
    expect(is.String(_string)).toBeTruthy() // -----> true
    expect(is.String(_number)).not.toBeTruthy()
    expect(is.String(_date)).not.toBeTruthy()
    expect(is.String(_regexp)).not.toBeTruthy()
    expect(is.String(_error)).not.toBeTruthy()
    expect(is.String(_symbol)).not.toBeTruthy()
    expect(is.String(_map)).not.toBeTruthy()
    expect(is.String(_weakmap)).not.toBeTruthy()
    expect(is.String(_set)).not.toBeTruthy()
    expect(is.String(_weakset)).not.toBeTruthy()
    expect(is.String(_class)).not.toBeTruthy()
    expect(is.String(_classInstance)).not.toBeTruthy()
    expect(is.String(_promise)).not.toBeTruthy()
    expect(is.String(_asyncFunction)).not.toBeTruthy()
})

test('Number', () => {
    expect(is.Number(_array)).not.toBeTruthy()
    expect(is.Number(_object)).not.toBeTruthy()
    expect(is.Number(_function)).not.toBeTruthy()
    expect(is.Number(_string)).not.toBeTruthy()
    expect(is.Number(_number)).toBeTruthy() // -----> true
    expect(is.Number(_date)).not.toBeTruthy()
    expect(is.Number(_regexp)).not.toBeTruthy()
    expect(is.Number(_error)).not.toBeTruthy()
    expect(is.Number(_symbol)).not.toBeTruthy()
    expect(is.Number(_map)).not.toBeTruthy()
    expect(is.Number(_weakmap)).not.toBeTruthy()
    expect(is.Number(_set)).not.toBeTruthy()
    expect(is.Number(_weakset)).not.toBeTruthy()
    expect(is.Number(_class)).not.toBeTruthy()
    expect(is.Number(_classInstance)).not.toBeTruthy()
    expect(is.Number(_promise)).not.toBeTruthy()
    expect(is.Number(_asyncFunction)).not.toBeTruthy()
})

test('Date', () => {
    expect(is.Date(_array)).not.toBeTruthy()
    expect(is.Date(_object)).not.toBeTruthy()
    expect(is.Date(_function)).not.toBeTruthy()
    expect(is.Date(_string)).not.toBeTruthy()
    expect(is.Date(_number)).not.toBeTruthy()
    expect(is.Date(_date)).toBeTruthy() // -----> true
    expect(is.Date(_regexp)).not.toBeTruthy()
    expect(is.Date(_error)).not.toBeTruthy()
    expect(is.Date(_symbol)).not.toBeTruthy()
    expect(is.Date(_map)).not.toBeTruthy()
    expect(is.Date(_weakmap)).not.toBeTruthy()
    expect(is.Date(_set)).not.toBeTruthy()
    expect(is.Date(_weakset)).not.toBeTruthy()
    expect(is.Date(_class)).not.toBeTruthy()
    expect(is.Date(_classInstance)).not.toBeTruthy()
    expect(is.Date(_promise)).not.toBeTruthy()
    expect(is.Date(_asyncFunction)).not.toBeTruthy()
})

test('RegExp', () => {
    expect(is.RegExp(_array)).not.toBeTruthy()
    expect(is.RegExp(_object)).not.toBeTruthy()
    expect(is.RegExp(_function)).not.toBeTruthy()
    expect(is.RegExp(_string)).not.toBeTruthy()
    expect(is.RegExp(_number)).not.toBeTruthy()
    expect(is.RegExp(_date)).not.toBeTruthy()
    expect(is.RegExp(_regexp)).toBeTruthy() // -----> true
    expect(is.RegExp(_error)).not.toBeTruthy()
    expect(is.RegExp(_symbol)).not.toBeTruthy()
    expect(is.RegExp(_map)).not.toBeTruthy()
    expect(is.RegExp(_weakmap)).not.toBeTruthy()
    expect(is.RegExp(_set)).not.toBeTruthy()
    expect(is.RegExp(_weakset)).not.toBeTruthy()
    expect(is.RegExp(_class)).not.toBeTruthy()
    expect(is.RegExp(_classInstance)).not.toBeTruthy()
    expect(is.RegExp(_promise)).not.toBeTruthy()
    expect(is.RegExp(_asyncFunction)).not.toBeTruthy()
})

test('Error', () => {
    expect(is.Error(_object)).not.toBeTruthy()
    expect(is.Error(_function)).not.toBeTruthy()
    expect(is.Error(_string)).not.toBeTruthy()
    expect(is.Error(_number)).not.toBeTruthy()
    expect(is.Error(_date)).not.toBeTruthy()
    expect(is.Error(_regexp)).not.toBeTruthy()
    expect(is.Error(_error)).toBeTruthy() // -----> true
    expect(is.Error(_symbol)).not.toBeTruthy()
    expect(is.Error(_map)).not.toBeTruthy()
    expect(is.Error(_weakmap)).not.toBeTruthy()
    expect(is.Error(_set)).not.toBeTruthy()
    expect(is.Error(_weakset)).not.toBeTruthy()
    expect(is.Error(_class)).not.toBeTruthy()
    expect(is.Error(_array)).not.toBeTruthy()
    expect(is.Error(_classInstance)).not.toBeTruthy()
    expect(is.Error(_promise)).not.toBeTruthy()
    expect(is.Error(_asyncFunction)).not.toBeTruthy()
})

test('Symbol', () => {
    expect(is.Symbol(_array)).not.toBeTruthy()
    expect(is.Symbol(_object)).not.toBeTruthy()
    expect(is.Symbol(_function)).not.toBeTruthy()
    expect(is.Symbol(_string)).not.toBeTruthy()
    expect(is.Symbol(_number)).not.toBeTruthy()
    expect(is.Symbol(_date)).not.toBeTruthy()
    expect(is.Symbol(_regexp)).not.toBeTruthy()
    expect(is.Symbol(_error)).not.toBeTruthy()
    expect(is.Symbol(_symbol)).toBeTruthy() // -----> true
    expect(is.Symbol(_map)).not.toBeTruthy()
    expect(is.Symbol(_weakmap)).not.toBeTruthy()
    expect(is.Symbol(_set)).not.toBeTruthy()
    expect(is.Symbol(_weakset)).not.toBeTruthy()
    expect(is.Symbol(_class)).not.toBeTruthy()
    expect(is.Symbol(_classInstance)).not.toBeTruthy()
    expect(is.Symbol(_promise)).not.toBeTruthy()
    expect(is.Symbol(_asyncFunction)).not.toBeTruthy()
})

test('Map', () => {
    expect(is.Map(_array)).not.toBeTruthy()
    expect(is.Map(_object)).not.toBeTruthy()
    expect(is.Map(_function)).not.toBeTruthy()
    expect(is.Map(_string)).not.toBeTruthy()
    expect(is.Map(_number)).not.toBeTruthy()
    expect(is.Map(_date)).not.toBeTruthy()
    expect(is.Map(_regexp)).not.toBeTruthy()
    expect(is.Map(_error)).not.toBeTruthy()
    expect(is.Map(_symbol)).not.toBeTruthy()
    expect(is.Map(_map)).toBeTruthy() // -----> true
    expect(is.Map(_weakmap)).not.toBeTruthy()
    expect(is.Map(_set)).not.toBeTruthy()
    expect(is.Map(_weakset)).not.toBeTruthy()
    expect(is.Map(_class)).not.toBeTruthy()
    expect(is.Map(_classInstance)).not.toBeTruthy()
    expect(is.Map(_promise)).not.toBeTruthy()
    expect(is.Map(_asyncFunction)).not.toBeTruthy()
})

test('WeakMap', () => {
    expect(is.WeakMap(_array)).not.toBeTruthy()
    expect(is.WeakMap(_object)).not.toBeTruthy()
    expect(is.WeakMap(_function)).not.toBeTruthy()
    expect(is.WeakMap(_string)).not.toBeTruthy()
    expect(is.WeakMap(_number)).not.toBeTruthy()
    expect(is.WeakMap(_date)).not.toBeTruthy()
    expect(is.WeakMap(_regexp)).not.toBeTruthy()
    expect(is.WeakMap(_error)).not.toBeTruthy()
    expect(is.WeakMap(_symbol)).not.toBeTruthy()
    expect(is.WeakMap(_map)).not.toBeTruthy()
    expect(is.WeakMap(_weakmap)).toBeTruthy() // -----> true
    expect(is.WeakMap(_set)).not.toBeTruthy()
    expect(is.WeakMap(_weakset)).not.toBeTruthy()
    expect(is.WeakMap(_class)).not.toBeTruthy()
    expect(is.WeakMap(_classInstance)).not.toBeTruthy()
    expect(is.WeakMap(_promise)).not.toBeTruthy()
    expect(is.WeakMap(_asyncFunction)).not.toBeTruthy()
})

test('Set', () => {
    expect(is.Set(_array)).not.toBeTruthy()
    expect(is.Set(_object)).not.toBeTruthy()
    expect(is.Set(_function)).not.toBeTruthy()
    expect(is.Set(_string)).not.toBeTruthy()
    expect(is.Set(_number)).not.toBeTruthy()
    expect(is.Set(_date)).not.toBeTruthy()
    expect(is.Set(_regexp)).not.toBeTruthy()
    expect(is.Set(_error)).not.toBeTruthy()
    expect(is.Set(_symbol)).not.toBeTruthy()
    expect(is.Set(_map)).not.toBeTruthy()
    expect(is.Set(_weakmap)).not.toBeTruthy()
    expect(is.Set(_set)).toBeTruthy() // -----> true
    expect(is.Set(_weakset)).not.toBeTruthy()
    expect(is.Set(_class)).not.toBeTruthy()
    expect(is.Set(_classInstance)).not.toBeTruthy()
    expect(is.Set(_promise)).not.toBeTruthy()
    expect(is.Set(_asyncFunction)).not.toBeTruthy()
})

test('WeakSet', () => {
    expect(is.WeakSet(_array)).not.toBeTruthy()
    expect(is.WeakSet(_object)).not.toBeTruthy()
    expect(is.WeakSet(_function)).not.toBeTruthy()
    expect(is.WeakSet(_string)).not.toBeTruthy()
    expect(is.WeakSet(_number)).not.toBeTruthy()
    expect(is.WeakSet(_date)).not.toBeTruthy()
    expect(is.WeakSet(_regexp)).not.toBeTruthy()
    expect(is.WeakSet(_error)).not.toBeTruthy()
    expect(is.WeakSet(_symbol)).not.toBeTruthy()
    expect(is.WeakSet(_map)).not.toBeTruthy()
    expect(is.WeakSet(_weakmap)).not.toBeTruthy()
    expect(is.WeakSet(_set)).not.toBeTruthy()
    expect(is.WeakSet(_weakset)).toBeTruthy() // -----> true
    expect(is.WeakSet(_class)).not.toBeTruthy()
    expect(is.WeakSet(_classInstance)).not.toBeTruthy()
    expect(is.WeakSet(_promise)).not.toBeTruthy()
    expect(is.WeakSet(_asyncFunction)).not.toBeTruthy()
})

test('Class', () => {
    expect(is.Class(_array)).not.toBeTruthy()
    expect(is.Class(_object)).not.toBeTruthy()
    expect(is.Class(_function)).not.toBeTruthy()
    expect(is.Class(_string)).not.toBeTruthy()
    expect(is.Class(_number)).not.toBeTruthy()
    expect(is.Class(_date)).not.toBeTruthy()
    expect(is.Class(_regexp)).not.toBeTruthy()
    expect(is.Class(_error)).not.toBeTruthy()
    expect(is.Class(_symbol)).not.toBeTruthy()
    expect(is.Class(_map)).not.toBeTruthy()
    expect(is.Class(_weakmap)).not.toBeTruthy()
    expect(is.Class(_set)).not.toBeTruthy()
    expect(is.Class(_weakset)).not.toBeTruthy()
    expect(is.Class(_class)).toBeTruthy() // -----> true
    expect(is.Class(_classInstance)).not.toBeTruthy()
    expect(is.Class(_promise)).not.toBeTruthy()
    expect(is.Class(_asyncFunction)).not.toBeTruthy()
})

test('Promise', () => {
    expect(is.Promise(_array)).not.toBeTruthy()
    expect(is.Promise(_object)).not.toBeTruthy()
    expect(is.Promise(_function)).not.toBeTruthy()
    expect(is.Promise(_string)).not.toBeTruthy()
    expect(is.Promise(_number)).not.toBeTruthy()
    expect(is.Promise(_date)).not.toBeTruthy()
    expect(is.Promise(_regexp)).not.toBeTruthy()
    expect(is.Promise(_error)).not.toBeTruthy()
    expect(is.Promise(_symbol)).not.toBeTruthy()
    expect(is.Promise(_map)).not.toBeTruthy()
    expect(is.Promise(_weakmap)).not.toBeTruthy()
    expect(is.Promise(_set)).not.toBeTruthy()
    expect(is.Promise(_weakset)).not.toBeTruthy()
    expect(is.Promise(_class)).not.toBeTruthy()
    expect(is.Promise(_classInstance)).not.toBeTruthy()
    expect(is.Promise(_promise)).toBeTruthy() // -----> true
    expect(is.Promise(_asyncFunction)).not.toBeTruthy()
})

test('AsyncFunction', () => {
    expect(is.AsyncFunction(_array)).not.toBeTruthy()
    expect(is.AsyncFunction(_object)).not.toBeTruthy()
    expect(is.AsyncFunction(_function)).not.toBeTruthy()
    expect(is.AsyncFunction(_string)).not.toBeTruthy()
    expect(is.AsyncFunction(_number)).not.toBeTruthy()
    expect(is.AsyncFunction(_date)).not.toBeTruthy()
    expect(is.AsyncFunction(_regexp)).not.toBeTruthy()
    expect(is.AsyncFunction(_error)).not.toBeTruthy()
    expect(is.AsyncFunction(_symbol)).not.toBeTruthy()
    expect(is.AsyncFunction(_map)).not.toBeTruthy()
    expect(is.AsyncFunction(_weakmap)).not.toBeTruthy()
    expect(is.AsyncFunction(_set)).not.toBeTruthy()
    expect(is.AsyncFunction(_weakset)).not.toBeTruthy()
    expect(is.AsyncFunction(_class)).not.toBeTruthy()
    expect(is.AsyncFunction(_classInstance)).not.toBeTruthy()
    expect(is.AsyncFunction(_promise)).not.toBeTruthy()
    expect(is.AsyncFunction(_asyncFunction)).toBeTruthy() // -----> true
})

test('conditional async call', async ()=>{
    let foo
    let result: number
    type AsyncFunc = ()=>Promise<number>

    const f1 = async ()=> new Promise<number>(resolve => {
        setTimeout(() => {
            resolve(1)
        }, 100)
      
    })
    const f2 = () => 1; // This is an async function

    async function asyncFunc( func: ()=>Promise<number> | number) {
         if (is.AsyncFunction(func)) {
            result = await (func() as Promise<number>);
                expect(result).toBe(1)

        } else {
            result = func() as number;
            expect(result).toBe(1)
        }
    }

    await asyncFunc(f1)
    await asyncFunc(f2)
})