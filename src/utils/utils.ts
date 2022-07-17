export const updateObjectInArray = (
  array: Array<any>,
  matchParam: any,
  propName: string,
  newObj: any
) => {
  array.map((el) => {
    if (el[propName] === matchParam) {
      return Object.assign(el, newObj)
    } else {
      return el
    }
  })
}
