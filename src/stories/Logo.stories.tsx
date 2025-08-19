import type { Meta, StoryObj } from '@storybook/react';
import { Logo } from "../componets/Logo/Logo";


const meta: Meta<typeof Logo> = {
    title: 'Components/Logo',
    component: Logo,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'Componente Logo che mostra un testo stilizzato del brand.'
            }
        }
    },
    tags: ['autodocs'],
    argTypes: {
        text: { control: 'text', description: 'Testo da visualizzare come logo' }
    }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: { text: "Logo" },
    render: ({ text }) => <Logo text={text} />
};
