import type { Meta, StoryObj } from '@storybook/react';
import { NavLinksList } from '../components/NavLinksList/NavLinksList';
import type { NavLinksListProps } from '../components/NavLinksList/NavLinksList';

// Configurazione principale per Storybook
const meta: Meta<typeof NavLinksList> = {
    // Titolo della storia nella sidebar di Storybook
    title: "components/Molecules/NavLinksList",
    // Componente associato a questa storia
    component: NavLinksList,
    parameters: {
        // Imposta il layout al centro
        layout: "centered",
        docs: {
            description: {
                // Descrizione del componente per la documentazione
                component: "Molecola che rappresenta una lista di link di navigazione, composta da più NavLink.",
            },
        },
    },
    // Abilita la generazione automatica della documentazione
    tags: ["autodocs"],
    argTypes: {
        items: {
            // Tipo di controllo per l'argomento 'items'
            control: "object",
            // Descrizione dell'argomento
            description: "Array di oggetti con href, label e opzionalmente icon.",
        },
    },

}

export default meta;

type Story = StoryObj<typeof meta>;

// Definizione della storia "Default"
export const Default: Story = {
    args: {
        // Valore di default per l'array di items
        items: [
            { label: "Home", onClick: () => console.log("Home clicked"), arialabel: "Home" },
            { label: "Informatica", onClick: () => console.log("Informatica clicked"), arialabel: "Informatica" },
            { label: "Telefonia", onClick: () => console.log("Telefonia clicked"), arialabel: "Telefonia" },
            { label: "Gaming", onClick: () => console.log("Gaming clicked"), arialabel: "Gaming" },
            { label: "Elettrodomestici", onClick: () => console.log("Elettrodomestici clicked"), arialabel: "Elettrodomestici" },
            { label: "Carrello", onClick: () => console.log("Carrello clicked"), arialabel: "Carrello" },
            { label: "Utente", onClick: () => console.log("Utente clicked"), arialabel: "Utente" }
        ],
    },

    render: (args: NavLinksListProps) => {
        // Renderizza il componente NavLinksList con gli argomenti forniti
        return <NavLinksList {...args} />;
    }
}