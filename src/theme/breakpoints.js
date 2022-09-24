const MOBILE = 0
const TABLET = 640
const DESKTOP = 960
const LARGE_SCREEN = 1650

const keys = ['mobile', 'tablet', 'desktop', 'largeScreen']
const values = {
  mobile: MOBILE,
  tablet: TABLET,
  desktop: DESKTOP,
  largeScreen: LARGE_SCREEN,
}

const unit = 'px'
const step = 5

function up(key) {
  const value = typeof values[key] === 'number' ? values[key] : key
  return `@media (min-width:${value}${unit})`
}

function down(key) {
  const value = typeof values[key] === 'number' ? values[key] : key
  return `@media (max-width:${value - step / 100}${unit})`
}

function between(start, end) {
  const endIndex = keys.indexOf(end)
  return (
    `@media (min-width:${typeof values[start] === 'number' ? values[start] : start
    }${unit}) and ` +
    `(max-width:${(endIndex !== -1 && typeof values[keys[endIndex]] === 'number'
      ? values[keys[endIndex]]
      : end) -
    step / 100
    }${unit})`
  )
}

function only(key) {
  if (keys.indexOf(key) + 1 < keys.length) {
    return between(key, keys[keys.indexOf(key) + 1])
  }

  return up(key)
}

export const breakpoints = {
  keys,
  values,
  unit,
  up,
  down,
  between,
  only,
} 
