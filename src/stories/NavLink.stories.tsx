import type { Meta, StoryObj } from '@storybook/react';
import { NavLink } from "../componets/NavLink/Navlink";
import type { NavLinkProps } from '../componets/NavLink/Navlink';

const meta: Meta<typeof NavLink> = {
    title: 'Components/NavLink',
    component: NavLink,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'Componente link di navigazione che può mostrare testo e/o icona.'
            }
        }
    },
    tags: ['autodocs'],
    argTypes: {
        href: {
            control: 'text',
            description: 'URL di destinazione del link.'
        },
        label: {
            control: 'text',
            description: 'Testo da visualizzare interno del link.'
        },
        icon: {
            control: 'text',
            description: 'Nome o riferimento icona da mostrare accanto al testo (opzionale).'
        }
    }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        href: "/products",
        label: "Products"
    },

    render: ({ href, label }: NavLinkProps) => (

        <NavLink href={href} label={label} />
    )
}
