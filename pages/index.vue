<script setup lang="ts">
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {statisticsInitialData} from "~/mocks/statistics";

const graphData = ref(statisticsInitialData.today)
const currentTab = ref('Today')

const tabs = [
  { title: 'Today' },
  { title: 'Week' },
  { title: 'Month' },
  { title: 'Year' },
]

const setCategory = (e: Event) => {
  const target = e.target as HTMLElement
  const category = target.innerText.toLowerCase() as keyof typeof statisticsInitialData
  if (statisticsInitialData[category]) {
    graphData.value = statisticsInitialData[category]
    currentTab.value = target.innerText
  }
}
</script>

<template>
  <div class="grid gap-8 w-auto">
    <header class="flex items-start justify-between">
      <div class="grow">
        <p>Hi, welcome back User !</p>
        <h1>Dashboard</h1>
      </div>
      <div class="w-[120px] h-[36px] bg-neutral-300"></div>
    </header>
    <main class="grid gap-2">
      <Tabs default-value="Today" @click="setCategory">
        <TabsList>
          <TabsTrigger v-for="(item, index) in tabs" :key="index" :value="item.title">
            {{ item.title }}
          </TabsTrigger>
        </TabsList>
        <TabsContent v-for="(item, index) in tabs" :key="index" :value="item.title">
          <div class="border rounded-lg py-2">
            <AreaChart index="name"
                       :data="graphData"
                       :categories="['transactions', 'online']"
                       :colors="['orange', 'green']"
                       :show-legend="false"
                       :show-grid-line="false"
            />
          </div>
        </TabsContent>
      </Tabs>
      <p>Current Tab: {{ currentTab }}</p>
    </main>
    <footer>
      <div class="flex items-center ">
        <div v-for="(item, index) in 3" :key="index" class="w-auto h-[260px] bg-neutral-300"></div>
      </div>
    </footer>
  </div>
</template>