// Importa il tipo `ReactNode` da React per specificare che `icon` può essere un elemento JSX
import type { ReactNode } from 'react';
import "./NavLink.css"

// Definisce il tipo delle props accettate dal componente NavLink
// 'icon' è un `ReactNode` opzionale (può essere un'icona SVG, un altro componente, ecc.)
export type NavLinkProps = {
    label: string;
    icon?: ReactNode;
    arialabel?: string;
    onClick?: () => void;
    selected?: boolean;
};

// Destruttura le props `label`, `icon`, `onClick` e `selected` dall'oggetto delle props
export const NavLink = ({ label, icon, onClick, selected }: NavLinkProps) => {
    // Il componente restituisce un elemento `<button>`
    return (
        // Utilizza `label` come valore per l'attributo `aria-label`
        <button
            onClick={onClick}
            aria-label={label}
            className={`items ${selected ? "items-selected" : ""}`}
        >
            {/* Renderizza un <div> contenente l'icona solo se la prop `icon` è presente. */}
            {icon && <div className='icon'>{icon}</div>}

            {/* Renderizza uno <span> per il testo della label */}
            <span>{label}</span>
        </button>
    );
};