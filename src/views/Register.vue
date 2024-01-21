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
          <b-card-text class="mb-2">
            Formulaire d'inscription de ma société
          </b-card-text>

          <!-- form -->
          <validation-observer ref="loginValidation">
            <b-form class="auth-login-form mt-2" @submit.prevent>
              <!-- Société -->
              <div v-if="step == 1">
                <p class="text-primary">Information de la société</p>
                <small v-if="error_data" class="text-danger">
                  Erreur lors de la validation du formulaire. Veuillez remplir
                  tous les champs obligatoire</small
                >
                <b-form-group label="Nom de la société" label-for="login-name">
                  <b-form-input
                    id="name"
                    v-model="form.societe_name"
                    name="name"
                    placeholder="AMAZONE"
                  />
                  <small v-if="errors.societe_name" class="text-danger">{{
                    errors.societe_name[0]
                  }}</small>
                </b-form-group>

                <b-form-group
                  label="Email de la société"
                  label-for="login-email"
                >
                  <b-form-input
                    id="email"
                    v-model="form.societe_email"
                    name="email"
                    placeholder="amazone@gmail.com"
                  />
                  <small v-if="errors.societe_email" class="text-danger">{{
                    errors.societe_email[0]
                  }}</small>
                </b-form-group>

                <b-form-group
                  label="Téléphone de la société"
                  label-for="login-phone"
                >
                  <b-form-input
                    id="phone"
                    v-model="form.societe_phone"
                    name="phone"
                    placeholder="+1 30 40 56 40"
                  />
                  <small v-if="errors.societe_phone" class="text-danger">{{
                    errors.societe_phone[0]
                  }}</small>
                </b-form-group>

                <b-form-group
                  label="Catégories de la société"
                  label-for="login-categorie"
                >
                  <v-select
                    v-model="form.societe_categories_data"
                    :options="categories"
                    multiple
                    taggable
                    push-tags
                    placeholder="Choisir"
                    label="name"
                  />
                  <small
                    v-if="errors.societe_categories_data"
                    class="text-danger"
                    >{{ errors.societe_categories_data[0] }}</small
                  >
                </b-form-group>
                <b-button
                  type="submit"
                  :disabled="disabled"
                  variant="primary"
                  block
                  @click="step = 2"
                  >Suivant</b-button
                >
              </div>

              <!-- Utilisateur -->
              <div v-if="step == 2">
                <p class="text-primary">Information personnelles</p>
                <small v-if="error_data" class="text-danger">
                  Erreur lors de la validation du formulaire. Veuillez remplir
                  tous les champs obligatoire</small
                >
                <b-form-group
                  label="Nom de l'administrateur"
                  label-for="login-nom"
                >
                  <b-form-input
                    id="nom"
                    v-model="form.admin_nom"
                    name="nom"
                    placeholder="DOE"
                  />
                  <small v-if="errors.admin_nom" class="text-danger">{{
                    errors.admin_nom[0]
                  }}</small>
                </b-form-group>

                <b-form-group
                  label="Prénom de l'administrateur"
                  label-for="login-prenom"
                >
                  <b-form-input
                    id="prenom"
                    v-model="form.admin_prenom"
                    name="prenom"
                    placeholder="John"
                  />
                  <small v-if="errors.admin_prenom" class="text-danger">{{
                    errors.admin_prenom[0]
                  }}</small>
                </b-form-group>

                <b-form-group
                  label="Email de l'administrateur"
                  label-for="login-email"
                >
                  <b-form-input
                    id="email"
                    v-model="form.admin_email"
                    name="email"
                    placeholder="DOE"
                  />
                  <small v-if="errors.admin_email" class="text-danger">{{
                    errors.admin_email[0]
                  }}</small>
                </b-form-group>

                <!-- forgot password -->
                <b-form-group>
                  <div class="d-flex justify-content-between">
                    <label for="login-password">Mots de passe</label>
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
                </b-form-group>

                <b-form-group>
                  <div class="d-flex justify-content-between">
                    <label for="login-password"
                      >Confirmation du mots de passe</label
                    >
                  </div>
                  <b-form-input
                    id="password_confirmation"
                    type="password"
                    v-model="form.password_confirmation"
                    class="form-control-merge"
                    name="password_confirmation"
                    placeholder="············"
                  />
                  <small
                    v-if="errors.password_confirmation"
                    class="text-danger"
                    >{{ errors.password_confirmation[0] }}</small
                  >
                </b-form-group>

                <b-button
                  type="submit"
                  :disabled="disabled"
                  variant="primary"
                  block
                  @click="step = 3"
                  >Suivant</b-button
                >
                <b-button
                  type="submit"
                  :disabled="disabled"
                  variant="white"
                  block
                  @click="step = 1"
                  >Précédant</b-button
                >
                <div class="mb-2"></div>
              </div>

              <div v-if="step == 3">
                <p class="text-primary">Adresse complette de la société</p>

                <small v-if="error_data" class="text-danger">
                  Erreur lors de la validation du formulaire. Veuillez remplir
                  tous les champs obligatoire</small
                >
                <addresse-form @change="set_adresse()" />
                <pre>add : {{ form.adresse }}</pre>
                <!-- <b-form-group
                  label="Numéro civique(Optionnel)"
                  label-for="login-numero"
                >
                  <b-form-input
                    id="numero"
                    v-model="form.adresse_numero"
                    name="numero"
                    placeholder="Numéro civique"
                  />
                  <small v-if="errors.adresse_numero" class="text-danger">{{
                    errors.adresse_numero[0]
                  }}</small>
                </b-form-group>

                <b-form-group label="Rue(Optionnel)" label-for="login-rue">
                  <b-form-input
                    id="rue"
                    v-model="form.adresse_rue"
                    name="rue"
                    placeholder="Rue"
                  />
                  <small v-if="errors.adresse_ville" class="text-danger">{{
                    errors.adresse_ville[0]
                  }}</small>
                </b-form-group>

                <b-form-group label="Ville" label-for="login-ville">
                  <b-form-input
                    id="ville"
                    v-model="form.adresse_ville"
                    name="ville"
                    placeholder="Ville"
                  />
                  <small v-if="errors.adresse_ville" class="text-danger">{{
                    errors.adresse_ville[0]
                  }}</small>
                </b-form-group>

                <b-form-group label="Province" label-for="login-province">
                  <b-form-input
                    id="province"
                    v-model="form.adresse_province"
                    name="province"
                    placeholder="Province"
                  />
                  <small v-if="errors.adresse_province" class="text-danger">{{
                    errors.adresse_province[0]
                  }}</small>
                </b-form-group>

                <b-form-group label="Code postal" label-for="login-bp">
                  <b-form-input
                    id="bp"
                    v-model="form.adresse_bp"
                    name="bp"
                    placeholder="Code postal"
                  />
                  <small v-if="errors.adresse_bp" class="text-danger">{{
                    errors.adresse_bp[0]
                  }}</small>
                </b-form-group> -->

                <!-- submit buttons -->
                <b-button
                  type="submit"
                  :disabled="disabled"
                  variant="primary"
                  block
                  @click="register"
                  >S'inscrire</b-button
                >
                <b-button
                  type="submit"
                  :disabled="disabled"
                  variant="white"
                  block
                  @click="step = 2"
                  >Précédant</b-button
                >
                <div class="mb-2"></div>
              </div>

              <div v-if="step == 4">
                <p style="font-size: 16px; color: #014612; font-weight: bold">
                  Félicitation votre inscription est valide. Veuillez valider
                  votre inscription via otp
                </p>

                <b-form-group label="Code OTP" label-for="login-otp">
                  <b-form-input
                    id="otp"
                    v-model="form.code"
                    name="otp"
                    placeholder="Code OTP"
                  />
                  <small v-if="errors.code" class="text-danger">{{
                    errors.code[0]
                  }}</small>
                </b-form-group>

                <b-button
                  type="submit"
                  :disabled="disabled2"
                  variant="primary"
                  block
                  @click="register_otp"
                  >Valider code</b-button
                >
              </div>
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
} from "bootstrap-vue";
import { required, email } from "@validations";
import { togglePasswordVisibility } from "@core/mixins/ui/forms";
import store from "@/store/index";
import auth from "@/helpers/auth";
import AddresseForm from "./components/adresse.vue";
import ToastificationContent from "@core/components/toastification/ToastificationContent.vue";
import vSelect from "vue-select";

