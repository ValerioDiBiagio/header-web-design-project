import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from '../components/Icon/Icon';

const meta: Meta<typeof Icon> = {
    title: 'Components/Icon',
    component: Icon,
    tags: ['autodocs'],
    argTypes: {
        name: {
            control: 'select',
            options: ['home', 'cart', 'user'],
            description: 'Seleziona il nome dell\'icona.',
        },
        className: {
            control: 'text',
            description: 'Classi CSS per personalizzare l\'icona (es. per colore e dimensioni).',
        },
        size: {
            control: "text",
            description: "Dimensione dell'icona (es. '1.5rem', '32px')"
        },
        ariaLabel: {
            control: 'text',
            description: 'Etichetta per l\'accessibilità, fondamentale per gli screen reader.',
        },
    },
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'Un componente Atomico per gestire tutte le icone del Design System.',
            },
        },
    },
};

export default meta;

type Story = StoryObj<typeof meta>;

// Storia che mostra tutte le icone insieme
// AllIcons

export const AllIcons: Story = {
    render: () => (
        <div style={{ display: 'flex', gap: '20px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', fontSize: '1.5rem' }}>
                <Icon name="home" ariaLabel="Icona Home" />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', fontSize: '1.5rem' }}>
                <Icon name="cart" ariaLabel="Icona Carrello" />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', fontSize: '1.5rem' }}>
                <Icon name="user" ariaLabel="Icona Utente" />
            </div>
        </div>
    ),
};

// Storia di base per mostrare solo l'icona Home
export const DefaultHome: Story = {
    args: {
        name: 'home',
        size: '1.5rem',
        ariaLabel: 'Icona Home'
    },

};

// Storia di base per mostrare solo l'icona Cart
export const DefaultCart: Story = {
    args: {
        name: 'cart',
        size: '1.5rem',
        ariaLabel: 'Icona Carrello'
    },
};

// Storia di base per mostrare solo l'icona User
export const DefaultUser: Story = {
    args: {
        name: 'user',
        size: '1.5rem',
        ariaLabel: 'Icona Utente'
    },
};