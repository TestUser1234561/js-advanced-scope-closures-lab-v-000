function produceDrivingRange(r) {
  return function(a, b) {
    let len = parseInt(a.substring(0, 2)) - parseInt(b.substring(0, 2))
          console.log(len)
    if (len > r) {
      return `${r - len} blocks out of range`
    } else {
      return `within range by ${len - r}`
    }
  }
}
