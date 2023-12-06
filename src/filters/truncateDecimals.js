export default {
  truncateDecimals (value, decimals) {
    if (!value)
      return value

    return parseFloat(value).toFixed(decimals)
  }
}