<script setup lang="ts">
import DataTable from '@/components/DataTable.vue';
import {columns} from "~/pages/transactions/columns";

const data = ref<any>([]);

function generateRandomData(numObjects: any) {
  const statuses = ['pending', 'processing', 'completed'];
  const emails = [
    'example@gmail.com',
    'me@example.com',
    'test@example.com',
    'user@example.com'
  ];

  const randomData = [];

  for (let i = 0; i < numObjects; i++) {
    const id = Math.random().toString(36).substr(2, 8);
    const amount = Math.floor(Math.random() * 500) + 50; // Random amount between 50 and 550
    const status = statuses[Math.floor(Math.random() * statuses.length)];
    const email = emails[Math.floor(Math.random() * emails.length)];

    randomData.push({ id, amount, status, email });
  }

  return data.value = randomData;
}

onMounted(() => {
  generateRandomData(10);
})
</script>

<template>
  <div class="grid gap-4 w-full">
    <header class="flex items-start justify-between">
      <div class="grow">
        <p>All your transactions</p>
        <h1>Transactions</h1>
      </div>
      <ProductTheNewItem />
    </header>
    <DataTable :data="data" :columns="columns"/>
  </div>
</template>
