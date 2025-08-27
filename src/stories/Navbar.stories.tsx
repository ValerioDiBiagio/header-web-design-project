// Imports necessari per Storybook e il componente Navbar
import type { Meta, StoryObj } from '@storybook/react';
import { Navbar } from '../components/Navbar/Navbar';
import type { NavbarProps } from '../components/Navbar/Navbar';

import { useState } from 'react';


// Configurazione principale (meta) per lo story del componente Navbar
const meta: Meta<typeof Navbar> = {
    // Titolo dello story visualizzato nella sidebar di Storybook
    title: "components/Navbar",
    // Componente da documentare
    component: Navbar,
    // Parametri globali per lo story
    parameters: {
        // Imposta il layout a 'fullscreen' per una visualizzazione ottimale
        layout: "fullscreen",
        // Opzioni per la documentazione
        docs: {
            description: {
                // Descrizione dettagliata del componente
                component:
                    "Componente di tipo organismo che rappresenta la barra di navigazione principale. Contiene il logo (componente atomico Logo) a sinistra e una lista di link (molecola NavLinksList) a destra. Utile per creare menu di navigazione standard orizzontali.",
            },
        },
    },
    // Tag per l'autodocumentazione
    tags: ["autodocs"],
    // Definizione dei controlli per le proprietà (props)
    argTypes: {
        // Controllo per la prop 'logoText'
        logoText: {
            // Tipo di controllo: campo di testo
            control: "text",
            // Descrizione della prop
            description: "Testo visualizzato come logo nella parte sinistra della Navbar.",
        },
        // Controllo per la prop 'items'
        items: {
            // Tipo di controllo: editor di oggetti
            control: "object",
            description:
                "Lista di oggetti NavLinkProps visualizzati a destra del logo. Ogni elemento rappresenta un link con href, label e opzionalmente icon.", // Descrizione della prop
        },
    },
}

// Esporta la configurazione come default
export default meta;

// Tipo per lo story, derivato dalla configurazione
type Story = StoryObj<typeof meta>;

// Definizione dello story 'Default'
export const Default: Story = {
    // Argomenti di default per questo story
    args: {
        logoText: "Logo",
        items: [
            { label: "Home", onClick: () => console.log("Home clicked") },
            { label: "Products", onClick: () => console.log("Products clicked") },
            { label: "About", onClick: () => console.log("About clicked") },
            { label: "Contacts", onClick: () => console.log("Contacts clicked") },
            { label: "Cart", onClick: () => console.log("Cart clicked") },
            { label: "User", onClick: () => console.log("User clicked") }
        ],
    },
    // Funzione per il rendering del componente nello story
    render: (args: NavbarProps) => {
        // Passa gli argomenti al componente
        return <Navbar {...args} />;
    }
}


export const Selected: Story = {
    // Argomenti di default per questo story
    args: {
        logoText: "Logo",
        items: [
            { label: "Home", onClick: () => console.log("Home clicked"), selected: true },
            { label: "Products", onClick: () => console.log("Products clicked") },
            { label: "About", onClick: () => console.log("About clicked") },
            { label: "Contacts", onClick: () => console.log("Contacts clicked") },
            { label: "Cart", onClick: () => console.log("Cart clicked") },
            { label: "User", onClick: () => console.log("User clicked") }
        ],
    },
    // Funzione per il rendering del componente nello story
    render: (args: NavbarProps) => {
        // Passa gli argomenti al componente
        return <Navbar {...args} />;
    }
}


export const Navigation: Story = {

    args: {
        logoText: "Logo",
        items: [
            { label: "Home" },
            { label: "Products" },
            { label: "About" },
            { label: "Contacts" },
            { label: "Cart" },
            { label: "User" }
        ],
    },

    render: (args: NavbarProps) => {
        // Modifica qui: imposta lo stato iniziale su null
        const [selectedLink, setSelectedLink] = useState<string | null>(null);

        const updatedItems = args.items.map(item => ({
            ...item,
            selected: selectedLink === item.label,
            onClick: () => {
                setSelectedLink(item.label);
                if (item.onClick) {
                    item.onClick();
                }
            }
        }));

        return <Navbar {...args} items={updatedItems} />;
    },
};