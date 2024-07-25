declare namespace App.Data {
  export type OriginLocationData = {
    name: string;
    url: string;
  };

  export type CharacterData = {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: OriginLocationData;
    location: OriginLocationData;
    image: string;
    episode: string[];
    url: string;
    created: string;
  };
}
