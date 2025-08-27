import React, { type ButtonHTMLAttributes } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import "../styles/colors.css"

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
            <h2>Colors - Modern Accents Palette</h2>

            {/* Sezione per i toni Blue-Gray */}
            <h3>Blue-Gray Tones</h3>
            <div className="container">
                {Array.from({ length: 16 }).map((_, i) => (
                    <ClickToCopy
                        style={{ backgroundColor: `var(--color-blue-gray-${i})` }}
                        key={i}
                        value={`--color-blue-gray-${i}`}
                    />
                ))}
            </div>

            {/* Sezione per i toni Vibrant Yellow */}
            <h3>Vibrant Yellow</h3>
            <div className="container">
                {Array.from({ length: 16 }).map((_, i) => (
                    <ClickToCopy
                        style={{ backgroundColor: `var(--color-vibrant-yellow-${i})` }}
                        key={i}
                        value={`--color-vibrant-yellow-${i}`}
                    />
                ))}
            </div>

            {/* Sezione per i toni Trust Blue */}
            <h3>Trust Blue</h3>
            <div className="container">
                {Array.from({ length: 16 }).map((_, i) => (
                    <ClickToCopy
                        style={{ backgroundColor: `var(--color-trust-blue-${i})` }}
                        key={i}
                        value={`--color-trust-blue-${i}`}
                    />
                ))}
            </div>
        </div>
}