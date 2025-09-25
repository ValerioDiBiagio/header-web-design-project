import { useState, useEffect, useRef } from 'react';
import { Logo } from "../Logo/Logo";
import { NavLinksList, type NavLinksListProps } from "../NavLinksList/NavLinksList";
import "./Header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faUser, faShoppingCart, faHome } from '@fortawesome/free-solid-svg-icons';

// Definisce i tipi per le props del componente
export type HeaderProps = {
    logoText: string;
    items: NavLinksListProps["items"];
};
// Inizio del componente
export const Header = ({ logoText, items }: HeaderProps) => {
    // Stato per il link attualmente selezionato
    const [selectedLink, setSelectedLink] = useState<string | null>(
        items.find(item => item.selected)?.label || null
    );
    // Stato per la visibilità del menu mobile
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    // Riferimento all'elemento header per rilevare i click esterni
    const headerRef = useRef<HTMLDivElement>(null);

    // Gestore per il click sui link
    const handleLinkClick = (label: string) => {
        // Logica per selezionare/deselezionare il link
        if (selectedLink === label) {
            setSelectedLink(null);
        } else {
            setSelectedLink(label);
        }
        // Chiude il menu mobile se è aperto
        if (isMenuOpen) {
            setIsMenuOpen(false);
        }
    };

    // Funzione per aprire/chiudere il menu mobile
    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Mappa gli items per aggiungere icone, stato di selezione e gestori di click
    const updatedItems = items.map(item => {
        const newItem = { ...item };
        // Assegna icone specifiche in base al 'label'
        if (newItem.label === 'Carrello') {
            newItem.icon = <FontAwesomeIcon icon={faShoppingCart} />;
        }
        if (newItem.label === 'Utente') {
            newItem.icon = <FontAwesomeIcon icon={faUser} />;
        }
        if (newItem.label === 'Home') {
            newItem.icon = <FontAwesomeIcon icon={faHome} />;
        }
        // Imposta lo stato di selezione
        newItem.selected = newItem.label === selectedLink;
        // Aggiunge il gestore di click
        newItem.onClick = () => handleLinkClick(newItem.label);
        return newItem;
    });

    // Filtra i link in gruppi per il layout
    const mainLinks = updatedItems.filter(item => ['Home', 'Informatica', 'Telefonia', 'Gaming', 'Elettrodomestici'].includes(item.label));
    const homeLink = mainLinks.find(item => item.label === 'Home');
    const centerLinks = mainLinks.filter(item => item.label !== 'Home');
    const rightLinks = updatedItems.filter(item => ['Carrello', 'Utente'].includes(item.label));

    // Hook per gestire i click esterni all'header
    useEffect(() => {
        // Funzione per rilevare un click esterno
        const handleOutsideClick = (event: MouseEvent) => {
            if (headerRef.current && !headerRef.current.contains(event.target as Node) && isMenuOpen) {
                // Chiude il menu se il click è esterno e il menu è aperto
                setIsMenuOpen(false);
            } else if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
                // Deseleziona il link se il click è esterno
                setSelectedLink(null);
            }
        };

        // Aggiunge l'event listener
        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            // Funzione di cleanup
            document.removeEventListener('mousedown', handleOutsideClick);
        };
        // L'effetto si riesegue solo quando 'isMenuOpen' cambia
    }, [isMenuOpen]);

    return (
        // JSX del componente
        <header ref={headerRef} className="header-container">
            {/* Div di sinistra: pulsante hamburger e link Home per desktop */}
            <div className="header-left">
                <button
                    className="hamburger-menu"
                    onClick={handleMenuToggle}
                    aria-expanded={isMenuOpen}
                    aria-controls="mobile-nav-menu"
                    aria-label="Apri menu">
                    {!isMenuOpen && <FontAwesomeIcon icon={faBars} />}
                </button>
                {homeLink && (
                    <NavLinksList items={[homeLink]} ariaLabel="Home Menu" className="desktop-nav-links" />
                )}
                <span className="sr-only">Apri menu</span>
            </div>

            {/* Div centrale: logo e link principali per desktop */}
            <div className="header-center">
                <Logo text={logoText} />
                {centerLinks.length > 0 && (
                    <NavLinksList items={centerLinks} ariaLabel="Nav Menu" className="desktop-nav-links" />
                )}
            </div>

            {/* Div di destra: link Carrello e Utente */}
            <div className="header-right">
                <NavLinksList items={rightLinks} ariaLabel="Shop Menu" />
            </div>

            {/* Overlay del menu mobile */}
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