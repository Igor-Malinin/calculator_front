<template>
  <select class="calculator__select" @change="$emit('chosen', this.$event)">
    <option v-for="option in options" :value="option">{{option}}</option>
  </select>
</template>

<script>
export default {
  name: "TheSelect",
  props: {
    options: Array
  }
}
</script>

<style lang="scss" scoped>
.calculator__select {
  padding: 8px;
  border: 1px solid $accent;
  border-radius: 4px;
  background-color: $light;
  outline: none;
}
</style>