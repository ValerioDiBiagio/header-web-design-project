import { useState } from 'react'; // Importa useState
import { Logo } from "../Logo/Logo";
import { NavLinksList, type NavLinksListProps } from "../NavLinksList/NavLinksList";
import "./Navbar.css";

export type NavbarProps = {
    logoText: string;
    items: NavLinksListProps["items"];
};

export const Navbar = ({ logoText, items }: NavbarProps) => {
    // 1. Inizializza lo stato 'selectedLink' per tenere traccia del link attivo.
    // L'espressione cerca un elemento con la prop 'selected: true'
    // e usa la sua 'label' come valore iniziale. Se non trova nulla, il valore iniziale sarà 'null'.
    const [selectedLink, setSelectedLink] = useState<string | null>(
        items.find(item => item.selected)?.label || null
    );

    // 2. Funzione per gestire il clic: seleziona se non selezionato, deseleziona se già selezionato.
    const handleLinkClick = (label: string) => {
        if (selectedLink === label) {
            // Se il link cliccato è già selezionato, lo deseleziona.
            setSelectedLink(null);
        } else {
            // Altrimenti, seleziona il nuovo link.
            setSelectedLink(label);
        }
    };

    // 3. Mappa gli elementi per aggiungere le prop `selected` e `onClick`
    // dinamicamente in base allo stato.
    const updatedItems = items.map(item => ({
        ...item,
        selected: item.label === selectedLink,
        onClick: () => handleLinkClick(item.label)
    }));

    // Ora dividi gli elementi *aggiornati* in tre gruppi.
    const homeLink = updatedItems.find(item => item.label === 'Home');
    const centerLinks = updatedItems.filter(item => ['Products', 'About', 'Contacts'].includes(item.label));
    const rightLinks = updatedItems.filter(item => ['Cart', 'User'].includes(item.label));

    return (
        <header className="navbar-container">
            <div className="navbar-left">
                {homeLink && <NavLinksList items={[homeLink]} ariaLabel="Home Menu" />}
            </div>

            <div className="navbar-center">
                <Logo text={logoText} />
                <NavLinksList items={centerLinks} ariaLabel="Nav Menu" />
            </div>

            <div className="navbar-right">
                <NavLinksList items={rightLinks} ariaLabel="Shop Menu" />
            </div>
        </header>
    );
};