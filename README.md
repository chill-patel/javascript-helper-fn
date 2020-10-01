# Javascript Util Functions


### FUNCTION
```sh
isNull(obj: any): boolean;
isMandatoryFieldNull(obj: any): boolean;
isValidType(value: any, type: string): boolean;
isNotNull(obj: any): boolean;
toJSON(obj: any): any;
hasElement(array: any[], value: any): boolean;
isArray(data: any): boolean;
isString(data: any): boolean;
isObject(data: any): boolean;
isNumber(data: any): boolean;
isValidNumber(object: any): boolean;
parseNumber(data: any, defaultValue?: number): number;
isEmpty(obj: any): boolean;
customIsEmpty(value: any): boolean;
isNotEmpty(obj: any): boolean;
wrapperPromiseAll(promiseList: Promise<any>[]): Promise<any[]>;
makeUniqueArrayEntry(arr: string[], item: string): string[];
formatNumber(num: number, noOfDecimals?: number): number;
isFilledArray(arr: any[]): boolean;
sleep(time: number): Promise<unknown>;
createArrayChunks(arr: any[], chunkSize: number): any[];
getArrayFromSet(set: any[][]): any[];
getPercentChange(oldValue: number, newValue: number): number;
flattenArrays(arrays: any[][]): any[];
getNotIncludedItems(arrayToCheck: any[], arrayToCheckFrom: any[]): any[];
removeItemsFromArray(removalArray: any[], fromArray: any[]): any[];
getItemsByKeyValues(objectArray: any[], values: string[] | number[], key: string): any[];
getItemsWithoutKeyValues(objectArray: any[], values: string[] | number[], key: string): any[];
getItemWithKeyValue(objectArray: any[], value: string | number, key: string): any;
find(objectArray: any[], callback: any): any;
getKeyValueTotal(objectArray: any[], key: string): number;
setCharAt(str: string, index: number): string;
isBoolean(data: any): boolean;
parseVersion(str: string): number;
normalizeJSON(data: any): any;
promiseProperties(obj: any): Promise<any>;
retryFunction(fun: Function, param: any[], maximumRetry?: number, maximumRetryCounter?: number): Promise<any>;
currencyFormat(currencyNumber: number, currencySymbol?: string): string;
sanitize(str: string, strCase?: string): string;
toString(param: any): string;
isEmptyString(str: String): boolean;
isNotEmptyString(str: String): boolean;
isValidEmail(email: string): boolean;
```
