import * as _ from 'lodash'

export const TO_LOWER_CASE = 'toLowerCase'
export const TO_UPPER_CASE = 'toUpperCase'


export function isNull(obj: any): boolean {
    if (undefined === obj || null === obj) {
        return true
    }
    return false
}

/**
 * function will return null check on object key values
 * @param obj 
 */
export function isMandatoryFieldNull(obj: any): boolean {
    isNull(obj)
    for (const key in obj) {
        isNull(key)
    }
    return false
}

/**
 * function will return type check on value w.r.t type
 * @param value
 * @param type 
 */
export function isValidType(value: any, type: string): boolean {
    return typeof value === type
}

export function isNotNull(obj: any): boolean {
    return !isNull(obj)
}

export function fromJSON<T>(Type: { new(): T; }, json: any): T {
    if (isNull(json)) {
        return null
    }
    let obj: any = new Type()
    for (let id in json) {
        obj[id] = json[id]
    }
    return obj
}

// can't specify return type as JSON
export function toJSON(obj: any): any {
    if (isNull(obj)) {
        return null
    }
    return JSON.parse(JSON.stringify(obj))
}

export function hasElement(array: any[], value: any): boolean {
    if (array.indexOf(value) != -1) {
        return true
    }
    return false
}

export function isArray(data: any): boolean {
    return (Object.prototype.toString.call(data) === "[object Array]")
}

/**
 * Returns true if the specified field is a string.
 *
 * @param data
 */
export function isString(data: any): boolean {
    return _.isString(data)
}

/**
 * Returns true if the specified field is a string.
 *
 * @param data
 */
export function isObject(data: any): boolean {
    if (isNotNull(data)) {
        return _.isObject(data)
    }
    return false
}

/**
 * Returns true if the specified field is a number.
 *
 * @param data
 */
export function isNumber(data: any): boolean {
    return _.isNumber(data)
}

/**
 * Returns true if number is valid
 * @param object
 * @param message
 */
export function isValidNumber(object: any) {
    if (isNull(object) || isNaN(object) || object < 1 || object % 1 != 0) {

        return false
    }
    return true
}
/**
 * Parses the specified parameter and returns a number if it is a valid number.
 *
 * @param data
 */
export function parseNumber(data: any, defaultValue?: number): number {
    let time: number = defaultValue
    if (isNotNull(data)) {
        let no = parseInt(data)
        if (!isNaN(no)) {
            time = no
        }
    }
    return time
}

/**
 * Checks if the specified object/string/number is empty.
 *
 * @param obj
 */
export function isEmpty(obj: any): boolean {
    return _.isEmpty(obj)
}

export function customIsEmpty(value: any): boolean {
    return value === undefined ||
        value === null ||
        (typeof value === "object" && Object.keys(value).length === 0) ||
        (typeof value === "string" && value.trim().length === 0)
}

/**
 * Returns true if the object is not empty, else returns false.
 *
 * @param obj
 */
export function isNotEmpty(obj: any): boolean {
    return !_.isEmpty(obj)
}



export async function wrapperPromiseAll(promiseList: Promise<any>[]) {
    let results: any[] = []

    for (let i: number = 0; i < promiseList.length; i = i + 10) {
        let decaPromises: Promise<any>[] = promiseList.slice(i, Math.min(promiseList.length, i + 10))
        let decaPromiseResult = await Promise.all(decaPromises)

        for (let result of decaPromiseResult) {
            results.push(result)
        }
    }

    return results
}

export function makeUniqueArrayEntry(arr: string[], item: string): string[] {
    if (arr === undefined || arr === null) {
        arr = []
    }
    if (item !== undefined && item !== null) {
        if (arr.indexOf(item) === -1) {
            arr.push(item)
        }
    }

    return arr
}


/**
 * Format a number to the specified number of decimals. Defaults to 2 decimals.
 */
export function formatNumber(num: number, noOfDecimals?: number): number {
    let decimals = 2
    if (isNotNull(noOfDecimals)) {
        decimals = noOfDecimals
    }
    let strNum = num.toString()
    if (strNum.includes('.')) {
        return Number(num.toFixed(decimals))
    } else {
        return num
    }
}



export function isFilledArray(arr: any[]): boolean {
    if (isNotNull(arr) && isArray(arr) && arr.length > 0) {
        return true
    }
    return false
}

/**
 * Sleeps for the specified time in milliseconds.
 *
 * @param time
 */
export function sleep(time: number) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

/**
 * Return an array of array chunks of given size
 * @param arr
 * @param chunkSize
 */
export function createArrayChunks(arr: any[], chunkSize: number): any[] {
    let groups = []
    for (let i = 0; i < arr.length; i += chunkSize) {
        groups.push(arr.slice(i, i + chunkSize))
    }
    return groups
}

/**
 * pass array of arrays and convert it into a single array
 * @param set array of arrays
 */
export function getArrayFromSet(set: any[][]) {
    let list: any[] = []
    for (let array of set) {
        for (let obj of array) {
            list.push(obj)
        }
    }
    return list
}

/**
 * returns the percent change (will give negative if )
 * @param oldValue
 * @param newValue
 */
export function getPercentChange(oldValue: number, newValue: number) {
    return Math.round((newValue - oldValue) / oldValue * 100)
}

/**
 * convert an array of arrays to an array
 */
export function flattenArrays(arrays: any[][]): any[] {
    return [].concat.apply([], arrays)
}

/**
 * returns array of items of one array not in another array
 * @param arrayToCheck
 * @param arrayToCheckFrom
 */
export function getNotIncludedItems(arrayToCheck: any[], arrayToCheckFrom: any[]) {
    return arrayToCheck.filter(item => !arrayToCheckFrom.includes(item))
}

