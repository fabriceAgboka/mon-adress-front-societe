<template>
  <div>
    <h2 style="color: black">Liste des administrateurs</h2>
    <b-button
      v-ripple.400="'rgba(113, 102, 240, 0.15)'"
      v-b-modal.add-admin-modal
      variant="outline-primary"
    >
      Ajouter
    </b-button>

    <b-modal
      id="add-admin-modal"
      cancel-variant="outline-danger"
      ok-title="Ajouter"
      cancel-title="Fermer"
      centered
      title="Nouvel administrateur"
      hide-footer
    >
      <b-form>
        <b-form-group>
          <label for="email">Email:</label>
          <b-form-input
            id="email"
            type="email"
            v-model="entity.email"
            placeholder="Addresse email de l'utilisateur"
          />
          <small v-if="errors.email" class="text-danger">{{
            errors.email[0]
          }}</small>
        </b-form-group>

        <div class="demo-inline-spacing justify-content-end" :align="'right'">
          <b-button
            @click="closed()"
            :disabled="disabled"
            :align="'right'"
            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
            variant="outline-primary"
          >
            Quitter
          </b-button>

          <b-button
            :align="'right'"
            :disabled="disabled"
            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
            @click="store()"
            variant="primary"
          >
            Valider
          </b-button>
        </div>
      </b-form>
    </b-modal>

    <div class="card mt-2">
      <div class="m-2" v-if="loading == true">
        <b-row>
          <b-col md="2" sm="4" class="my-1">
            <b-form-group class="mb-0">
              <label class="d-inline-block text-sm-left mr-50">Par page</label>
              <b-form-select
                id="perPageSelect"
                v-model="perPage"
                size="sm"
                :options="pageOptions"
                class="w-50"
              />
            </b-form-group>
          </b-col>
          <b-col md="4" sm="8" class="my-1">
            <b-form-group
              label="Trier"
              label-cols-sm="3"
              label-align-sm="right"
              label-size="sm"
              label-for="sortBySelect"
              class="mb-0"
            >
              <b-input-group size="sm">
                <b-form-select
                  id="sortBySelect"
                  v-model="sortBy"
                  :options="sortOptions"
                  class="w-75"
                >
                  <template v-slot:first>
                    <option value="">-- Aucun --</option>
                  </template>
                </b-form-select>
                <b-form-select
                  v-model="sortDesc"
                  size="sm"
                  :disabled="!sortBy"
                  class="w-25"
                >
                  <option :value="false">Croissant</option>
                  <option :value="true">Décroussant</option>
                </b-form-select>
              </b-input-group>
            </b-form-group>
          </b-col>
          <b-col md="6" class="my-1">
            <b-form-group
              label="Filtrer"
              label-cols-sm="3"
              label-align-sm="right"
              label-size="sm"
              label-for="filterInput"
              class="mb-0"
            >
              <b-input-group size="sm">
                <b-form-input
                  id="filterInput"
                  v-model="filter"
                  type="search"
                  placeholder="Zone de recherche"
                />
                <b-input-group-append>
                  <b-button :disabled="!filter" @click="filter = ''">
                    Effacer
                  </b-button>
                </b-input-group-append>
              </b-input-group>
            </b-form-group>
          </b-col>

          <b-col cols="12">
            <b-table
              striped
              hover
              responsive
              :per-page="perPage"
              :current-page="currentPage"
              :items="items"
              :fields="fields"
              :sort-by.sync="sortBy"
              :sort-desc.sync="sortDesc"
              :sort-direction="sortDirection"
              :filter="filter"
              :filter-included-fields="filterOn"
              @filtered="onFiltered"
            >
              <template #cell(created_at)="data">
                {{ format_date(data.value) }}
              </template>

              <template #cell(id)="data">
                <span>
                  <span>
                    <b-dropdown
                      variant="link"
                      toggle-class="text-decoration-none"
                      no-caret
                    >
                      <template v-slot:button-content>
                        <feather-icon
                          icon="MoreVerticalIcon"
                          size="16"
                          class="text-body align-middle mr-25"
                        />
                      </template>
                      <b-dropdown-item @click="destroy(data.item.id)">
                        <feather-icon
                          icon="CloseIcon"
                          class="mr-50 text-success"
                        />
                        <span>Retirer</span>
                      </b-dropdown-item>
                    </b-dropdown>
                  </span>
                </span>
              </template>
            </b-table>
          </b-col>

          <b-col cols="12">
            <b-pagination
              v-model="currentPage"
              :total-rows="totalRows"
              :per-page="perPage"
              align="right"
              size="sm"
              class="my-0"
            />
          </b-col>
        </b-row>
      </div>
    </div>
  </div>
