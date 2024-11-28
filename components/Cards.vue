<script setup lang="ts">
const props = defineProps({
	card: {
		type: Object,
		required: true,
	},
})

const card = props.card
</script>

<template>
  <Card>
    <CardHeader class="px-4 pt-4">
      <div class="flex justify-between items-center">
        <p>{{ card.title }}</p>
        <Badge class="bg-green-600">{{ card.progression + '%' }}</Badge>
      </div>
    </CardHeader>
    <CardContent class="flex items-center justify-end px-4 pt-0 pb-2 border-b">
      <div class="text-[48px] font-[800]">
        <span>$</span>
        <span>{{ card.amount }}</span>
      </div>
    </CardContent>
    <CardFooter class="flex gap-2 py-2 px-2 items-center justify-between">
      <div class="w-8 h-8 bg-neutral-100 rounded flex items-center justify-center">
        <Icon size="20" :name="card.icon" color="black"/>
      </div>
      <p class="grow text-xs">{{ card.description }}</p>
      <Button variant="outline">{{ card.label }}</Button>
    </CardFooter>
  </Card>
</template>
