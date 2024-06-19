<template>
  <ul>
    <p class="menu-libelle-header">MENU</p>
    <component
      :is="resolveNavItemComponent(item)"
      v-for="item in items"
      :key="item.header || item.title"
      :item="item"
    />
    <br />

    <b-button
      class="ml-25"
      variant="warning"
      href="https://monadresseplus.ca/comment-ca-marche/"
      target="_blank"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-question-lg"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M4.475 5.458c-.284 0-.514-.237-.47-.517C4.28 3.24 5.576 2 7.825 2c2.25 0 3.767 1.36 3.767 3.215 0 1.344-.665 2.288-1.79 2.973-1.1.659-1.414 1.118-1.414 2.01v.03a.5.5 0 0 1-.5.5h-.77a.5.5 0 0 1-.5-.495l-.003-.2c-.043-1.221.477-2.001 1.645-2.712 1.03-.632 1.397-1.135 1.397-2.028 0-.979-.758-1.698-1.926-1.698-1.009 0-1.71.529-1.938 1.402-.066.254-.278.461-.54.461h-.777ZM7.496 14c.622 0 1.095-.474 1.095-1.09 0-.618-.473-1.092-1.095-1.092-.606 0-1.087.474-1.087 1.091S6.89 14 7.496 14"
        />
      </svg>
      Comment ca marche ?</b-button
    >

    <b-button
      type="submit"
      variant="primary"
      class="logout-button"
      @click="logout"
    >
      Déconnexion
    </b-button>
  </ul>
</template>

<script>
import { BButton, BLink } from "bootstrap-vue";
import { resolveVerticalNavMenuItemComponent as resolveNavItemComponent } from "@core/layouts/utils";
import { provide, ref } from "@vue/composition-api";
import VerticalNavMenuHeader from "../vertical-nav-menu-header";
import VerticalNavMenuLink from "../vertical-nav-menu-link/VerticalNavMenuLink.vue";
import VerticalNavMenuGroup from "../vertical-nav-menu-group/VerticalNavMenuGroup.vue";
import auth from "@/helpers/auth";
import router from "@/router/index"; // Ajoutez le chemin correct

export default {
  watch: {},
  components: {
    BButton,
    BLink,
    VerticalNavMenuHeader,
    VerticalNavMenuLink,
    VerticalNavMenuGroup,
  },
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  setup() {
    provide("openGroups", ref([]));

    return {
      resolveNavItemComponent,
    };
  },
  methods: {
    logout() {
      console.log("logout");
      auth.logout();
      router.push("/login");
    },
  },
};
</script>
<style>
/* Ajoutez ces styles CSS à votre fichier */
.menu-container {
  margin-bottom: 60px; /* Espace en bas pour le bouton de déconnexion */
}

.logout-button {
  position: fixed;
  bottom: 20px; /* Ajustez la distance du bas selon vos besoins */
  left: 50%; /* Centre le bouton horizontalement */
  transform: translateX(-50%); /* Centre le bouton horizontalement */
}
</style>
