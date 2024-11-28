<script setup lang="ts">
const items = ref([
	{
		title: 'Overview',
		path: '/',
		iconName: 'ri:dashboard-line',
	},
	{
		title: 'Transactions',
		path: '/transactions',
		iconName: 'tdesign:undertake-transaction',
	},
])
</script>

<template>
  <div>
    <header class="flex items-center gap-2 p-4">
      <TheLogo />
      <p class="font-bold text-black">Dashboard</p>
    </header>
    <div class="px-4 grow">
      <div class="grid gap-2">
        <NuxtLink
            v-for="(item, index) in items"
            :key="index"
            :href="item.path"
            class="flex items-center gap-2 px-2 py-1 transition rounded cursor-pointer hover:bg-neutral-100"
        >
          <Icon v-if="item.iconName" :name="item.iconName" />
          <span>{{ item.title }}</span>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
