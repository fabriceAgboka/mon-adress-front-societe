<template>
  <div>
    <div v-if="loading">
      <h3 style="color: #000; font-size: 25px" class="mb-2">
        Salut {{ user.name }}!
      </h3>

      <div class="row">
        <div class="col-md-6">
          <total :entity="statistics" />
        </div>
        <div class="col-md-6">
          <pie :statistics="statistics" style="height: 400px" />
        </div>
      </div>
    </div>
    <div v-else>
      <p>Encours...</p>
    </div>
  </div>
</template>

<script>
import {
  BCard,
  BCardText,
  BTable,
  BAvatar,
  BBadge,
  BRow,
  BCol,
  BFormGroup,
  BFormSelect,
  BPagination,
  BInputGroup,
  BFormInput,
  BInputGroupAppend,
  BButton,
  BDropdown,
  BDropdownItem,
  BModal,
  VBModal,
  BForm,
  BLink,
} from "bootstrap-vue";
import Pie from "./pages/dashboard/pie";
import Total from "./pages/dashboard/total";
import auth from "../helpers/auth";

export default {
  components: {
    BCard,
    BCardText,
    Pie,
    Total,
    BTable,
    BAvatar,
    BBadge,
    BRow,
    BCol,
    BFormGroup,
    BFormSelect,
    BPagination,
    BInputGroup,
    BFormInput,
    BInputGroupAppend,
    BButton,
    BDropdown,
    BDropdownItem,
    BModal,
    BForm,
    BLink,
  },
  data() {
    return {
      user: auth.getUser(),
      statistics: "",
      loading: false,
      disabled: false,
      form: {
        year: "",
        month: "",
      },
    };
  },
  mounted() {
    this.index();
  },
  methods: {
    closed() {
      this.form.year = "";
      this.form.month = "";
      this.disabled = false;
      this.$bvModal.hide("add-admin-modal");
    },
    index() {
      this.loading = false;
      this.$http
        .post("/societe/dashboard", this.form)
        .then((res) => {
          this.statistics = res.data.data;

          this.loading = true;
          this.closed();
        })
        .catch((errors) => {
          //errors
        });
    },
  },
};
</script>

<style></style>
