<template>
  <input
    type="text"
    :id="id"
    :placeholder="placeholder"
    :value="value"
    :required="required"
    @input="updateValue($event.target.value)"
    autocomplete="off"
  >
</template>

<script>
export default {
  name: "FormText",
  props: {
    id: {
      type: String,
      required: true,
    },
    value: {
      type: String,
    },
    required: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: String,
    },
  },
  methods: {
    updateValue(value) {
      this.$emit("input", value);
    },
  },
};
</script>

<style lang="scss" scoped>
input[type="text"] {
  background-color: #fff;
  padding: 0.5em;
  border-bottom: 2px solid #ff1d6141;
  transition: all 0.2s ease-in;

  &:focus {
    outline: transparent;
    background-color: rgba(192, 192, 192, 0.24);
  }
}
</style>