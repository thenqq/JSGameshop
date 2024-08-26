<script setup>
import Card from './Card.vue'

const onClickAdd = () => {}
const onClickFavorite = () => {}
</script>

<template>
  <div class="grid grid-cols-4 gap-5">
    <Card
      title="ELDEN RING"
      imageUrl="/er.jpg"
      :price="3999"
      :isAdded="false"
      :isFavorite="false"
      :onClickAdd="onClickAdd"
      :onClickFavorite="onClickFavorite"
    />
  </div>
</template>
