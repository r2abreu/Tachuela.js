<template>
  <div class="dropzone">
    <input type="file" />
    <span>Arrastra y suelta una imagen</span>
  </div>
</template>

<script>
export default {
  name: "Dropzone",
};
</script>

<style lang="scss" scoped>
.dropzone {
  width: 100%;
  height: 100px;
  position: relative;
  border: 2px dashed #000;
  display: flex;
  justify-content: center;
  align-items: center;

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