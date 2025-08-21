import { Logo } from "../Logo/Logo";
import { NavLinksList, type NavLinksListProps } from "../NavLinksList/NavLinksList";

// Definisce il tipo delle proprietà per il componente Navbar.
export type NavbarProps = {
    // Testo da visualizzare nel logo.
    logoText: string,
    // Array di items da passare a NavLinksList.
    items: NavLinksListProps["items"];
}

// Componente funzionale Navbar che accetta logoText e items come props.
export const Navbar = ({ logoText, items }: NavbarProps) => {
    return (
        <header>
            {/* Componente Logo per la parte sinistra della navbar, con il testo fornito. */}
            <Logo text={logoText} />
            {/* Componente NavLinksList per la lista degli items di navigazione, con gli elementi forniti. */}
            <NavLinksList items={items} />
        </header>
    )
}

