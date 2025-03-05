import { Game } from '@/interfaces'
import Image from 'next/image'
import React from 'react'

interface gameCardProps {
    game: Game;
}

export default function GameCard({ game }: gameCardProps) {
    return (
        <li key={game.id}>
            <Image
                src={game.background_image}
                alt={game.name}
                width={100}
                height={100}
            />
            <article>
                <h3>{game.name}</h3>
                <p>{game.id}</p>
            </article>
        </li>
    )
}
