"use client";
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

export default function Header() {
    const router = useRouter(); // för att ändra url
    const [searchQuery, setSearchQuery] = useState<string>('');
    // funktion som trigas när användaren trycker på en tangent
    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        console.log(event);
        // kolla om användaren har tryckt enter i input-fältet
        if (event.key === "Enter") {
            // trycka in sökningen i vår url
            router.push(`/search?query=${searchQuery}`);
        }
    }
    return (
        <header>
            <h2>Game Encyclopaedia</h2>
            <input
                type='text'
                placeholder='Search games'
                value={searchQuery}
                onKeyDown={handleKeyDown}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            <p>🎮</p>
        </header>
    )
}
