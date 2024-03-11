<template>
  <ion-item :router-link="`/memories/${memory.id}`">
    <ion-thumbnail slot="start">
      <ion-img :src="memory.image" :alt="memory.title"></ion-img>
    </ion-thumbnail>
    <ion-label>
      {{ memory.title }}
    </ion-label>
    <ion-button @click="deleteMemory(memory.id)">Delete</ion-button>
  </ion-item>
</template>

<script>
import { IonItem, IonThumbnail, IonImg, IonLabel, IonButton } from "@ionic/vue";

export default {
  props: ["memory"], 
  components: {
    IonItem,
    IonThumbnail,
    IonImg,
    IonLabel,
    IonButton
  },
  methods: {
    deleteMemory(memoryId) {
      this.$store.dispatch('deleteMemory', memoryId);
    },
  },
};
</script>