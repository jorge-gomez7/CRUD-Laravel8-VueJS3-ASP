<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="card text-center">
          <div class="card-header"><h3>Crear nuevo producto</h3></div>
          <div class="card-body">
            <form @submit.prevent="crear">
              <div class="row">
                <div class="col-8 mb-2">
                  <div class="form-group">
                    <label for="">Descripción</label>
                    <input
                      type="text"
                      class="form-control"
                      v-model="producto.descripcion"
                    />
                  </div>
                </div>

                <div class="col-4 mb-2">
                  <div class="form-group">
                    <label for="">Precio</label>
                    <input
                      type="text"
                      class="form-control"
                      v-model="producto.precio"
                    />
                  </div>
                </div>
                <div class="col-12 mb-2">
                  <button type="submit" class="btn btn-primary">Guardar</button>
                </div>
              </div>
            </form>
          </div>
          <div class="card-footer text-muted">Creación de productos</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "crear",
  data() {
    return {
      producto: {
        descripcion: "",
        precio: "",
      },
    };
  },

  methods: {
    async crear() {
      try {
        await this.axios.post("/api/producto", this.producto).then((res) => {
          this.$router.push({ name: "mostrar" });
        });
      } catch (error) {
        console.log("Error creando el registro ", error);
      }
    },
  },
};
</script>