import { Logo } from "../Logo/Logo";
import { NavLinksList, type NavLinksListProps } from "../NavLinksList/NavLinksList";
import "./Navbar.css";

export type NavbarProps = {
    logoText: string;
    items: NavLinksListProps["items"];
};

export const Navbar = ({ logoText, items }: NavbarProps) => {
    // Dividi gli elementi in tre gruppi: sinistra, centro e destra.
    const homeLink = items.find(item => item.label === 'Home');
    const centerLinks = items.filter(item => ['Products', 'About', 'Contacts'].includes(item.label));
    const rightLinks = items.filter(item => ['Wishlist', 'Cart'].includes(item.label));

    return (
        <header className="navbar-container">
            {/* Sezione Sinistra per "Home" */}
            <div>
                {homeLink && <NavLinksList items={[homeLink]} />}
            </div>

            {/* Sezione Centrale (Logo e Links) */}
            <div className="navbar-center">
                <Logo text={logoText} />
                <NavLinksList items={centerLinks} />
            </div>

            {/* Sezione Destra per Wishlist e Cart */}
            <div>
                <NavLinksList items={rightLinks} />
            </div>
        </header>
    );
};