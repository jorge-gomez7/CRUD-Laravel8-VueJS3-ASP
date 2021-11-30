<template>
  <div class="row">
    <div class="col-lg-12 mb-4">
      <router-link :to="{ name: 'crear' }" class="btn btn-success"
        >Crear</router-link
      >
    </div>

    <div class="col-12">
      <div class="table-responsive">
        <table class="table table-bordered">
          <thead class="bg-primary text-white">
            <tr>
              <td>ID</td>
              <td>Descripción</td>
              <td>Precio</td>
              <td>Acciones</td>
            </tr>
          </thead>
          <tbody>
            <tr v-for="producto in productos" :key="producto.id">
              <td>{{ producto.id }}</td>
              <td>{{ producto.descripcion }}</td>
              <td>{{ producto.precio }}</td>
              <td class="d-flex justify-content-center">
                <router-link
                  :to="{ name: 'editar', params: { id: producto.id } }"
                  class="btn btn-info"
                  ><i class="far fa-edit"></i
                ></router-link>

                <a
                  type="button"
                  v-on:click="eliminarProducto(producto.id)"
                  class="btn btn-danger"
                  ><i class="far fa-trash-alt"></i
                ></a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "productos",
  data() {
    return {
      productos: [],
    };
  },

  created() {
    this.mostrarProductos();
  },

  methods: {
    async mostrarProductos() {
      try {
        this.axios.get("/api/producto").then((res) => {
          this.productos = res.data;
        });
      } catch (error) {
        console.log("error en el proceso de llamar la información", error);
      }
    },

    eliminarProducto(id) {
      try {
        if (confirm("¿realmente desea eliminar el registro?")) {
          this.axios.delete(`/api/producto/${id}`).then((res) => {
            this.mostrarProductos();
          });
        }
      } catch (error) {
        console.log("Error en el proceso para eliminar el registro", error);
      }
    },
  },
};
</script>