<template>
  <button type="button" class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "TheButton"
}
</script>

<style lang="scss" scoped>
.btn {
  padding: 8px;
  border: 1px solid $accent;
  border-radius: 4px;
  align-self: flex-end;
  background-color: $dark_accent;
  transition: all .1s ease-in;

  &:hover{
    filter: brightness(.9);
  }
  &:active{
    filter: brightness(.75);
  }
}
</style>