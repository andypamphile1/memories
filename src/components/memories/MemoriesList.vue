<template>
  <ion-list>
    <memory-list-item
      v-for="memory in memories"
      :key="memory.id"
      :memory="memory"
    ></memory-list-item>
  </ion-list>
</template>

<script>
import { IonList } from "@ionic/vue";
import MemoryListItem from "./MemoryListItem.vue";

export default {
  props: ["memories"],
  components: {
    IonList,
    MemoryListItem,
  },
  methods: {
    setMemoryToDelete(memoryId) {
      this.$store.dispatch('setMemoryToDelete', memoryId);
    },
    deleteMemory(memoryId) {
      this.$store.dispatch('deleteMemory', memoryId);
    },
  },
};
</script>