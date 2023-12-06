<template>
  <input :value="modelValue" @input="updateInput" class="input" type="text" autocomplete="none" placeholder="Введите число">
</template>

<script>
export default {
  name: "TheInput",
  props: {
    modelValue: [String, Number],
    operation: String,
    system: String
  },
  updated() {
    let input = document.querySelectorAll(".input")
    switch (this.system) {
      case "2":
        for (let i = 0; i < input.length; i++)
          input[i].value = input[i].value.replace(/[^-0-1]/g, '')
        break;
      case "8":
        for (let i = 0; i < input.length; i++)
          input[i].value = input[i].value.replace(/[^-0-7]/g, '')
        break;
      case "10":
        for (let i = 0; i < input.length; i++)
          input[i].value = input[i].value.replace(/[^-0-9]/g, '')
        break;
      case "16":
        for (let i = 0; i < input.length; i++)
          input[i].value = input[i].value.replace(/[^-0-9A-Fa-f]/g, '')
        break;
    }
    if(this.operation === '÷') {
      if (input[1].value === "0" || input[1].value === "00") {
        input[1].value = ""
      }
    }
  },
  mounted() {
    let input = document.querySelectorAll(".input")
    switch (this.system) {
      case "2":
        for (let i = 0; i < input.length; i++)
          input[i].value = input[i].value.replace(/[^-0-1]/g, '')
        break;
      case "8":
        for (let i = 0; i < input.length; i++)
          input[i].value = input[i].value.replace(/[^-0-7]/g, '')
        break;
      case "10":
        for (let i = 0; i < input.length; i++)
          input[i].value = input[i].value.replace(/[^-0-9]/g, '')
        break;
      case "16":
        for (let i = 0; i < input.length; i++)
          input[i].value = input[i].value.replace(/[^-0-9A-Fa-f]/g, '')
        break;
    }
    if(this.operation === '÷') {
      if (input[1].value === "0" || input[1].value === "00") {
        input[1].value = ""
      }
    }
  },
  methods: {
    // updated(){this.updated()},
    updateInput(event) {
      this.$emit('update:modelValue', event.target.value)
    }
  }
}
</script>

<style lang="scss" scoped>
.input {
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