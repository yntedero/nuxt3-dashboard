<script setup lang="ts">
import { ref } from 'vue'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { AreaChart } from '~/components/ui/chart-area'

const loading = ref(false)
const list = [
  { title: 'Today' },
  { title: 'Week' },
  { title: 'Month' },
  { title: 'Year' },
]

function generateRandomData(labels: string[], min: number, max: number) {
  return labels.map(label => ({
    name: label,
    total: Math.floor(Math.random() * (max - min + 1)) + min,
    predicted: Math.floor(Math.random() * (max - min + 1)) + min,
  }))
}

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const weeks = Array.from({ length: 12 }, (_, i) => `Week ${i + 1}`)
const days = Array.from({ length: 30 }, (_, i) => `Day ${i + 1}`)
const years = Array.from({ length: 10 }, (_, i) => (2014 + i).toString())

const initialData = {
  today: generateRandomData(days, 500, 2500),
  week: generateRandomData(weeks, 500, 2500),
  month: generateRandomData(months, 500, 2500),
  year: generateRandomData(years, 500, 2500),
}

const data = ref(initialData.today)
const currentTab = ref('Today')

const setCategory = (e: Event) => {
  const target = e.target as HTMLElement
  const category = target.innerText.toLowerCase() as keyof typeof initialData
  if (initialData[category]) {
    data.value = initialData[category]
    currentTab.value = target.innerText
  }
}
</script>

<template>
  <div class="grid gap-8">
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
          <TabsTrigger v-for="(item, index) in list" :key="index" :value="item.title">
            {{ item.title }}
          </TabsTrigger>
        </TabsList>
        <TabsContent v-for="(item, index) in list" :key="index" :value="item.title">
          <AreaChart :data="data" index="name" :categories="['total', 'predicted']" />
        </TabsContent>
      </Tabs>
      <p>Current Tab: {{ currentTab }}</p>
    </main>
    <footer>
      <div class="flex items-center gap-4">
        <div v-for="(item, index) in 3" :key="index" class="w-full h-[260px] bg-neutral-300"></div>
      </div>
    </footer>
  </div>
</template>