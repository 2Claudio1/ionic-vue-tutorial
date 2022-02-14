<template>
  <ion-page>
    <!-- <ion-header>
      <ion-toolbar>
        <ion-title>Ion List</ion-title>
      </ion-toolbar>
    </ion-header> -->

    <ion-content :fullscreen="true">
      <!-- <ion-header collapse="condense"> -->
      <ion-header>
        <ion-toolbar>
          <ion-title size="large">Games</ion-title>
        </ion-toolbar>
      </ion-header>

      <!-- List of Text Items -->
      <!-- <h1>Games</h1> -->
      <hr />

      <ion-list ref="ionListGames">
        <ion-item-sliding v-for="game in games" :key="game.id">
          <ion-item>
            <ion-label> {{ game.name }} </ion-label>
          </ion-item>
          <ion-item-options side="end">
            <ion-item-option @click="onToggleFavoriteGame(game)">
              <ion-icon :icon="game.isFavorite ? heartCircle : heartOutline"></ion-icon>
            </ion-item-option>
          </ion-item-options>
        </ion-item-sliding>
      </ion-list>

      <!-- <ExploreContainer name="Tab 1 page" /> -->
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonLabel,
  IonItem,
  IonList,
  IonItemSliding,
  IonItemOption,
  IonItemOptions,
  IonIcon,
} from "@ionic/vue";
import { heartOutline, heartCircle } from "ionicons/icons";
import { ref } from "@vue/reactivity";
import { Game } from "@/interfaces/interfaces";
import { useGames } from "@/composables/useGames";

export default defineComponent({
  name: "Tab1Page",
  components: {
    /* ExploreContainer,  */ IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
    IonLabel,
    IonItem,
    IonList,
    IonItemSliding,
    IonItemOption,
    IonItemOptions,
    IonIcon,
  },
  setup() {
    /* console.log('Setup Function') */

    const ionListGames = ref<any>(null);
    const { games, toggleFavorite: toggleFavorite } = useGames();

    return {
      games,
      ionListGames,
      heartOutline,
      heartCircle,
      onToggleFavoriteGame: (game: Game) => {
        ionListGames.value.$el.closeSlidingItems();
        toggleFavorite(game);
      },
    };
  },
});
</script>
