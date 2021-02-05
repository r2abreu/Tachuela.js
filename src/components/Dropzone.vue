<template>
  <div class="dropzone">
    <input
      @change="onFileChange"
      type="file"
      :required="required"
      id="image"
      accept="image/*"
    />
    <span>{{message}}</span>
  </div>
</template>

<script>
export default {
  data: () => ({
    message: "Arrastra y suelta una imagen",
  }),
  name: "Dropzone",
  props: {
    required: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    onFileChange({ target }) {
      let file = target.files[0];
      this.message = `Nueva imagen: ${file.name}`;
      this.$emit("change", file);
    },
  },
};
</script>

<style lang="scss" scoped>
.dropzone {
  width: 100%;
  height: 100px;
  position: relative;
  border: 2px dashed #ff1d6141;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in;

  &:hover {
    background-color: #c0c0c03d;
  }

  span {
    margin: 0;
  }

  input {
    position: absolute;
    opacity: 0;
    width: 100%;
    height: 100%;
    margin: 0;
  }
}
</style>