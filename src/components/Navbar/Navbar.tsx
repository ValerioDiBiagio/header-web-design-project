import { useState } from 'react';
import { Logo } from "../Logo/Logo";
import { NavLinksList, type NavLinksListProps } from "../NavLinksList/NavLinksList";
import "./Navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faUser, faShoppingCart, faHome } from '@fortawesome/free-solid-svg-icons';

export type NavbarProps = {
    logoText: string;
    items: NavLinksListProps["items"];
};

export const Navbar = ({ logoText, items }: NavbarProps) => {
    const [selectedLink, setSelectedLink] = useState<string | null>(
        items.find(item => item.selected)?.label || null
    );
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleLinkClick = (label: string) => {
        if (selectedLink === label) {
            setSelectedLink(null);
        } else {
            setSelectedLink(label);
        }
        if (isMenuOpen) {
            setIsMenuOpen(false);
        }
    };

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Aggiungi le icone a tutti i link rilevanti
    const updatedItems = items.map(item => {
        const newItem = { ...item };
        if (newItem.label === 'Cart') {
            newItem.icon = <FontAwesomeIcon icon={faShoppingCart} />;
        }
        if (newItem.label === 'User') {
            newItem.icon = <FontAwesomeIcon icon={faUser} />;
        }
        if (newItem.label === 'Home') {
            newItem.icon = <FontAwesomeIcon icon={faHome} />;
        }
        newItem.selected = newItem.label === selectedLink;
        newItem.onClick = () => handleLinkClick(newItem.label);
        return newItem;
    });

    // Separa i link per i diversi layout
    const mainLinks = updatedItems.filter(item => ['Home', 'Products', 'About', 'Contacts'].includes(item.label));
    const homeLink = mainLinks.find(item => item.label === 'Home'); // Cerca il link "Home" separatamente
    const centerLinks = mainLinks.filter(item => item.label !== 'Home'); // Filtra il resto
    const rightLinks = updatedItems.filter(item => ['Cart', 'User'].includes(item.label));

    return (
        <header className="navbar-container">
            {/* Div di sinistra: contiene solo il pulsante del menu hamburger su mobile */}
            <div className="navbar-left">
                <button
                    className="hamburger-menu"
                    onClick={handleMenuToggle}
                    aria-expanded={isMenuOpen}
                    aria-controls="mobile-nav-menu"
                    aria-label="Apri menu">
                    {isMenuOpen ? <FontAwesomeIcon icon={faTimes} /> : <FontAwesomeIcon icon={faBars} />}
                </button>
                {/* Il link "Home" per il desktop rimane qui, nascosto su mobile via CSS */}
                {homeLink && (
                    <NavLinksList items={[homeLink]} ariaLabel="Home Menu" className="desktop-nav-links" />
                )}
                <span className="sr-only">Apri menu</span>
            </div>

            {/* Div centrale: contiene il logo e i link principali (Products, About, Contacts) */}
            <div className="navbar-center">
                <Logo text={logoText} />
                {centerLinks.length > 0 && (
                    <NavLinksList items={centerLinks} ariaLabel="Nav Menu" className="desktop-nav-links" />
                )}
            </div>

            {/* Div di destra: contiene i link Cart e User */}
            <div className="navbar-right">
                <NavLinksList items={rightLinks} ariaLabel="Shop Menu" />
            </div>

            {/* Menu mobile, contiene tutti i link principali, incluso il link "Home" */}
            <div className={`mobile-menu-overlay ${isMenuOpen ? 'active' : ''}`} id="mobile-nav-menu">
                <NavLinksList items={mainLinks} ariaLabel="Mobile Nav Menu" className="mobile-nav-list" />
            </div>
        </header>
    );
};