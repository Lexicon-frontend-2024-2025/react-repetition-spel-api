import { Game } from '@/interfaces';
import React, { useEffect, useState } from 'react'
import GameCard from './game-card';

interface searchResultsProps {
    query: string | null;
}

export default function SearchResults({ query }: searchResultsProps) {
    const [games, setGames] = useState<Game[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // hämta från API:et när query uppdateras
        if (!query) return; // om ingen query - lämna funktionen
        const fetchGames = async () => {
            try {
                const res = await fetch(`https://api.rawg.io/api/games?key=${process.env.RAWG_API_KEY}&search=${query}`);
                const data = await res.json();
                setGames(data.results || []);
            } catch (error) {
                console.error("Error fetching games: ", error);
            } finally {
                setLoading(false);
            }
        };
        fetchGames();

    }, [query])

    if (loading) return <p>Searching for games...</p>

    return (
        <ul>
            {games.length > 0 ? (
                games.map((game, i) => <GameCard key={i} game={game} />)
            )
                :
                (<p>No games found for "{query}".</p>)
            }
        </ul>
    )
}
