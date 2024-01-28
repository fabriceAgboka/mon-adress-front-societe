<template>
  <div>
    <div>
      <b-form-group label="Adresse" label-for="login-otp">
        <b-form-input
          id="otp"
          v-model="adresse"
          name="otp"
          placeholder="Adresse"
          @keyup="change_adresse()"
        />
      </b-form-group>
    </div>
    <div id="get-adresse">
      <div :key="index" v-for="(data, index) in find_data">
        <p
          v-if="type == 2"
          @click="get_adresse_good(adresse + data.Description)"
        >
          {{ adresse }} , {{ data.Description }}
        </p>
        <p v-if="type == 1" @click="get_adresse(data)">
          {{ data.Description }}
        </p>
      </div>
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

export default {
  components: {
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
    BForm,
    BLink,
  },
  data() {
    return {
      loading: false,
      adresse: "",
      find_data: "",
      type: 1,
      url: "/postescanada-canadapost/find-data-adresse?type=1&searchTerm=",
      url2: "/postescanada-canadapost/find-data-adresse?type=2&searchTerm=",
    };
  },
  props: {
    change: Function,
  },
  methods: {
    change_adresse() {
      console.log("change adresse");
      this.$http
        .get(this.url + "" + this.adresse)
        .then((res) => {
          this.type = 1;
          this.find_data = res.data;
        })
        .catch((errors) => {
          //errors
        });
    },
    change_adresse_2(adresse) {
      console.log("change adresse 2");
      this.find_data = "";
      this.$http
        .get(this.url2 + "" + this.adresse + "&LastId=" + adresse.Id)
        .then((res) => {
          this.type = 2;
          this.find_data = res.data;
        })
        .catch((errors) => {
          //errors
        });
    },

    get_adresse(adresse) {
      this.get_adresse_good(adresse.Description);
      if (adresse && adresse.Next == "Retrieve") {
        this.change_adresse_2(adresse);
      } else if (adresse && adresse.Next == "Retrieve") {
        this.get_adresse_good(adresse.Description);
      }
    },

    get_adresse_good(adresse) {
      this.find_data = "";
      this.adresse = adresse;
      this.change(adresse);
    },
    change(adresse) {
      // ...
      this.$emit("change", adresse);
    },
  },
};
</script>

<style></style>
