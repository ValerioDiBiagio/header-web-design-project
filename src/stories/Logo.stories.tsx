// Importa i tipi necessari da Storybook e il componente Logo
import type { Meta, StoryObj } from '@storybook/react';
import { Logo } from "../componets/Logo/Logo";

// Configurazione principale (metadata) per Storybook
const meta: Meta<typeof Logo> = {
    // Titolo e percorso nella sidebar di Storybook
    title: 'Components/Logo',
    // Componente da documentare
    component: Logo,
    // Parametri di visualizzazione
    parameters: {
        // Allinea il componente al centro
        layout: 'centered',
        // Impostazioni per la documentazione automatica
        docs: {
            description: {
                component: 'Componente Logo che mostra un testo stilizzato del brand.'
            }
        }
    },
    // Abilita la generazione automatica della documentazione
    tags: ['autodocs'],
    // Definisce i controlli per le proprietà del componente
    argTypes: {
        text: { control: 'text', description: 'Testo da visualizzare come logo' }
    }
};

// Esporta la configurazione principale
export default meta;

// Definisce il tipo per le storie
type Story = StoryObj<typeof meta>;

// Esporta la storia 'Default'
export const Default: Story = {
    // Argomenti di default per la storia
    args: { text: "Logo" },
    // Funzione di renderizzazione che mostra il componente con gli argomenti
    render: ({ text }) => <Logo text={text} />
};