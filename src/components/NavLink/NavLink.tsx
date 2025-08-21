// Importa il tipo `ReactNode` da React per specificare che `icon` può essere un elemento JSX
import type { ReactNode } from 'react';

// Definisce il tipo delle props accettate dal componente NavLink
// 'href' e 'label' sono stringhe obbligatorie
// 'icon' è un `ReactNode` opzionale (può essere un'icona SVG, un altro componente, ecc.)
export type NavLinkProps = {
    label: string;
    icon?: ReactNode;
    arialabel?: string;
    onClick?: () => void;
};

// Definisce e esporta il componente funzionale NavLink
// Destruttura le props `href`, `label` e `icon` dall'oggetto delle props
export const NavLink = ({ label, icon, arialabel, onClick }: NavLinkProps) => {
    // Il componente restituisce un elemento di ancoraggio `<a>`
    return (
        // L'attributo `href` viene impostato dinamicamente con il valore della prop `href`
        <button onClick={onClick} aria-label={arialabel}>
            {/* Renderizza lo `span` contenente l'icona solo se la prop `icon` è presente.
                Questa è una renderizzazione condizionale.
            */}
            {icon && <span>{icon}</span>}
            {/* Renderizza un altro `span` per il testo della label */}
            <span>{label}</span>
        </button>
    );
};