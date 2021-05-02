<template>
  <div>
    <q-layout view="hHh Lpr lff" container style="height: 100vh" class="shadow-2">
      <q-header elevated class="bg-primary">
        <q-toolbar>
          <q-btn flat @click="drawer = !drawer" round dense icon="menu" />
          <q-toolbar-title>Dashboard</q-toolbar-title>
        </q-toolbar>
      </q-header>
        
      <q-drawer
        v-model="drawer"
        show-if-above
        :width="200"
        :breakpoint="500"
        bordered
        content-class="bg-grey-3"
      >
        <q-scroll-area class="fit">
          <q-list>
            
            <template v-for="(menuItem, index) in menuList">
              <q-item :to="menuItem.to" :key="index" clickable v-ripple> <!-- :active="menuItem.label === 'Outbox'" -->
                <q-item-section avatar>
                  <q-icon :name="menuItem.icon" />
                </q-item-section>
                <q-item-section>
                  {{ menuItem.label }}
                </q-item-section>
              </q-item>
              <q-separator :key="'sep' + index"  v-if="menuItem.separator" />
            </template>

          </q-list>
          
          <q-btn class="fixed-bottom full-width q-py-sm" outline flat label="Logout" icon="logout" />
        </q-scroll-area>
      </q-drawer>

      <q-page-container>
        <!-- <q-page padding>
          <p v-for="n in 15" :key="n">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nihil praesentium molestias a adipisci, dolore vitae odit, quidem consequatur optio voluptates asperiores pariatur eos numquam rerum delectus commodi perferendis voluptate?
          </p>
        </q-page> -->
         <router-view />
      </q-page-container>
    </q-layout>
  </div>
</template>

<script>
const menuList = [
  {
    icon: 'inbox',
    label: 'Inbox',
    separator: true,
    to: '/dashboard/publish'
  },
  {
    icon: 'send',
    label: 'Outbox',
    separator: false
  },
  {
    icon: 'delete',
    label: 'Trash',
    separator: false
  },
  {
    icon: 'error',
    label: 'Spam',
    separator: true
  },
  {
    icon: 'settings',
    label: 'Settings',
    separator: false
  },
  {
    icon: 'help',
    iconColor: 'primary',
    label: 'Help',
    separator: false
  }
]

export default {
  data () {
    return {
      drawer: false,
      menuList
    }
  }
}
</script>