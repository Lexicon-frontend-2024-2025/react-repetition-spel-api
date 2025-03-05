"use client"; // Gör komponenten till en Client Component

import { Game } from '@/interfaces';
import React, { useEffect, useState } from 'react';
import GameCard from './game-card';
import styles from './search-results.module.css';

interface searchResultsProps {
    query: string | null;
}

export default function SearchResults({ query }: searchResultsProps) {
    const [games, setGames] = useState<Game[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!query) return;

        const fetchGames = async () => {
            try {
                setLoading(true);
                const res = await fetch(`https://api.rawg.io/api/games?key=${process.env.NEXT_PUBLIC_RAWG_API_KEY}&search=${query}`);
                const json = await res.json();
                setGames(json.results || []);
            } catch (error) {
                console.error("Error fetching games:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchGames();
    }, [query]);

    if (loading) return <p>Loading games...</p>;

    return (
            <ul className={styles.searchResults}>
                {games.length > 0 ? (
                    games.map((game, i) => <GameCard key={i} game={game} />)
                ) : (
                    <p>No games found for "{query}".</p>
                )}
            </ul>
    );
}
