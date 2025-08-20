import type { Meta, StoryObj } from '@storybook/react';
import { NavLinksList } from '../components/NavLinksList/NavLinksList';
import type { NavLinksListProps } from '../components/NavLinksList/NavLinksList';

const meta: Meta<typeof NavLinksList> = {
    title: "components/NavLinksList",
    component: NavLinksList,
    parameters: {
        layout: "centered",
        docs: {
            description: {
                component: "Molecola che rappresenta una lista di link di navigazione, composta da più NavLink.",
            },
        },
    },
    tags: ["autodocs"],
    argTypes: {
        links: {
            control: "object",
            description: "Array di oggetti con href, label e opzionalmente icon.",
        },
    },

}

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        links: [
            { href: "/home", label: "Home" },
            { href: "/products", label: "Products" },
            { href: "/about", label: "About" },
            { href: "/contact", label: "Contact" },
        ]
    },

    render: (args) => {
        return <NavLinksList {...args} />;
    }
}
