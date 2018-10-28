import * as R from 'ramda'

export const renameKeys = R.curry((keysMap, obj) =>
  R.reduce(
    (acc, key) => R.assoc(keysMap[key] || key, obj[key], acc),
    {},
    R.keys(obj),
  ),
)

let id = 0
// data - array of items
export const createTree = R.map(({ name, ...rest }) => ({
  ...rest,
  filename: name,
  id: id++,
}))
