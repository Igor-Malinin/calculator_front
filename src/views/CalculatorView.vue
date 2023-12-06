<template>
  <div class="calculator">
    <form class="calculator__form">
      <div class="calculator__select-field">
        <label>Выберите систему счисления:</label>
        <the-select @change="chosen" :options="systemOptions" id="system-select"/>
      </div>
      <div class="calculator__inputs-field">
        <label for="first-num">Введите первое число:</label>
        <the-input type="text" id="first-num" class="calculator__input"
                   :system="system"
                   :operation="dataForCalculation.operation"
                   v-model="dataForCalculation.firstNum" />
        <label for="second-num">Введите второе число:</label>
        <the-input type="text" id="second-num" class="calculator__input"
                   :system="system"
                   :operation="dataForCalculation.operation"
                   v-model="dataForCalculation.secondNum" />
      </div>
      <div class="select-with-button">
        <div class="calculator__select-field">
          <label>Выберите операцию:</label>
          <the-select :options="operationOptions" @change="chosen" id="operation-select" />
        </div>
        <the-button @click="submit" id="get-result">Вычислить</the-button>
      </div>
      <div class="calculator__result" v-color>
        {{dataForCalculation.result}}
      </div>
      <the-button @click="clear" id="clear">Очистить</the-button>
      <div class="calculator__get-calculations">
        <the-button @click="getAllCalculations">Получить все</the-button>
        <div class="calculator__get-by-id">
          <input type="text" class="calculator__input" v-model="id">
          <the-button @click="getCalculationById">Получить по id</the-button>
        </div>
      </div>
    </form>
    <the-calculations-list
        :calculations="calculations"
    />
  </div>
</template>

<script>

import CalculatorDataService from "../services/CalculatorDataService";
import TheCalculationsList from "../components/TheCalculationsList.vue";
import {color} from "../directives/VColor";
import TheInput from "../components/TheInput.vue";
import truncateDecimals from "../filters/truncateDecimals";
import TheButton from "@/components/TheButton.vue";
import TheSelect from "@/components/TheSelect.vue";

export default {
  name: 'CalculatorView',
  components: {TheSelect, TheButton, TheInput, TheCalculationsList},
  directives: {
    color
  },
  data() {
    return {
      id: null,
      dataForCalculation: {
        firstNum: "",
        firstNumSystem: "",
        secondNum: "",
        secondNumSystem: "",
        operation: "",
        result: 0,
        dateTime: "",
      },
      num: 23423.2343,
      result: "",
      system: "",
      calculations: [],
      systemOptions: [2, 8, 10, 16],
      operationOptions: ["*", "÷", "-", "+"]
    }
  },
  methods: {
    chosen(event) {
      if (!isNaN(event.target.value))
        this.system = event.target.value
      else
        this.dataForCalculation.operation = event.target.value

      console.log(this.system)
      console.log(this.dataForCalculation.operation)
    },
    clear() {
      this.dataForCalculation.firstNum = ''
      this.dataForCalculation.secondNum = ''
    },

    async submit() {
      this.dataForCalculation.dateTime = (new Date()).toLocaleString("ru", "dd.MM.yyyyTHH:mm:ss").toString()
      this.dataForCalculation.firstNumSystem = this.dataForCalculation.secondNumSystem = this.system
      await CalculatorDataService.getResult(
        this.dataForCalculation.firstNum,
        this.dataForCalculation.secondNum,
        this.dataForCalculation.operation,
        this.dataForCalculation.firstNumSystem
      )
        .then(response => {
          this.dataForCalculation.result = response.data.toString()
        })
        .catch( e => {
          alert(e)
        })
      CalculatorDataService.create(this.dataForCalculation)
        .then(response => {
          this.id = response.data.id
        })
        .catch( e => {
          alert(e)
        })
    },
    getAllCalculations() {
      CalculatorDataService.getAll()
          .then(response => {
            this.calculations = response.data
            console.log(response.data)
          })
          .catch(e => {
            alert(e)
          })
    },
    getCalculationById() {
      CalculatorDataService.getById(this.id)
          .then(response => {
            this.calculations.push(response.data)
            console.log(response.data)
          })
          .catch(e => {
            alert(e)
          })
    },
    deleteCalculationById() {
      CalculatorDataService.delete(this.id)
          .then(response => {
            console.log(response)
          })
          .catch(e => {
            alert(e)
          })
    },
    truncateDecimals: truncateDecimals.truncateDecimals
  },
}
</script>

<style lang="scss" scoped>

.calculator {
  display: flex;
  column-gap: 40px;
}

.calculator__form {
  width: 400px;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  padding: 20px;
  margin: 40px;
  border: 1px solid $accent;
  border-radius: 6px;
}

.select-with-button {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.calculator__select-field {
  display: flex;
  align-items: center;
  column-gap: 10px;
  background-position: calc(20px);
}

.calculator__inputs-field {
  display: flex;
  flex-direction: column;
  row-gap: 10px;
}

.calculator__get-calculations {
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  border-top: 1px solid $dark_accent;
  padding-top: 20px;
}

.calculator__get-by-id {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.calculator__input {
  padding: 8px;
  border: 1px solid $accent;
  border-radius: 4px;
  background-color: $light;
  &:focus {
    border: 1px solid $light_accent;
    box-shadow: inset 0 0 8px 2px rgba(0, 0, 0, .2);
  }
}

.calculator__result {
  padding: 8px;
  border: 1px solid $accent;
  border-radius: 4px;
  background-color: $light;
  &:focus {
    border: 1px solid $light_accent;
    box-shadow: inset 0 0 8px 2px rgba(0, 0, 0, .2);
  }
}
</style>
