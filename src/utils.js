export const __2 = fn => {
  return function curry(arg0, arg1) {
    if (arguments.length === 1) {
      return arg => curry(arg0, arg)
    }

    return fn(arg0, arg1)
  }
}

export const __3 = fn => {
  return function curry(arg0, arg1, arg2) {
    if (arguments.length === 1) {
      return x => curry(arg0, x)
    }

    if (arguments.length === 2) {
      return y => curry(arg0, arg1, y)
    }

    return fn(arg0, arg1, arg2)
  }
}

export const __4 = fn => {
  return function curry(arg0, arg1, arg2, arg3) {
    if (arguments.length === 1) {
      return x => curry(arg0, x)
    }

    if (arguments.length === 2) {
      return y => curry(arg0, arg1, y)
    }

    if (arguments.length === 3) {
      return z => curry(arg0, arg1, arg2, z)
    }

    return fn(arg0, arg1, arg2, arg3)
  }
}

export const Ok = value => {
  return {
    TAG: 0,
    _0: value,
  }
}

export const Error = value => {
  return {
    TAG: 1,
    _0: value,
  }
}

export const Some = value => value
export const None = undefined

export const pipe = (value, ...fns) => {
  return fns.reduce((prev, fn) => fn(prev), value)
}
