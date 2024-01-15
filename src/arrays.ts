/**
 * @description splice items from array
 * @returns array with removed item
 * @param array your desired array
 * @example spliceArray(['my','array','here'],2,1)
 * @returns ['my','array']
 */
export const spliceArray = (array: any[], startIndex: number, count: number = 1) => {
    if (array.length > 0) {
        return array.splice(startIndex, count);
    } else {
        throw new Error("Array is Empty");
    }
};
