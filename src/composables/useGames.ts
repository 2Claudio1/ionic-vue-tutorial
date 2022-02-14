import { Game } from "@/interfaces/interfaces";
import { ref } from "vue";

export const useGames = () => {
  const games = ref<Game[]>([
    {
      id: 1,
      isFavorite: false,
      name: "Pokémon Yellow",
    },
    {
      id: 2,
      isFavorite: false,
      name: "Mega Man X",
    },
    {
      id: 3,
      isFavorite: false,
      name: "The Legend of Zelda",
    },
    {
      id: 4,
      isFavorite: false,
      name: "Pac-Man",
    },
    {
      id: 5,
      isFavorite: false,
      name: "Super Mario World",
    },
    {
      id: 6,
      isFavorite: false,
      name: "Super Smash Bros",
    },
    {
      id: 7,
      isFavorite: false,
      name: "Starcraft",
    },
    {
      id: 8,
      isFavorite: false,
      name: "Metal Gear",
    },
    {
      id: 9,
      isFavorite: false,
      name: "Paper Mario",
    },
    {
      id: 10,
      isFavorite: false,
      name: "Mario Maker",
    },
  ]);

  const favoriteGames = ref<any>({});

  return {
    games,
    toggleFavorite: (game: Game) => {
      if (game.id in favoriteGames.value) {
        delete favoriteGames.value[game.id];
        game.isFavorite = false;
        /* console.log('Object Found') */
      } else {
        favoriteGames.value[game.id] = game;
        game.isFavorite = true;
        /* console.log('Object Not Found') */
      }

      localStorage.setItem("favorites", JSON.stringify(favoriteGames.value));
    },
  };
};
