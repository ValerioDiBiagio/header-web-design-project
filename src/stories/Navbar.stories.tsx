import type { Meta, StoryObj } from '@storybook/react';
import { Navbar } from '../components/Navbar/Navbar';
import type { NavbarProps } from '../components/Navbar/Navbar';


const meta: Meta<typeof Navbar> = {
    title: "components/Navbar",
    component: Navbar,
    parameters: {
        layout: "fullscreen",
        docs: {
            description: {
                component:
                    "Componente di tipo organismo che rappresenta la barra di navigazione principale. Contiene il logo (componente atomico Logo) a sinistra e una lista di link (molecola NavLinksList) a destra. Utile per creare menu di navigazione standard orizzontali.",
            },
        },
    },
    tags: ["autodocs"],
    argTypes: {
        logoText: {
            control: "text",
            description: "Testo visualizzato come logo nella parte sinistra della Navbar.",
        },
        links: {
            control: "object",
            description:
                "Lista di oggetti NavLinkProps visualizzati a destra del logo. Ogni elemento rappresenta un link con href, label e opzionalmente icon.",
        },
    },
}

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        logoText: "Logo",
        links: [
            { href: "/home", label: "Home" },
            { href: "/products", label: "Products" },
            { href: "/about", label: "About" },
            { href: "/contact", label: "Contact" },
        ]
    },

    render: ({ logoText, links }: NavbarProps) => {
        return <Navbar logoText={logoText} links={links} />;
    }
}