import {fireEvent, render, screen} from "@testing-library/vue";
import TheInput from "./TheInput.vue";
import Calculator from "../views/CalculatorView.vue";
import expect from "expect";
import { mount } from '@vue/test-utils';
import userEvent from '@testing-library/user-event';

test('renders base inputs', () => {
  const {debug} = render(TheInput)

  debug()
})

test('TheInput should only allow numeric input', async () => {
  const wrapper = render(TheInput, {
    props: {
      value: "1179sdcv",
      system: "8"
    }
  });

  const inputElement = wrapper.getByPlaceholderText('Введите число');

  console.log(inputElement.value)

  expect(inputElement.value).toBe("117");
});

test('VColor directive test', () => {

  const wrapper = mount(Calculator, {
    data() {
      return {
        dataForCalculation: {
          firstNum: "",
          firstNumSystem: "",
          secondNum: "",
          secondNumSystem: "",
          operation: "",
          result: 290,
          dateTime: "",
        },
      }
    },
  });

  let elementWithDirective = wrapper.find('.calculator__result')
  // elementWithDirective.element.textContent = "20"
  console.log(elementWithDirective.element.style.color)

  if (Number(elementWithDirective.element.textContent) < 0)
    expect(elementWithDirective.element.style.color).toBe('red')
  else if (Number(elementWithDirective.element.textContent) === 0)
    expect(elementWithDirective.element.style.color).toBe('black')
  else
    expect(elementWithDirective.element.style.color).toBe('green')


})

test('truncateDecimals filter test', () => {

  const wrapper = mount(Calculator, {
    data() {
      return {
        dataForCalculation: {
          firstNum: "",
          firstNumSystem: "",
          secondNum: "",
          secondNumSystem: "",
          operation: "",
          result: 2540.1234,
          dateTime: "",
        },
      }
    },
  });

  let elementWithFilter = wrapper.find('.calculator__result')
  console.log(elementWithFilter.element.textContent)

  expect(elementWithFilter.element.textContent).toBe("2540.12")
})






  // const user = userEvent.setup()
  // inputElement.addEventListener('input', () => {
  //   console.log(inputElement.value)
  // })

  // await user.type(inputElement, "123f")
