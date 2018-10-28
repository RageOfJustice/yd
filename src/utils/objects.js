import * as R from 'ramda'

export const renameKeys = R.curry((keysMap, obj) =>
  R.reduce(
    (acc, key) => R.assoc(keysMap[key] || key, obj[key], acc),
    {},
    R.keys(obj),
  ),
)

// data - array of items
export const createTree = data => {
  let tree = {}

  R.forEach(item => {
    const path = R.pipe(
      R.replace(/^disk:\/$/, ''),
      R.split('/'),
    )(item.path)

    tree = R.assocPath(path, item, tree)
  }, data)
}
