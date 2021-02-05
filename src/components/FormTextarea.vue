<template>

  <textarea
    cols="30"
    rows="10"
    :id="id"
    :placeholder="placeholder"
    :value="value"
    :required="required"
    @input="updateValue($event.target.value)"
  ></textarea>

</template>

<script>
export default {
  name: "FormTextarea",
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
textarea {
  background-color: #fff;
  border-bottom: 2px solid #ff1d6141;
  width: 100%;
  resize: none;
  padding: 1em;
  transition: all 0.2s ease-in;

  &:focus {
    outline: transparent;
    background-color: #c0c0c03d;
  }
}
</style>