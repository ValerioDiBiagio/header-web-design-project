import React, { type ButtonHTMLAttributes } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

// Metadati di Storybook per il componente Colors.
// Configura il titolo nel pannello e abilita la documentazione automatica.
const meta: Meta = {
    title: 'Atoms/Colors',
    tags: ['autodocs']
}

export default meta;

// Definisce il tipo di storia per le anteprime del componente.
type Story = StoryObj<typeof meta>;

// Componente per visualizzare e copiare un valore negli appunti.
const ClickToCopy: React.FC<{ value: string } & ButtonHTMLAttributes<HTMLButtonElement>> = ({ value, ...attrs }) => {
    return (
        <button
            className='click-to-copy'
            {...attrs}
            style={{ border: 'none', cursor: 'pointer', ...attrs.style }}
            onClick={() => navigator.clipboard.writeText(value)}
            aria-label={`Copia ${value}`}
        />
    )
}

// Storia principale per visualizzare la palette di colori.
export const Default: Story = {
    render: () =>
        <div>
            {/* Stili CSS globali per la palette e il layout */}
            <style>
                {`
                /* Stile per il container che ospita i campioni di colore */
                    .container {
                        display: grid;
                        grid-template-columns: repeat(16, 1fr);
                        height: 3rem;
                        margin-bottom: var(--spacing-lg);
                    }
                    /* Stile per il box informativo */
                    .info {
                        padding: var(--spacing-md);
                        margin-bottom: var(--spacing-lg);
                        border-radius: 0.25rem;
                        border: 1px solid;
                    }
                `}
            </style>

            <h1>Colors - Modern Accents Palette</h1>

            {/* Sezione per i toni Blue-Gray */}
            <h3>Blue-Gray Tones</h3>
            <div className="container">
                {Array.from({ length: 16 }).map((_, i) => (
                    <ClickToCopy
                        style={{ backgroundColor: `var(--color-neutral-${i})` }}
                        key={i}
                        value={`--color-neutral-${i}`}
                    />
                ))}
            </div>

            {/* Sezione per i toni Vibrant Yellow */}
            <h3>Vibrant Yellow</h3>
            <div className="container">
                {Array.from({ length: 16 }).map((_, i) => (
                    <ClickToCopy
                        style={{ backgroundColor: `var(--color-yellow-${i})` }}
                        key={i}
                        value={`--color-yellow-${i}`}
                    />
                ))}
            </div>

            {/* Sezione per i toni Trust Blue */}
            <h3>Trust Blue</h3>
            <div className="container">
                {Array.from({ length: 16 }).map((_, i) => (
                    <ClickToCopy
                        style={{ backgroundColor: `var(--color-positive-${i})` }}
                        key={i}
                        value={`--color-positive-${i}`}
                    />
                ))}
            </div>
        </div>
}