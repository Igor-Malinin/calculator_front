export const color = {
  updated(element, binding) {
    if (Number(element.textContent) < 0)
      element.style.color = "red"
    else if (Number(element.textContent) === 0)
      element.style.color = "black"
    else
      element.style.color = "green"
  },
  mounted(element, binding) {
    if (Number(element.textContent) < 0)
      element.style.color = "red"
    else if (Number(element.textContent) === 0)
      element.style.color = "black"
    else
      element.style.color = "green"
  },
}