/**
 * returns array of items not included in the removal list
 * @param removalArray
 * @param fromArray
 */
export function removeItemsFromArray(removalArray: any[], fromArray: any[]) {
    return fromArray.filter(item => !removalArray.includes(item))
}

/**
 * returns list of objects that have a value of key corresponding the list of values sent
 * @param objectArray
 * @param values
 * @param key
 */
export function getItemsByKeyValues(objectArray: any[], values: string[] | number[], key: string): any[] {
    return _.filter(objectArray, function (item) {
        return isNotNull(item[key]) && _.includes(values, item[key])
    })
}

/**
 * returns list of objects that don't have value of key corresponding the list of values sent
 * @param objectArray
 * @param values
 * @param key
 */
export function getItemsWithoutKeyValues(objectArray: any[], values: string[] | number[], key: string): any[] {
    return _.filter(objectArray, function (item) {
        return isNull(item[key]) || !_.includes(values, item[key])
    })
}

/**
 * returns object with where key value matches required value
 * @param objectArray
 * @param value
 * @param key
 */
export function getItemWithKeyValue(objectArray: any[], value: string | number, key: string): any {
    return _.find(objectArray, function (obj: any) {
        return obj[key] === value
    })
}


/**
 * @export
 * @param {any[]} objectArray
 * @param {*} callback function
 * @returns filter array
 */
export function find(objectArray: any[], callback: any): any {
    return _.find(objectArray, callback)
}

/**
 * returns the total of values for particular key of object in the object array
 * @param objectArray
 * @param key
 */
export function getKeyValueTotal(objectArray: any[], key: string): number {
    return _.sumBy(objectArray, key)
}


/**
 * replace string character at index with *
 * @param str
 * @param index
 */
export function setCharAt(str: string, index: number) {
    if (index > str.length - 1) return str
    return str.substr(0, index) + '*' + str.substr(index + 1)
}



/**
 * Returns true if the specified field is a boolean.
 *
 * @param data
 */
export function isBoolean(data: any): boolean {
    return _.isBoolean(data)
}


/**
 * Parses the specified version string into a number by removing all non digit
 * characters.
 * @param str
 */
export function parseVersion(str: string) {
    let no = 0
    if (isNotNull(str)) {
        str = str.replace(/\D/g, '')
        no = parseNumber(str)
    }
    return no
}

/**
 * Normalize json data
 * @param data
 */
export function normalizeJSON(data: any) {
    if (isNotNull(data)) {
        let sanitizeData = JSON.stringify(data)
            .replace(/""/g, null)
            .replace(/''/g, null)
        return JSON.parse(sanitizeData)
    }
    return data
}




/**
 * get promise Properties from Object
 * @param obj
 */
export function promiseProperties(obj: any) {
    const keys = Object.keys(obj);
    const values = keys.map(key => obj[key])
    return Promise.all(values)
        .then(resolved => {
            const res: any = {};
            for (let i = 0; i < keys.length; i += 1) {
                res[keys[i]] = resolved[i];
            }
            return res;
        })
}

/**
* Retry on fail
* @param fun funtion
* @param param function parameter
* @param maximumRetry mamimum retry allowed, by default it will retry 2 times
* @param maximumRetryCounter retry counter used to identify the current attempt for recursion
*/
export async function retryFunction(fun: Function, param: any[], maximumRetry: number = 2, maximumRetryCounter = 1): Promise<any> {
    try {
        return await fun(...param)
    } catch (error) {
        maximumRetryCounter++
        if (maximumRetryCounter <= maximumRetry) {
            return retryFunction(fun, param, maximumRetry, maximumRetryCounter)
        } else {
            throw error
        }
    }
}



/**
 *  Convert float number to currency and add comma for eg. 12000 will be 12,000
 * @param currencyNumber float or integer number as a input
 * @param currencySymbol not currenty using
 */
export function currencyFormat(currencyNumber: number, currencySymbol?: string) {
    if (isNull(currencyNumber)) {
        return '0'
    }
    let currency: string = currencyNumber.toString()
    let afterPoint = ''
    if (currency.indexOf('.') > 0) {
        afterPoint = currency.substring(currency.indexOf('.'), currency.length)
    }
    const currencyFlot = Math.floor(parseFloat(currency))
    currency = currencyFlot.toString()
    let lastThree = currency.substring(currency.length - 3)
    const otherNumbers = currency.substring(0, currency.length - 3)

    if (otherNumbers !== '') {
        lastThree = ',' + lastThree
    }
    const convertedCurrency = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ',') + lastThree + afterPoint
    return convertedCurrency
}





export function sanitize(str: string, strCase?: string): string {
    let sanitizedStr: string
    if (!isNull(str)) {
        sanitizedStr = str.toString().trim()
        if (!isNull(strCase)) {
            switch (strCase) {
                case TO_LOWER_CASE:
                    sanitizedStr = sanitizedStr.toLowerCase()
                    break

                case TO_UPPER_CASE:
                    sanitizedStr = sanitizedStr.toUpperCase()
                    break

                default:
                    break
            }
        }
    }

    return sanitizedStr
}

export function toString(param: any): string {
    return sanitize(param.toString())
}

export function isEmptyString(str: String): boolean {
    if (isNull(str) || '' === str.trim()) {
        return true
    }
    return false
}

/**
 * Check if string is not empty
 * 
 * @param str string to be checked if empty
 */
export function isNotEmptyString(str: String): boolean {
    return !isEmptyString(str)
}

export function isValidEmail(email: string): boolean {
    if (!isEmptyString(email)) {
        let sanitizedEmail = sanitize(email, TO_LOWER_CASE)
        if (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(sanitizedEmail)) {
            return true
        }
    }
    return false
}

