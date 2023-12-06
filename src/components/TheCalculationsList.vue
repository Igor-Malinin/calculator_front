<template>
  <div class="calculations-list">
    <div class="calculations-list__list" v-for="calculation in calculations" :key="calculation.id">
      <div class="numbers-with-systems">
        <div class="number-system">
          <p class="number"><b>Первое число: </b><span>{{calculation.firstNum}}</span></p>
          <p class="system"><b>Система: </b><span>{{calculation.firstNumSystem}}</span></p>
        </div>
        <div class="number-system">
          <p class="number"><b>Второе число: </b><span>{{calculation.secondNum}}</span></p>
          <p class="system"><b>Система: </b><span>{{calculation.secondNumSystem}}</span></p>
        </div>
      </div>
      <div class="operation-date">
        <p class="number"><b>Операция: </b><span>{{calculation.operation}}</span></p>
        <p class="number"><b>Результат: </b><span>{{calculation.result}}</span></p>
        <p class="system"><b>Дата: </b><span>{{calculation.dateTime}}</span></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheCalculationsList",
  props: {
    calculations: Array
  },
}
</script>

<style lang="scss" scoped>
.calculations-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 30px;
  max-height: calc(100vh - 100px);
  min-width: 400px;
  max-width: 700px;
  margin-top: 40px;
  overflow-y: scroll;
  border: 1px solid $accent;
  border-radius: 6px;
}

.calculations-list__list {
  padding: 10px;
  flex-grow: 1;
  border: 1px solid $light_accent;
}

.numbers-with-systems {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 20px;
}

.number-system {
  display: flex;
  justify-content: center;
  gap: 10px;
}

.operation-date {
  display: flex;
  justify-content: center;
  gap: 10px;
}

span {
  color: $accent;
}
</style>