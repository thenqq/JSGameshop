<script setup>
defineProps({})
</script>

<template>
  <div class="flex items-center border border-slate-200 p-4 rounded-xl gap-4">
    <img class="w-16 h-16" src="/er.jpg" alt="Sneaker" />
    <div class="flex flex-col w-full">
      <p>elden ring</p>

      <div class="flex justify-between mt-2">
        <b>3999 руб.</b>
        <img
          class="opacity-40 hover:opacity-100 cursor-pointer transition"
          src="/close.svg"
          alt=""
        />
      </div>
    </div>
  </div>
</template>