</template>

<script>
import {
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
} from "bootstrap-vue";
import moment from "moment";
import Swal from "sweetalert2";
import ToastificationContent from "@core/components/toastification/ToastificationContent.vue";
import vSelect from "vue-select";
import Ripple from "vue-ripple-directive";

export default {
  components: {
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
    vSelect,
    Ripple,
  },
  data() {
    return {
      disabled: false,
      errors: {},
      entity: {
        email: "",
      },
      loading: false,
      perPage: 10,
      pageOptions: [3, 5, 10, 30],
      totalRows: 1,
      currentPage: 1,
      sortBy: "",
      sortDesc: false,
      sortDirection: "asc",
      filter: null,
      filterOn: [],
      infoModal: {
        id: "info-modal",
        title: "",
        content: "",
      },
      fields: [
        {
          key: "fullname",
          label: "Nom complet",
          sortable: true,
        },
        {
          key: "email",
          label: "Email",
          sortable: true,
        },
        {
          key: "telephone",
          label: "Telephone",
          sortable: true,
        },
        {
          key: "created_at",
          label: "Ajouter le",
          sortable: true,
        },
        {
          key: "id",
          label: "Actions",
          sortable: true,
        },
      ],
    };
  },
  computed: {
    sortOptions() {
      // Create an options list from our fields
      return this.fields
        .filter((f) => f.sortable)
        .map((f) => ({ text: f.label, value: f.key }));
    },
  },
  mounted() {
    // Set the initial number of items
    this.index();
  },
  directives: {
    "b-modal": VBModal,
    Ripple,
  },
  methods: {
    info(item, index, button) {
      this.infoModal.title = `Row index: ${index}`;
      this.infoModal.content = JSON.stringify(item, null, 2);
      this.$root.$emit("bv::show::modal", this.infoModal.id, button);
    },
    resetInfoModal() {
      this.infoModal.title = "";
      this.infoModal.content = "";
    },
    onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    },

    index() {
      this.loading = false;
      let form = {
        status: 3,
      };
      this.$http
        .get("/societe/admins", form)
        .then((res) => {
          this.items = res.data;
          this.totalRows = this.items.length;

          this.loading = true;
          this.init_page = true;
          this.current_page = page;
        })
        .catch((errors) => {
          //errors
        });
    },
    async destroy(id) {
      const result = await Swal.fire({
        title: "Êtes-vous sûr de vouloir retirer l'utilisateur ?",
        text: "Cette action est irréversible.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Oui, retirer!",
        cancelButtonText: "Annuler",
        reverseButtons: true, // Inverse l'ordre des boutons
        customClass: {
          confirmButton: "btn btn-primary",
          cancelButton: "btn btn-outline-danger ml-1 mr-1",
        },
        buttonsStyling: false,
      });

      if (result.isConfirmed) {
        this.$http
          .delete("/societe/admins/" + id)
          .then((res) => {
            this.index();
            this.$toast({
              component: ToastificationContent,
              props: {
                title: "Suppression réussie!",
                icon: "UserIcon",
                variant: "success",
              },
            });
          })
          .catch((errors) => {
            //errors
          });
      } else {
        // code
      }
    },

    closed() {
      this.disabled = false;
      this.$bvModal.hide("add-admin-modal");
    },

    store() {
      this.disabled = true;
      console.log("store");
      this.$http
        .post("societe/admins", this.entity)
        .then((res) => {
          this.closed();
          this.index();
          this.$toast({
            component: ToastificationContent,
            props: {
              title: "Ajout réussie!",
              icon: "UserIcon",
              variant: "success",
            },
          });
        })
        .catch((errors) => {
          this.disabled = false;
          this.errors = errors.response.data.errors;
          console.log("error", errors);
        });
    },

    format_date(date) {
      return moment(date).locale("fr").format("LL");
    },
  },
};
</script>
