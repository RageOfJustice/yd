export const parseHash = hash => {
  if (hash) {
    // remove '#'
    const normalizedHash = hash.substring(1)
    return normalizedHash
      .split('&')
      .map(v => v.split('='))
      .reduce((pre, [key, value]) => ({ ...pre, [key]: value }), {})
  }
}
