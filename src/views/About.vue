<template>
  <section>
    <h1>Acerca de Tachuela.js</h1>
    <p>Tachuela es un proyecto cuya idea es la de disponer de un espacio en el cual publicar contenido gratuito en el internet referente a la programación.</p>
    <p>También la interfaz permite la creación de notas, marcadores y listas dinámicas que le permiten al usuario publicar contenido personalizado.</p>
    <p>Tachuela fue creada usando Vue 2 y vive en la nube gracias a Netlify.</p>
    <div>
      <a
        class="danger"
        href="https://github.com/r2abreu/Tachuela.js"
        target="_blank"
      >Mira el código</a>
      <router-link
        class="danger"
        to="/dashboard/new"
      >Empieza</router-link>
    </div>
  </section>
</template>


<script>
export default {
  name: "About",
};
</script>

<style lang="scss" scoped>
h1 {
  font-size: 3em;
  color: #ff1d28b7;
}

section {
  * + * {
    margin-top: 1em;
  }

  div {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    margin-top: 2em;
  }

  p {
    line-height: 1.5;
    font-size: 1.2em;
  }
}

a {
  text-decoration: none;
  color: #000;
  border: 2px solid black;
  padding: 1em 1.5em;
  width: 181px;
  text-align: center;
  font-size: 1.1em;
  transition: all 0.2s ease-in;
  margin: 0;
}

a:hover {
  transform: translateY(-5px);
  box-shadow: 0px 5px 15px 2px rgba(0, 0, 0, 0.38);
  border-radius: 0.5em;
}

.danger {
  border: 2px solid transparent;
  color: #fff;
  background-color: #ff1d2a;
}
</style>