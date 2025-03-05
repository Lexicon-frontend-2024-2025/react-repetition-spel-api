import { Game } from '@/interfaces'
import Image from 'next/image'
import React from 'react'
import styles from './game-card.module.css';
import Link from 'next/link';

interface gameCardProps {
    game: Game;
}

export default function GameCard({ game }: gameCardProps) {
    return (
        <Link href={"/game/" + game.slug}>
            <li key={game.id} className={styles.gameCard}>
                <Image
                    src={game.background_image ? game.background_image : "/imgnotfound.png"}
                    alt={game.name}
                    width={100}
                    height={100}
                />
                <article>
                    <h3>{game.name}</h3>
                    <p>Id: {game.id}</p>
                </article>
            </li>
        </Link>
    )
}
