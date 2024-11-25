<script setup lang="ts">
const items = ref([
  {
    title: 'Overview',
    path: '/overview',
    iconName: 'ri:dashboard-line'
  },
  {
    title: 'Transactions',
    path: '/transactions',
    iconName: 'tdesign:undertake-transaction'
  },
  {
    title: 'Account',
    path: '/account',
    iconName: 'codicon:account'
  },
  {
    title: 'Contacts',
    path: '/contacts',
    iconName: 'typcn:contacts'
  },
  {
    title: 'Settings',
    path: '/settings',
    iconName: 'material-symbols:settings-outline'
  }
]);
</script>

<template>
  <div>
    <header class="flex items-center gap-2 p-4">
      <Logo />
      <p class="font-bold">Dashboard</p>
    </header>
    <div class="px-4 grow">
      <div class="grid gap-2">
        <div
            v-for="(item, index) in items"
            :key="index"
            class="flex items-center gap-2 px-2 py-1 transition rounded cursor-pointer hover:bg-neutral-100"
        >
          <Icon v-if="item.iconName" :name="item.iconName" />
          <span>{{ item.title }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
