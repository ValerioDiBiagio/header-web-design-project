// Imports necessari per Storybook e il componente Navbar
import type { Meta, StoryObj } from '@storybook/react';
import { Navbar } from '../components/Navbar/Navbar';
import type { NavbarProps } from '../components/Navbar/Navbar';


// Configurazione principale (meta) per lo story del componente Navbar
const meta: Meta<typeof Navbar> = {
    // Titolo dello story visualizzato nella sidebar di Storybook
    title: "Components/Organism/Navbar",
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
        logoText: "TechLoom",
        items: [
            { label: "Home", onClick: () => console.log("Home clicked") },
            { label: "Informatica", onClick: () => console.log("Informatica clicked") },
            { label: "Telefonia", onClick: () => console.log("Telefonia clicked") },
            { label: "Gaming", onClick: () => console.log("Gaming clicked") },
            { label: "Elettrodomestici", onClick: () => console.log("Elettrodomestici clicked") },
            { label: "Carrello", onClick: () => console.log("Carrello clicked") },
            { label: "Utente", onClick: () => console.log("Utente clicked") }
        ],
    },
    // Funzione per il rendering del componente nello story
    render: (args: NavbarProps) => {
        // Passa gli argomenti al componente
        return <Navbar {...args} />;
    }
}