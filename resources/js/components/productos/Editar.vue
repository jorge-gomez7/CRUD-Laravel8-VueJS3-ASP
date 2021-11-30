 <template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="card text-center">
          <div class="card-header"><h3>Editar el producto</h3></div>
          <div class="card-body">
            <form @submit.prevent="actualizar">
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
                  <!-- <a type="button" v-on:click="mostrar" class="btn btn-danger"
                    >Cancelar</a
                  > -->
                  <button type="submit" class="btn btn-primary">Guardar</button>
                </div>
              </div>
            </form>
          </div>
          <div class="card-footer text-muted">Edición de productos</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "editar",

  data() {
    return {
      producto: {
        descripcion: "",
        precio: "",
      },
    };
  },

  mounted() {
    this.mostrarProducto();
  },

  methods: {
    async mostrarProducto() {
      try {
        await this.axios
          .get(`/api/producto/${this.$route.params.id}`)
          .then((res) => {
            const { descripcion, precio } = res.data;
            this.producto.descripcion = descripcion;
            this.producto.precio = precio;
          });
      } catch (error) {
        console.log("Error al llamar al registro para editar");
      }
    },

    async actualizar() {
      try {
        await this.axios
          .put(`/api/producto/${this.$route.params.id}`, this.producto)
          .then((res) => {
            this.$router.push({ name: "mostrar" });
          });
      } catch (error) {
        console.log("Error al editar el registro");
      }
    },
  },
};
</script>