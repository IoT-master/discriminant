export const UPDATE_ALL = 'UPDATE_ALL';

export function updatingAll (aValue, bValue, cValue){
    return {
        type: UPDATE_ALL,
        payload: {
            a: aValue,
            b: bValue,
            c: cValue
        }
    }
}