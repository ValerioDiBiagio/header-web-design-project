import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from '../components/Icon/Icon';

const meta: Meta<typeof Icon> = {
    title: 'Atoms/Icon',
    component: Icon,
    tags: ['autodocs'],
    argTypes: {
        name: {
            control: 'select',
            options: ['home'], // Le opzioni devono corrispondere ai nomi delle icone
            description: 'Seleziona il nome dell\'icona.'
        },
        className: {
            control: 'text',
            description: 'Classi CSS per personalizzare l\'icona (es. per colore e dimensioni).'
        }
    },
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'Un componente Atomico per gestire tutte le icone del Design System.'
            }
        }
    }
};

export default meta;

type Story = StoryObj<typeof meta>;

// Storia di base per mostrare un'icona predefinita
export const Default: Story = {
    args: {
        name: 'home',
        className: 'text-gray-800'
    },
};