export default {
  components: {
    vSelect,
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
    AddresseForm,
  },
  mixins: [togglePasswordVisibility],
  data() {
    return {
      step: 1,
      form: {
        admin_nom: "",
        admin_prenom: "",
        admin_email: "",
        password: "",
        password_confirmation: "",

        societe_name: "",
        societe_email: "",
        societe_phone: "",
        societe_categories_data: "",
        societe_categories: [],
        status: "",

        adresse: "",
        adresse_numero: "",
        adresse_rue: "",
        adresse_ville: "",
        adresse_province: "",
        adresse_bp: "",

        code: "",
      },
      categories: "",
      loading: false,

      sideImg: require("@/assets/images/pages/login-v2.svg"),
      // validation rulesimport store from '@/store/index'
      required,
      email,

      app: {
        api_url: "/login",
      },
      errors: {},
      disabled: false,
      disabled2: false,
      errors_message: "",
      error_data: false,
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
    // Set the initial number of items
    this.index();
  },
  methods: {
    getSelectedCategoryIds() {
      if (
        this.form.societe_categories_data &&
        this.form.societe_categories_data.length > 0
      ) {
        this.form.societe_categories_data.forEach((category) => {
          this.form.societe_categories.push(category.id);
        });
      }
    },
    async register() {
      this.getSelectedCategoryIds();

      console.log("register");
      this.disabled = true;
      this.error_data = false;
      await this.$http
        .post("/societes/register", this.form)
        .then((response) => {
          console.log("done");
          this.step = 4;
          this.$toast({
            component: ToastificationContent,
            props: {
              title: "Inscription réussie!",
              icon: "UserIcon",
              variant: "success",
            },
          });
        })
        .catch((errors) => {
          this.disabled = false;
          console.log("error", errors);
          this.errors = errors.response.data.errors;
          this.error_data = true;
        });
    },

    async register_otp() {
      console.log("register_otp");
      this.disabled2 = true;
      this.error_data = false;
      await this.$http
        .post("/verify-otp", this.form)
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
          }
        })
        .catch((errors) => {
          this.disabled2 = false;
          console.log("error", errors);
          this.errors = errors.response.data.errors;
          this.error_data = true;
        });
    },

    index() {
      this.loading = false;
      this.$http
        .get("/categories")
        .then((res) => {
          this.categories = res.data;

          this.loading = true;
        })
        .catch((errors) => {
          //errors
        });
    },

    set_adresse(adresse) {
      this.form.adresse = adresse;
    },
  },
};
</script>

<style lang="scss">
@import "@core/scss/vue/pages/page-auth.scss";
</style>
