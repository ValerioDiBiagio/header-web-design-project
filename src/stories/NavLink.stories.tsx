// Importa i tipi da Storybook e i componenti NavLink e NavLinkProps
import type { Meta, StoryObj } from '@storybook/react';
import { NavLink } from "../components/NavLink/NavLink";
import type { NavLinkProps } from '../components/NavLink/NavLink';
import { useState } from 'react';

// Metadati di configurazione per il componente NavLink in Storybook
const meta: Meta<typeof NavLink> = {
    // Titolo e percorso nella sidebar di Storybook
    title: 'Components/NavLink',
    // Componente da documentare
    component: NavLink,
    // Parametri di visualizzazione
    parameters: {
        // Centra il componente nel frame
        layout: 'centered',
        // Impostazioni per la documentazione automatica (Docs)
        docs: {
            description: {
                component: 'Componente link di navigazione che può mostrare testo e/o icona.'
            }
        }
    },
    // Abilita la generazione automatica di documentazione
    tags: ['autodocs'],
    // Definisce i controlli per le proprietà (props) del componente
    argTypes: {
        label: {
            control: 'text',
            description: 'Testo da visualizzare interno del link.'
        },
        arialabel: {
            control: "text",
            description: "Etichetta per l'accessibilità, fondamentale quando è presente solo un'icona."
        },
        icon: {
            control: 'text',
            description: 'Nome o riferimento icona da mostrare accanto al testo (opzionale).'
        },
        onClick: {
            action: "clicked",
            description: "Funzione chiamata quando l'utente clicca sul link (button)."
        },
        selected: {
            control: 'boolean',
            description: "Stato che seleziona il link."
        }
    }
};

// Esporta i metadati come default, obbligatorio per Storybook
export default meta;

// Definisce il tipo per le storie del componente
type Story = StoryObj<typeof meta>;

// Esporta la storia 'Default'
export const Default: Story = {
    // Argomenti di default per questa storia
    args: {
        label: "Home"
    },
    // Funzione che renderizza il componente con le props fornite
    render: (args: NavLinkProps) => (
        <NavLink {...args} />
    )
};


export const Selected: Story = {
    args: {
        label: 'Home',  // Valore di default della prop label
        selected: true // Stato Active
    },
};

// Storia che simula una navigazione con stato
export const Navigation: Story = {
    render: () => {
        // Definire lo stato per tracciare il link selezionato
        const [selectedLink, setSelectedLink] = useState('Home');

        // Funzione per gestire il click e aggiornare lo stato
        const handleLinkClick = (label: string) => {
            setSelectedLink(label);
        };

        const links = [
            { label: 'Home' },
            { label: 'About' },
            { label: 'Services' },
            { label: 'Contact' }
        ];

        return (
            <nav style={{ display: 'flex', gap: '20px' }}>
                {links.map((link) => (
                    <NavLink
                        key={link.label}
                        label={link.label}
                        onClick={() => handleLinkClick(link.label)}
                        selected={selectedLink === link.label}
                    />
                ))}
            </nav>
        );
    }
};