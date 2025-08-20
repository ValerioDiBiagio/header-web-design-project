import { Logo } from "../Logo/Logo";
import { NavLinksList, type NavLinksListProps } from "../NavLinksList/NavLinksList";

export type NavbarProps = {
    logoText: string,
    links: NavLinksListProps["links"];
}

export const Navbar = ({ logoText, links }: NavbarProps) => {
    return (
        <header>
            <Logo text={logoText} />
            <NavLinksList links={links} />
        </header>
    )
}

