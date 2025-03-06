export interface Game {
    id: number,
    background_image: string,
    name: string;
    slug: string;
}

interface GameTags {
    id: 40847,
    name: string,
    slug: string,
    language: string,
    games_count: number,
    image_background: string
}
export interface GameDesc {
    id: number,
    background_image: string,
    name: string;
    description: string;
    tags: GameTags[];
}