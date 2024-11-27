<script setup lang="ts">
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import {Input} from "~/components/ui/input";
const { loading, open } = useHelpers();

const createNewProducts = async () => {
  try {
    loading.value = true;
  } catch (error) {

  } finally {
    loading.value = false;
    open.value = false;
  }

}

</script>

<template>
  <AlertDialog :open="open">
    <AlertDialogTrigger @click="open = true">Add a new Product</AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Create a new product</AlertDialogTitle>
        <Input placeholder="My product name" />
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel @click="open = false">Cancel</AlertDialogCancel>
        <AlertDialogAction @click="createNewProducts">Create</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
</template>