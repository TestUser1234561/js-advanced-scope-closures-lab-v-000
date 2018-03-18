function produceDrivingRange(r) {
  return function(b, a) {
    let len = parseInt(a.substring(0, 2)) - parseInt(b.substring(0, 2))
          console.log(len)
    if (len > r) {
      return `${len - r} blocks out of range`
    } else {
      return `within range by ${r - len}`
    }
  }
}
