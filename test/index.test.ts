import {expect, test, describe} from 'vitest'
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

describe('is', () => {
    test('Array', () => {
        expect(is.isArray(_array)).toBeTruthy() // -----> true
        expect(is.isArray(_object)).not.toBeTruthy()
        expect(is.isArray(_function)).not.toBeTruthy()
        expect(is.isArray(_string)).not.toBeTruthy()
        expect(is.isArray(_number)).not.toBeTruthy()
        expect(is.isArray(_date)).not.toBeTruthy()
        expect(is.isArray(_regexp)).not.toBeTruthy()
        expect(is.isArray(_error)).not.toBeTruthy()
        expect(is.isArray(_symbol)).not.toBeTruthy()
        expect(is.isArray(_map)).not.toBeTruthy()
        expect(is.isArray(_weakmap)).not.toBeTruthy()
        expect(is.isArray(_set)).not.toBeTruthy()
        expect(is.isArray(_weakset)).not.toBeTruthy()
        expect(is.isArray(_class)).not.toBeTruthy()
        expect(is.isArray(_classInstance)).not.toBeTruthy()
        expect(is.isArray(_promise)).not.toBeTruthy()
        expect(is.isArray(_asyncFunction)).not.toBeTruthy()
    })

    test('Object', () => {
        expect(is.isObject(_array)).not.toBeTruthy()
        expect(is.isObject(_object)).toBeTruthy() // -----> true
        expect(is.isObject(_function)).not.toBeTruthy()
        expect(is.isObject(_string)).not.toBeTruthy()
        expect(is.isObject(_number)).not.toBeTruthy()
        expect(is.isObject(_date)).not.toBeTruthy()
        expect(is.isObject(_regexp)).not.toBeTruthy()
        expect(is.isObject(_error)).not.toBeTruthy()
        expect(is.isObject(_symbol)).not.toBeTruthy()
        expect(is.isObject(_map)).not.toBeTruthy()
        expect(is.isObject(_weakmap)).not.toBeTruthy()
        expect(is.isObject(_set)).not.toBeTruthy()
        expect(is.isObject(_weakset)).not.toBeTruthy()
        expect(is.isObject(_class)).not.toBeTruthy()
        expect(is.isObject(_classInstance)).toBeTruthy() // -----> true: class Instanc is an object
        expect(is.isObject(_promise)).not.toBeTruthy()
        expect(is.isObject(_asyncFunction)).not.toBeTruthy()
    })

    test('Function', () => {
        expect(is.isFunction(_array)).not.toBeTruthy()
        expect(is.isFunction(_object)).not.toBeTruthy()
        expect(is.isFunction(_function)).toBeTruthy() // -----> true
        expect(is.isFunction(_string)).not.toBeTruthy()
        expect(is.isFunction(_number)).not.toBeTruthy()
        expect(is.isFunction(_date)).not.toBeTruthy()
        expect(is.isFunction(_regexp)).not.toBeTruthy()
        expect(is.isFunction(_error)).not.toBeTruthy()
        expect(is.isFunction(_symbol)).not.toBeTruthy()
        expect(is.isFunction(_map)).not.toBeTruthy()
        expect(is.isFunction(_weakmap)).not.toBeTruthy()
        expect(is.isFunction(_set)).not.toBeTruthy()
        expect(is.isFunction(_weakset)).not.toBeTruthy()
        expect(is.isFunction(_class)).not.toBeTruthy()
        expect(is.isFunction(_asyncFunction)).toBeTruthy()
        expect(is.isFunction(_classInstance)).not.toBeTruthy()
        expect(is.isFunction(_promise)).not.toBeTruthy()
        expect(is.isFunction(_asyncFunction)).toBeTruthy() // -----> true: async function is a function
    })

    test('String', () => {
        expect(is.isString(_array)).not.toBeTruthy()
        expect(is.isString(_object)).not.toBeTruthy()
        expect(is.isString(_function)).not.toBeTruthy()
        expect(is.isString(_string)).toBeTruthy() // -----> true
        expect(is.isString(_number)).not.toBeTruthy()
        expect(is.isString(_date)).not.toBeTruthy()
        expect(is.isString(_regexp)).not.toBeTruthy()
        expect(is.isString(_error)).not.toBeTruthy()
        expect(is.isString(_symbol)).not.toBeTruthy()
        expect(is.isString(_map)).not.toBeTruthy()
        expect(is.isString(_weakmap)).not.toBeTruthy()
        expect(is.isString(_set)).not.toBeTruthy()
        expect(is.isString(_weakset)).not.toBeTruthy()
        expect(is.isString(_class)).not.toBeTruthy()
        expect(is.isString(_classInstance)).not.toBeTruthy()
        expect(is.isString(_promise)).not.toBeTruthy()
        expect(is.isString(_asyncFunction)).not.toBeTruthy()
    })

    test('Glob', () => {
        expect(is.isGlob('*.js')).toBeTruthy()
        expect(is.isGlob(['*.js', '*.ts'])).toBeTruthy()
        expect(is.isGlob([])).toBeTruthy() // empty array should pass (every on empty is true)
        expect(is.isGlob(['a', 1 as any])).not.toBeTruthy()
        expect(is.isGlob(123 as any)).not.toBeTruthy()
        expect(is.isGlob(null as any)).not.toBeTruthy()
        expect(is.isGlob(undefined as any)).not.toBeTruthy()
    })

    test('Number', () => {
        expect(is.isNumber(_array)).not.toBeTruthy()
        expect(is.isNumber(_object)).not.toBeTruthy()
        expect(is.isNumber(_function)).not.toBeTruthy()
        expect(is.isNumber(_string)).not.toBeTruthy()
        expect(is.isNumber(_number)).toBeTruthy() // -----> true
        expect(is.isNumber(_date)).not.toBeTruthy()
        expect(is.isNumber(_regexp)).not.toBeTruthy()
        expect(is.isNumber(_error)).not.toBeTruthy()
        expect(is.isNumber(_symbol)).not.toBeTruthy()
        expect(is.isNumber(_map)).not.toBeTruthy()
        expect(is.isNumber(_weakmap)).not.toBeTruthy()
        expect(is.isNumber(_set)).not.toBeTruthy()
        expect(is.isNumber(_weakset)).not.toBeTruthy()
        expect(is.isNumber(_class)).not.toBeTruthy()
        expect(is.isNumber(_classInstance)).not.toBeTruthy()
        expect(is.isNumber(_promise)).not.toBeTruthy()
        expect(is.isNumber(_asyncFunction)).not.toBeTruthy()
    })

    test('Date', () => {
        expect(is.isDate(_array)).not.toBeTruthy()
        expect(is.isDate(_object)).not.toBeTruthy()
        expect(is.isDate(_function)).not.toBeTruthy()
        expect(is.isDate(_string)).not.toBeTruthy()
        expect(is.isDate(_number)).not.toBeTruthy()
        expect(is.isDate(_date)).toBeTruthy() // -----> true
        expect(is.isDate(_regexp)).not.toBeTruthy()
        expect(is.isDate(_error)).not.toBeTruthy()
        expect(is.isDate(_symbol)).not.toBeTruthy()
        expect(is.isDate(_map)).not.toBeTruthy()
        expect(is.isDate(_weakmap)).not.toBeTruthy()
        expect(is.isDate(_set)).not.toBeTruthy()
        expect(is.isDate(_weakset)).not.toBeTruthy()
        expect(is.isDate(_class)).not.toBeTruthy()
        expect(is.isDate(_classInstance)).not.toBeTruthy()
        expect(is.isDate(_promise)).not.toBeTruthy()
        expect(is.isDate(_asyncFunction)).not.toBeTruthy()
    })

    test('RegExp', () => {
        expect(is.isRegExp(_array)).not.toBeTruthy()
        expect(is.isRegExp(_object)).not.toBeTruthy()
        expect(is.isRegExp(_function)).not.toBeTruthy()
        expect(is.isRegExp(_string)).not.toBeTruthy()
        expect(is.isRegExp(_number)).not.toBeTruthy()
        expect(is.isRegExp(_date)).not.toBeTruthy()
        expect(is.isRegExp(_regexp)).toBeTruthy() // -----> true
        expect(is.isRegExp(_error)).not.toBeTruthy()
        expect(is.isRegExp(_symbol)).not.toBeTruthy()
        expect(is.isRegExp(_map)).not.toBeTruthy()
        expect(is.isRegExp(_weakmap)).not.toBeTruthy()
        expect(is.isRegExp(_set)).not.toBeTruthy()
        expect(is.isRegExp(_weakset)).not.toBeTruthy()
        expect(is.isRegExp(_class)).not.toBeTruthy()
        expect(is.isRegExp(_classInstance)).not.toBeTruthy()
        expect(is.isRegExp(_promise)).not.toBeTruthy()
        expect(is.isRegExp(_asyncFunction)).not.toBeTruthy()
    })

    test('Error', () => {
        expect(is.isError(_object)).not.toBeTruthy()
        expect(is.isError(_function)).not.toBeTruthy()
        expect(is.isError(_string)).not.toBeTruthy()
        expect(is.isError(_number)).not.toBeTruthy()
        expect(is.isError(_date)).not.toBeTruthy()
        expect(is.isError(_regexp)).not.toBeTruthy()
        expect(is.isError(_error)).toBeTruthy() // -----> true
        expect(is.isError(_symbol)).not.toBeTruthy()
        expect(is.isError(_map)).not.toBeTruthy()
        expect(is.isError(_weakmap)).not.toBeTruthy()
        expect(is.isError(_set)).not.toBeTruthy()
        expect(is.isError(_weakset)).not.toBeTruthy()
        expect(is.isError(_class)).not.toBeTruthy()
        expect(is.isError(_array)).not.toBeTruthy()
        expect(is.isError(_classInstance)).not.toBeTruthy()
        expect(is.isError(_promise)).not.toBeTruthy()
        expect(is.isError(_asyncFunction)).not.toBeTruthy()
    })

    test('Symbol', () => {
        expect(is.isSymbol(_array)).not.toBeTruthy()
        expect(is.isSymbol(_object)).not.toBeTruthy()
        expect(is.isSymbol(_function)).not.toBeTruthy()
        expect(is.isSymbol(_string)).not.toBeTruthy()
        expect(is.isSymbol(_number)).not.toBeTruthy()
        expect(is.isSymbol(_date)).not.toBeTruthy()
        expect(is.isSymbol(_regexp)).not.toBeTruthy()
        expect(is.isSymbol(_error)).not.toBeTruthy()
        expect(is.isSymbol(_symbol)).toBeTruthy() // -----> true
        expect(is.isSymbol(_map)).not.toBeTruthy()
        expect(is.isSymbol(_weakmap)).not.toBeTruthy()
        expect(is.isSymbol(_set)).not.toBeTruthy()
        expect(is.isSymbol(_weakset)).not.toBeTruthy()
        expect(is.isSymbol(_class)).not.toBeTruthy()
        expect(is.isSymbol(_classInstance)).not.toBeTruthy()
        expect(is.isSymbol(_promise)).not.toBeTruthy()
        expect(is.isSymbol(_asyncFunction)).not.toBeTruthy()
    })

    test('Map', () => {
        expect(is.isMap(_array)).not.toBeTruthy()
        expect(is.isMap(_object)).not.toBeTruthy()
        expect(is.isMap(_function)).not.toBeTruthy()
        expect(is.isMap(_string)).not.toBeTruthy()
        expect(is.isMap(_number)).not.toBeTruthy()
        expect(is.isMap(_date)).not.toBeTruthy()
        expect(is.isMap(_regexp)).not.toBeTruthy()
        expect(is.isMap(_error)).not.toBeTruthy()
        expect(is.isMap(_symbol)).not.toBeTruthy()
        expect(is.isMap(_map)).toBeTruthy() // -----> true
        expect(is.isMap(_weakmap)).not.toBeTruthy()
        expect(is.isMap(_set)).not.toBeTruthy()
        expect(is.isMap(_weakset)).not.toBeTruthy()
        expect(is.isMap(_class)).not.toBeTruthy()
        expect(is.isMap(_classInstance)).not.toBeTruthy()
        expect(is.isMap(_promise)).not.toBeTruthy()
        expect(is.isMap(_asyncFunction)).not.toBeTruthy()
    })

    test('WeakMap', () => {
        expect(is.isWeakMap(_array)).not.toBeTruthy()
        expect(is.isWeakMap(_object)).not.toBeTruthy()
        expect(is.isWeakMap(_function)).not.toBeTruthy()
        expect(is.isWeakMap(_string)).not.toBeTruthy()
        expect(is.isWeakMap(_number)).not.toBeTruthy()
        expect(is.isWeakMap(_date)).not.toBeTruthy()
        expect(is.isWeakMap(_regexp)).not.toBeTruthy()
        expect(is.isWeakMap(_error)).not.toBeTruthy()
        expect(is.isWeakMap(_symbol)).not.toBeTruthy()
        expect(is.isWeakMap(_map)).not.toBeTruthy()
        expect(is.isWeakMap(_weakmap)).toBeTruthy() // -----> true
        expect(is.isWeakMap(_set)).not.toBeTruthy()
        expect(is.isWeakMap(_weakset)).not.toBeTruthy()
        expect(is.isWeakMap(_class)).not.toBeTruthy()
        expect(is.isWeakMap(_classInstance)).not.toBeTruthy()
        expect(is.isWeakMap(_promise)).not.toBeTruthy()
        expect(is.isWeakMap(_asyncFunction)).not.toBeTruthy()
    })

    test('Set', () => {
        expect(is.isSet(_array)).not.toBeTruthy()
        expect(is.isSet(_object)).not.toBeTruthy()
        expect(is.isSet(_function)).not.toBeTruthy()
        expect(is.isSet(_string)).not.toBeTruthy()
        expect(is.isSet(_number)).not.toBeTruthy()
        expect(is.isSet(_date)).not.toBeTruthy()
        expect(is.isSet(_regexp)).not.toBeTruthy()
        expect(is.isSet(_error)).not.toBeTruthy()
        expect(is.isSet(_symbol)).not.toBeTruthy()
        expect(is.isSet(_map)).not.toBeTruthy()
        expect(is.isSet(_weakmap)).not.toBeTruthy()
        expect(is.isSet(_set)).toBeTruthy() // -----> true
        expect(is.isSet(_weakset)).not.toBeTruthy()
        expect(is.isSet(_class)).not.toBeTruthy()
        expect(is.isSet(_classInstance)).not.toBeTruthy()
        expect(is.isSet(_promise)).not.toBeTruthy()
        expect(is.isSet(_asyncFunction)).not.toBeTruthy()
    })

    test('WeakSet', () => {
        expect(is.isWeakSet(_array)).not.toBeTruthy()
        expect(is.isWeakSet(_object)).not.toBeTruthy()
        expect(is.isWeakSet(_function)).not.toBeTruthy()
        expect(is.isWeakSet(_string)).not.toBeTruthy()
        expect(is.isWeakSet(_number)).not.toBeTruthy()
        expect(is.isWeakSet(_date)).not.toBeTruthy()
        expect(is.isWeakSet(_regexp)).not.toBeTruthy()
        expect(is.isWeakSet(_error)).not.toBeTruthy()
        expect(is.isWeakSet(_symbol)).not.toBeTruthy()
        expect(is.isWeakSet(_map)).not.toBeTruthy()
        expect(is.isWeakSet(_weakmap)).not.toBeTruthy()
        expect(is.isWeakSet(_set)).not.toBeTruthy()
        expect(is.isWeakSet(_weakset)).toBeTruthy() // -----> true
        expect(is.isWeakSet(_class)).not.toBeTruthy()
        expect(is.isWeakSet(_classInstance)).not.toBeTruthy()
        expect(is.isWeakSet(_promise)).not.toBeTruthy()
        expect(is.isWeakSet(_asyncFunction)).not.toBeTruthy()
    })

    test('Class', () => {
        expect(is.isClass(_array)).not.toBeTruthy()
        expect(is.isClass(_object)).not.toBeTruthy()
        expect(is.isClass(_function)).not.toBeTruthy()
        expect(is.isClass(_string)).not.toBeTruthy()
        expect(is.isClass(_number)).not.toBeTruthy()
        expect(is.isClass(_date)).not.toBeTruthy()
        expect(is.isClass(_regexp)).not.toBeTruthy()
        expect(is.isClass(_error)).not.toBeTruthy()
        expect(is.isClass(_symbol)).not.toBeTruthy()
        expect(is.isClass(_map)).not.toBeTruthy()
        expect(is.isClass(_weakmap)).not.toBeTruthy()
        expect(is.isClass(_set)).not.toBeTruthy()
        expect(is.isClass(_weakset)).not.toBeTruthy()
        expect(is.isClass(_class)).toBeTruthy() // -----> true
        expect(is.isClass(_classInstance)).not.toBeTruthy()
        expect(is.isClass(_promise)).not.toBeTruthy()
        expect(is.isClass(_asyncFunction)).not.toBeTruthy()
    })

    test('Promise', () => {
        expect(is.isPromise(_array)).not.toBeTruthy()
        expect(is.isPromise(_object)).not.toBeTruthy()
        expect(is.isPromise(_function)).not.toBeTruthy()
        expect(is.isPromise(_string)).not.toBeTruthy()
        expect(is.isPromise(_number)).not.toBeTruthy()
        expect(is.isPromise(_date)).not.toBeTruthy()
        expect(is.isPromise(_regexp)).not.toBeTruthy()
        expect(is.isPromise(_error)).not.toBeTruthy()
        expect(is.isPromise(_symbol)).not.toBeTruthy()
        expect(is.isPromise(_map)).not.toBeTruthy()
        expect(is.isPromise(_weakmap)).not.toBeTruthy()
        expect(is.isPromise(_set)).not.toBeTruthy()
        expect(is.isPromise(_weakset)).not.toBeTruthy()
        expect(is.isPromise(_class)).not.toBeTruthy()
        expect(is.isPromise(_classInstance)).not.toBeTruthy()
        expect(is.isPromise(_promise)).toBeTruthy() // -----> true
        expect(is.isPromise(_asyncFunction)).not.toBeTruthy()
    })

    test('AsyncFunction', () => {
        expect(is.isAsyncFunction(_array)).not.toBeTruthy()
        expect(is.isAsyncFunction(_object)).not.toBeTruthy()
        expect(is.isAsyncFunction(_function)).not.toBeTruthy()
        expect(is.isAsyncFunction(_string)).not.toBeTruthy()
        expect(is.isAsyncFunction(_number)).not.toBeTruthy()
        expect(is.isAsyncFunction(_date)).not.toBeTruthy()
        expect(is.isAsyncFunction(_regexp)).not.toBeTruthy()
        expect(is.isAsyncFunction(_error)).not.toBeTruthy()
        expect(is.isAsyncFunction(_symbol)).not.toBeTruthy()
        expect(is.isAsyncFunction(_map)).not.toBeTruthy()
        expect(is.isAsyncFunction(_weakmap)).not.toBeTruthy()
        expect(is.isAsyncFunction(_set)).not.toBeTruthy()
        expect(is.isAsyncFunction(_weakset)).not.toBeTruthy()
        expect(is.isAsyncFunction(_class)).not.toBeTruthy()
        expect(is.isAsyncFunction(_classInstance)).not.toBeTruthy()
        expect(is.isAsyncFunction(_promise)).not.toBeTruthy()
        expect(is.isAsyncFunction(_asyncFunction)).toBeTruthy() // -----> true
    })

    test('conditional async call', async () => {
        let foo
        let result: number
        type AsyncFunc = () => Promise<number>

        const f1 = async () =>
            new Promise<number>(resolve => {
                setTimeout(() => {
                    resolve(1)
                }, 100)
            })
        const f2 = () => 1 // This is an async function

        async function asyncFunc(func: () => Promise<number> | number) {
            if (is.isAsyncFunction(func)) {
                result = await (func() as Promise<number>)
                expect(result).toBe(1)
            } else {
                result = func() as number
                expect(result).toBe(1)
            }
        }

        await asyncFunc(f1)
        await asyncFunc(f2)
    })
})
