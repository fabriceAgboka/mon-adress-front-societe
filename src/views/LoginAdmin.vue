<template>
  <div class="auth-wrapper auth-v2">
    <b-row class="auth-inner m-0">
      <!-- Left Text-->
      <b-col lg="8" class="d-none d-lg-flex align-items-center p-5">
        <div
          class="w-100 d-lg-flex align-items-center justify-content-center px-5"
        >
          <b-img fluid :src="imgUrl" alt="Login V2" />
        </div>
      </b-col>
      <!-- /Left Text-->

      <!-- Login-->
      <b-col lg="4" class="d-flex align-items-center auth-bg px-2 p-lg-5">
        <b-col sm="8" md="6" lg="12" class="px-xl-2 mx-auto">
          <b-card-title title-tag="h2" class="font-weight-bold mb-1">
            Bienvenu sur MON ADRESSE
          </b-card-title>
          <!-- form -->
          <validation-observer ref="loginValidation">
            <b-form class="auth-login-form mt-2" @submit.prevent>
              <b-form-group label="Email" label-for="login-email">
                <b-form-input
                  id="email"
                  v-model="form.email"
                  name="email"
                  placeholder="john@example.com"
                />
                <small v-if="errors.message" class="text-danger">{{
                  errors.message[0]
                }}</small>
                <small v-if="errors.email" class="text-danger">{{
                  errors.email[0]
                }}</small>
              </b-form-group>

              <!-- forgot password -->
              <b-form-group>
                <div class="d-flex justify-content-between">
                  <label for="login-password">Mots de passe admin</label>
                </div>
                <b-form-input
                  id="password"
                  type="password"
                  v-model="form.password"
                  class="form-control-merge"
                  name="password"
                  placeholder="············"
                />
                <small v-if="errors.password" class="text-danger">{{
                  errors.password[0]
                }}</small>
                <small v-if="errors_message" class="text-danger">{{
                  errors_message
                }}</small>
              </b-form-group>

              <!-- email société admin -->
              <b-form-group label="Email de la société" label-for="login-email">
                <b-form-input
                  id="email"
                  v-model="form.email_societe"
                  name="email"
                  placeholder="societe@example.com"
                />
                <small v-if="errors.email_societe" class="text-danger">{{
                  errors.email_societe[0]
                }}</small>
              </b-form-group>
              <!-- submit buttons -->
              <b-button
                type="submit"
                :disabled="disabled"
                variant="primary"
                block
                @click="login"
                >Connexion</b-button
              >
            </b-form>
          </validation-observer>
        </b-col>
      </b-col>
      <!-- /Login-->
    </b-row>
  </div>
</template>

<script>
/* eslint-disable global-require */
import { ValidationObserver } from "vee-validate";
import {
  BRow,
  BCol,
  BFormGroup,
  BFormInput,
  BCardText,
  BCardTitle,
  BImg,
  BForm,
  BButton,
  BLink,
} from "bootstrap-vue";
import { required, email } from "@validations";
import { togglePasswordVisibility } from "@core/mixins/ui/forms";
import store from "@/store/index";
import auth from "@/helpers/auth";
import ToastificationContent from "@core/components/toastification/ToastificationContent.vue";

export default {
  components: {
    BRow,
    BCol,
    BFormGroup,
    BFormInput,
    BCardText,
    BCardTitle,
    BImg,
    BForm,
    BButton,
    ValidationObserver,
    BLink,
  },
  mixins: [togglePasswordVisibility],
  data() {
    return {
      form: {
        password: "password",
        email: "",
        email_societe: "",
        status: 1,
      },

      sideImg: require("@/assets/images/pages/login-v2.svg"),
      // validation rulesimport store from '@/store/index'
      required,
      email,

      app: {
        api_url: "/login/admin-societe",
      },
      errors: {},
      disabled: false,
      errors_message: "",
      hidden_form: false,
    };
  },
  computed: {
    passwordToggleIcon() {
      return this.passwordFieldType === "password" ? "EyeIcon" : "EyeOffIcon";
    },
    imgUrl() {
      if (store.state.appConfig.layout.skin === "dark") {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.sideImg = require("@/assets/images/pages/login-v2-dark.svg");
        return this.sideImg;
      }
      return this.sideImg;
    },
  },
  mounted() {
    // Appeler la méthode pour extraire les valeurs des paramètres de l'URL
    this.extractURLParams();
  },
  methods: {
    extractURLParams() {
      // Obtenez les paramètres de l'URL
      const urlParams = new URLSearchParams(window.location.search);
      // Obtenez la valeur du paramètre 'email' et 'societe'
      const email = urlParams.get("email");
      const email_societe = urlParams.get("societe");
      console.log("extractURLParams", urlParams, email, email_societe);
      this.hidden_form = false;
      if (email) {
        this.form.email = email;
        this.hidden_form = true;
      }
      if (email_societe) {
        this.form.email_societe = email_societe;
        this.hidden_form = true;
      }

      this.form.password =
        "$mkdf23445*;s,fd123,ndjkeSDERTCLCK))pepoéékler_(uçlksldjksdn,sdkjsdjkfff)";

      if (this.form.email && this.form.email_societe && this.form.password) {
        this.login();
      }
    },

    login() {
      console.log("login admin-societe");
      this.disabled = true;
      this.$http
        .post("/login/admin-societe", this.form)
        .then((response) => {
          console.log("done");
          let donnee = response.data;

          if (donnee.user.type == "societe") {
            auth.authenticate(donnee);

            this.$toast({
              component: ToastificationContent,
              props: {
                title: "Bienvenue sur MON ADRESSE " + donnee.user.prenom + "!",
                icon: "UserIcon",
                variant: "success",
              },
            });

            this.$router.push("/");
            window.location.href = "/";
          } else {
            this.disabled = false;
            this.errors_message = "Parametre invalide";
          }
        })
        .catch((errors) => {
          this.disabled = false;
          console.log("error", errors);
          this.errors = errors.response.data.errors;
        });
    },
  },
};
</script>

<style lang="scss">
@import "@core/scss/vue/pages/page-auth.scss";
</style>
