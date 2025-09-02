import { useState, useEffect, useRef } from 'react';
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
    const navbarRef = useRef<HTMLDivElement>(null);

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

    const updatedItems = items.map(item => {
        const newItem = { ...item };
        if (newItem.label === 'Carrello') {
            newItem.icon = <FontAwesomeIcon icon={faShoppingCart} />;
        }
        if (newItem.label === 'Utente') {
            newItem.icon = <FontAwesomeIcon icon={faUser} />;
        }
        if (newItem.label === 'Home') {
            newItem.icon = <FontAwesomeIcon icon={faHome} />;
        }
        newItem.selected = newItem.label === selectedLink;
        newItem.onClick = () => handleLinkClick(newItem.label);
        return newItem;
    });

    const mainLinks = updatedItems.filter(item => ['Home', 'Informatica', 'Telefonia', 'Gaming', 'Elettrodomestici'].includes(item.label));
    const homeLink = mainLinks.find(item => item.label === 'Home');
    const centerLinks = mainLinks.filter(item => item.label !== 'Home');
    const rightLinks = updatedItems.filter(item => ['Carrello', 'Utente'].includes(item.label));

    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            if (navbarRef.current && !navbarRef.current.contains(event.target as Node) && isMenuOpen) {
                setIsMenuOpen(false);
            } else if (navbarRef.current && !navbarRef.current.contains(event.target as Node)) {
                setSelectedLink(null);
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [isMenuOpen]);

    return (
        <header ref={navbarRef} className="navbar-container">
            {/* Div di sinistra: contiene solo il pulsante del menu hamburger */}
            <div className="navbar-left">
                <button
                    className="hamburger-menu"
                    onClick={handleMenuToggle}
                    aria-expanded={isMenuOpen}
                    aria-controls="mobile-nav-menu"
                    aria-label="Apri menu">
                    {/* Renderizza l'icona hamburger solo se il menu è chiuso */}
                    {!isMenuOpen && <FontAwesomeIcon icon={faBars} />}
                </button>
                {homeLink && (
                    <NavLinksList items={[homeLink]} ariaLabel="Home Menu" className="desktop-nav-links" />
                )}
                <span className="sr-only">Apri menu</span>
            </div>

            {/* Div centrale */}
            <div className="navbar-center">
                <Logo text={logoText} />
                {centerLinks.length > 0 && (
                    <NavLinksList items={centerLinks} ariaLabel="Nav Menu" className="desktop-nav-links" />
                )}
            </div>

            {/* Div di destra */}
            <div className="navbar-right">
                <NavLinksList items={rightLinks} ariaLabel="Shop Menu" />
            </div>

            {/* Menu mobile con pulsante di chiusura separato */}
            <div className={`mobile-menu-overlay ${isMenuOpen ? 'active' : ''}`} id="mobile-nav-menu">
                <button
                    className="close-menu-button"
                    onClick={handleMenuToggle}
                    aria-label="Chiudi menu">
                    <FontAwesomeIcon icon={faTimes} />
                </button>
                <NavLinksList items={mainLinks} ariaLabel="Mobile Nav Menu" className="mobile-nav-list" />
            </div>
        </header>
    );
};