<template>
  <q-page>
   <q-img
      class="img-partner"
      src="https://source.unsplash.com/1600x900/?office"
    />
    <section id="legalService">
      <div class="row justify-center q-my-lg">
        <div class="col">
          <div class="text-h5 text-center text-uppercase">Publications</div>
          <hr class="hr-style" />
          <p class="text-grey text-center q-my-md">
            We offer legal services for a broad array of legal and business
            matters. Please contact us here to obtain further information.
          </p>
        </div>
      </div>
    </section>
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
    const state = reactive({
    });

    onMounted(async () => {
      console.log('mounted!');
    });

    return {
      ...toRefs(state),
    };
  },
});
</script>

<style lang="scss" scoped>
</style>