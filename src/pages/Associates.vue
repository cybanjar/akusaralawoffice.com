<template>
  <q-page>
    <h5 class="text-center">Associates</h5>
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