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
            { label: "Home", onClick: () => console.log("Home clicked") },
            { label: "Products", onClick: () => console.log("Products clicked") },
            { label: "About", onClick: () => console.log("About clicked") },
            { label: "Contacts", onClick: () => console.log("Contacts clicked") }
        ],
    },

    render: (args: NavLinksListProps) => {
        return <NavLinksList {...args} />;
    }
}
