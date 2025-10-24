import React, { useEffect, useState } from 'react'

export default function DarkModeToggle() {
    const [dark, setDark] = useState(() => {
        if (typeof window === 'undefined') return false;

        const saved = localStorage.getItem('theme');
        if (saved) {
            return saved === 'dark';
        }

        return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    });

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
        localStorage.setItem('theme', dark ? 'dark' : 'light');
        document.body.classList.toggle('dark-theme', dark);
        document.body.classList.toggle('light-theme', !dark);
    }, [dark]);

    const toggleTheme = () => {
        setDark(prev => !prev);
    };

    return (
        <button
            className={`theme-toggle ${dark ? '' : 'light'}`}
            onClick={toggleTheme}
            title={`Switch to ${dark ? 'light' : 'dark'} mode`}
            aria-label={`Switch to ${dark ? 'light' : 'dark'} mode`}
        >
            <div className="theme-toggle-icons">
                <span className="theme-toggle-icon sun">☀</span>
                <span className="theme-toggle-icon moon">🌙</span>
            </div>
        </button>
    );
}