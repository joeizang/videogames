export type Videogame = {
  gameId: string;
  description: string;
  title: string;
  ImagePath: string;
};

export class VideoGame implements Videogame {
  gameId: string;
  description: string;
  title: string;
  ImagePath: string;
}
