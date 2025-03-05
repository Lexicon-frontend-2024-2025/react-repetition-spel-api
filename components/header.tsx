"use client";
import Link from "next/link";
import styles from "./header.module.css";
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

export default function Header() {
    const router = useRouter(); // för att ändra url
    const [searchQuery, setSearchQuery] = useState<string>('');
    // funktion som trigas när användaren trycker på en tangent
    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        // kolla om användaren har tryckt enter i input-fältet
        
        if (event.key === "Enter") {
            console.log('enter');
            // trycka in sökningen i vår url
            router.push(`/search?query=${searchQuery}`);
        }
    }
    return (
        <header className={styles.header}>
            <section>
                <Link href="/"><h2>Game Finder</h2></Link>
                <input
                    type='text'
                    placeholder='Search games'
                    value={searchQuery}
                    onKeyDown={handleKeyDown}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </section>
            <p>🎮</p>
        </header>
    )
}
