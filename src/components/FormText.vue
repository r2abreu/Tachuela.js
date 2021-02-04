<template>
  <input
    type="text"
    :id="id"
    :placeholder="placeholder"
    :value="value"
    :required="required"
    @input="updateValue($event.target.value)"
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
  background-color: #c4c4c4;
}
</style>