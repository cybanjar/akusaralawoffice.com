<template>
  <q-layout view="lHh Lpr lFf">
    <q-header unelevated>
      <q-toolbar>
        <q-btn flat>
          <img class="w-32" src="../assets/img/logo2.jpeg" />
        </q-btn>

        <q-toolbar-title class="text-center mobile-drawer-none">
          <div class="text-white text-bold">
            <q-btn to="/" flat label="Home" />
            <q-btn to="/about" flat label="About Us" />
            <q-btn-dropdown flat label="Our Lawyers">
              <q-list>
                <q-item to="/partners" clickable v-close-popup>
                  <q-item-section>
                    <q-item-label>Partners</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item to="/associates" clickable v-close-popup>
                  <q-item-section>
                    <q-item-label>Associates</q-item-label>
                  </q-item-section>
                </q-item>

              </q-list>
            </q-btn-dropdown>
            <q-btn-dropdown flat label="Our Services">
              <q-list>
                <q-item to="/legal-service" clickable v-close-popup>
                  <q-item-section>
                    <q-item-label>Legal Service</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item to="/pro-bonitas" clickable v-close-popup>
                  <q-item-section>
                    <q-item-label>Pro Bonitas</q-item-label>
                  </q-item-section>
                </q-item>

              </q-list>
            </q-btn-dropdown>
            <q-btn-dropdown flat label="Publication & Updates">
              <q-list>
                <q-item to="/publications" clickable v-close-popup>
                  <q-item-section>
                    <q-item-label>Publication</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item to="/updates" clickable v-close-popup>
                  <q-item-section>
                    <q-item-label>Updates</q-item-label>
                  </q-item-section>
                </q-item>

              </q-list>
            </q-btn-dropdown>
            <q-btn-dropdown flat label="Contact Us">
              <q-list>
                <q-item to="/contact" clickable v-close-popup>
                  <q-item-section>
                    <q-item-label>Contact</q-item-label>
                  </q-item-section>
                </q-item>

                <q-item to="/career" clickable v-close-popup>
                  <q-item-section>
                    <q-item-label>Carrer</q-item-label>
                  </q-item-section>
                </q-item>

              </q-list>
            </q-btn-dropdown>
          </div>
        </q-toolbar-title>

        <!-- {{ $q.version }} -->
        <div class="mobile-drawer">
          <q-btn flat @click="drawerRight = !drawerRight" round dense icon="menu" />
        </div>
      </q-toolbar>
    </q-header>

    <q-footer reveal unelevated>
      <q-toolbar>
        <q-toolbar-title>
          <div class="text-white q-pa-md">
            <div class="row">
              <div class="col-md-3 col-sm-4 col-xs-12">
                <div>
                  <q-btn flat>
                    <img class="w-32" src="../assets/img/logo2.jpeg" />
                  </q-btn>
                </div>
                <div>
                  <a class="alink" href="mailto:hi@akusaralawoffice.com">
                    <q-btn color="white" icon="mail_outline" class="text-lowercase text-weight-regular" flat label="hi@akusaralawoffice.com" />
                  </a>
                </div>
                <div>
                  <a class="alink" href="tel:+6287830120049">
                    <q-btn color="white" icon="phone" class="text-lowercase text-weight-regular" flat label="+6287830120049" />
                  </a>
                </div>
              </div>
              <div class="col-md-3 col-sm-4 col-xs-6">
                <q-list dense>
                  <q-item-label header class="text-white text-weight-bold">Response</q-item-label>

                  <q-item v-ripple>
                    <q-item-section>
                      <q-item-label caption>
                        <div class="text-white">
                          How it work
                        </div> 
                      </q-item-label>
                    </q-item-section>
                  </q-item>

                </q-list>
              </div>
              <div class="col-md-3 col-sm-4 col-xs-6">
                <q-list dense>
                  <q-item-label header class="text-white text-weight-bold">About</q-item-label>

                  <q-item v-ripple>
                    <q-item-section>
                      <q-item-label caption>
                        <div class="text-white">
                          Jobs
                        </div> 
                      </q-item-label>
                      <q-item-label caption>
                        <div class="text-white">
                          Testimoni
                        </div> 
                      </q-item-label>
                    </q-item-section>
                  </q-item>

                </q-list>
              </div>
              <div class="col-md-3 col-sm-4 col-xs-12">
                <q-list dense>
                  <q-item-label header class="text-white text-weight-bold">Follow Me</q-item-label>
                </q-list>
                <q-btn flat round icon="facebook" />

              </div>
            </div>
            <div class="row items-center text-center">
              <div class="col">
                <div class="text-weight-light text-body1" style="opacity:.4">
                  Akusaralaw © 2021
                </div>
              </div>
            </div>
          </div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>

    <q-drawer
      side="right"
      v-model="drawerRight"
      show-if-above
      :width="200"
      :breakpoint="1920"
    >
      <q-scroll-area class="fit">
        <q-list dense padding class="menu-list">
          <q-item to="/" clickable v-ripple>
            <q-item-section>
              <q-item-label> Home </q-item-label>
            </q-item-section>
          </q-item>

          <q-item to="/about" clickable v-ripple>
            <q-item-section>
              <q-item-label> About Us </q-item-label>
            </q-item-section>
          </q-item>

          <q-item to="/contact" clickable v-ripple>
            <q-item-section>
              <q-item-label> Contact Us </q-item-label>
            </q-item-section>
          </q-item>

          <q-item to="/associates" clickable v-close-popup>
            <q-item-section>
              <q-item-label>Associates</q-item-label>
            </q-item-section>
          </q-item>

        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: "MainLayout",
  data() {
    return {
      drawerRight: false
    };
  },
};
</script>

<style lang="scss" scoped>
.alink {
  text-decoration: none;
}

</style>
