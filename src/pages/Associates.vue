<template>
  <q-page>
    <div class="">
      <q-img
        class="img-partner"
        src="https://source.unsplash.com/1600x900/?office"
      />
      <div class="row justify-center q-my-lg">
        <div class="col">
          <div class="text-h5 text-center text-uppercase">Associated</div>
          <hr class="hr-style" />
        </div>
      </div>

      <div class="row q-gutter-sm">
        <div class="col-md-4 offset-md-2">
          <q-card>
            <q-img src="https://source.unsplash.com/1600x900/?people" basic>
              <div class="absolute-bottom text-subtitle2 text-center">
                <q-btn to="contact" flat label="Djengiskan Manullang" />
              </div>
            </q-img>
          </q-card>
        </div>
        <div class="col-md-4">
          <q-card>
            <q-img src="https://source.unsplash.com/1600x900/?man" basic>
              <div class="absolute-bottom text-subtitle2 text-center">
                <q-btn to="contact" flat label="Agyl Chandra Kusuma" />
              </div>
            </q-img>
          </q-card>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import {
  defineComponent,
  reactive,
  toRefs,
  onMounted,
} from "@vue/composition-api";
import { Notify } from "quasar";

export default defineComponent({
  name: "PagePartners",

  setup(props, { root: { $router } }) {
    const state = reactive({});

    onMounted(async () => {
      console.log("mounted!");
    });

    return {
      ...toRefs(state),
    };
  },
});
</script>

<style lang="scss" scoped>
</style>