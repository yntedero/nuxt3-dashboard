<script setup lang="ts">
const name = ref('Example User')
const description = ref('Example Description')
</script>

<template>
  <div class="m-2 p-2 border rounded flex items-center gap-2">
    <div class="rounded-full bg-green-500 w-10 h-10 flex items-center justify-center font-bold text-white">
      {{ name[0] }}
    </div>
    <div>
      <p class="text-sm font-bold m-0 leading-tight text-black">{{ name }}</p>
      <p class="text-xs m-0">{{ description }}</p>
    </div>
  </div>
</template>
