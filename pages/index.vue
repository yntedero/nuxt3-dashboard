<script setup lang="ts">
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { statisticsInitialData } from '~/mocks/statistics'

const graphData = ref(statisticsInitialData.today)
const currentTab = ref('Today')

const tabs = [
	{ title: 'Today' },
	{ title: 'Week' },
	{ title: 'Month' },
	{ title: 'Year' },
]

const cards = [
	{
		title: 'Sales',
		progression: 12,
		amount: 1234.44,
		label: 'View sales',
		description: 'Sales of November 2024',
		icon: 'solar:ticket-sale-outline',
	},
	{
		title: 'Refunds',
		progression: 8,
		amount: 61.1,
		label: 'View refunds',
		description: 'Refunds since beggining of this year',
		icon: 'heroicons-outline:receipt-refund',
	},
	{
		title: 'Payouts',
		progression: 16,
		amount: 785.14,
		label: 'View payouts',
		description: 'Payouts of this week',
		icon: 'tabler:zoom-money',
	},
]

const setCategory = (e: Event) => {
	const target = e.target as HTMLElement
	const category =
		target.innerText.toLowerCase() as keyof typeof statisticsInitialData
	if (statisticsInitialData[category]) {
		graphData.value = statisticsInitialData[category]
		currentTab.value = target.innerText
	}
}
</script>

<template>
  <div class="grid gap-4 w-full">
    <header class="flex items-start justify-between">
      <div class="grow">
        <p>Hi, welcome back User !</p>
        <h1>Dashboard</h1>
      </div>
      <ProductTheNewItem />
    </header>
    <main class="grow">
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
      <div class="grid lg:grid-cols-3 gap-4">
        <Cards v-for="(item, index) in cards" :key="index" :card="item"/>
      </div>
    </footer>
  </div>
</template>