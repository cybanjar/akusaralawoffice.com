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

    <section>
      <div class="row q-ma-lg">
        <div class="col-12 col-md-3 col-xs-12">
          <div class="text-h4 text-uppercase">About Us</div>
          <q-separator class="separators q-my-sm" color="warning" />
        </div>
        <div class="col-12 col-md-9 col-xs-12">
          <p class="text-grey q-mx-xl">
            Partners AKSR, domiciled in Jakarta, is one of Indonesia’s premier
            law firms. It has undergone a number of name changes prior to being
            in its present structure of Akusara.
          </p>
          <p class="text-grey q-mx-xl">
            AKSR’s lawyers have advised industry-leading companies and global
            financial institutions on their most challenging legal and business
            matters. AKSR ranks among Indonesia’s most prominent law firms
            across the entire range of its practices, serving a wide range of
            areas, from banking and finance, capital markets, mergers and
            acquisitions, commercial litigation, insolvency and restructuring,
            infrastructure, to private equity, investment including green
            investment, intellectual property, energy and mining as well as oil
            and gas.
          </p>
          <p class="text-grey q-mx-xl">
            Our objective is to give our clients an innovative and realistic
            legal solution which fulfills their goals effectively. We begin by
            searching for underlying regulations and possible creative
            approaches that serve the client’s interest. Then we set and tailor
            our strategy, supported by our in-depth knowledge of Indonesian law,
            to achieve all clients’ objectives.
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

  setup(props, { root }) {
    const state = reactive({
      slide: 1,
      autoplay: true,
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