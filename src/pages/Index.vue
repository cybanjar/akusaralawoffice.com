<template>
  <q-page>
    <q-carousel
      swipeable
      animated
      v-model="slide"
      :autoplay="autoplay"
      arrows
      navigation
      infinite
    >
      <q-carousel-slide
        :name="1"
        img-src="https://source.unsplash.com/1600x900/?office"
      />
      <q-carousel-slide
        :name="2"
        img-src="https://source.unsplash.com/1600x900/?nature"
      />
      <q-carousel-slide
        :name="3"
        img-src="https://source.unsplash.com/1600x900/?architecture"
      />
      <q-carousel-slide
        :name="4"
        img-src="https://source.unsplash.com/1600x900/?business-work"
      />
    </q-carousel>

    
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
import dataJson from "../assets/data/data.json";

export default defineComponent({
  name: "PageFood",

  setup(props, { root: { $router } }) {
    const state = reactive({
      slide: 1,
      autoplay: true,
      dataPrepare: null,
    });

    onMounted(async () => {
      // Notify.create({
      //   type: "info",
      //   message: "Mounted!",
      // });

      const data = dataJson.about;
      state.dataPrepare = data[0];
      console.log("data", data);
      // state.dataPrepare = dataJson;
    });

    return {
      ...toRefs(state),
    };
  },
});
</script>

<style lang="scss" scoped>
</style>