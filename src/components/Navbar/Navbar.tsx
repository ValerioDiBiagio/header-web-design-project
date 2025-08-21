import { Logo } from "../Logo/Logo";
import { NavLinksList, type NavLinksListProps } from "../NavLinksList/NavLinksList";

export type NavbarProps = {
    logoText: string,
    items: NavLinksListProps["items"];
}

export const Navbar = ({ logoText, items }: NavbarProps) => {
    return (
        <header>
            <Logo text={logoText} />
            <NavLinksList items={items} />
        </header>
    )
}

