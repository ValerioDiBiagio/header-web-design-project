// Importa il tipo `ReactNode` da React per specificare che `icon` può essere un elemento JSX
import type { ReactNode } from 'react';

// Definisce il tipo delle props accettate dal componente NavLink
// 'href' e 'label' sono stringhe obbligatorie
// 'icon' è un `ReactNode` opzionale (può essere un'icona SVG, un altro componente, ecc.)
export type NavLinkProps = {
    href: string;
    label: string;
    icon?: ReactNode;
};

// Definisce e esporta il componente funzionale NavLink
// Destruttura le props `href`, `label` e `icon` dall'oggetto delle props
export const NavLink = ({ href, label, icon }: NavLinkProps) => {
    // Il componente restituisce un elemento di ancoraggio `<a>`
    return (
        // L'attributo `href` viene impostato dinamicamente con il valore della prop `href`
        <a href={href}>
            {/* Renderizza lo `span` contenente l'icona solo se la prop `icon` è presente.
                Questa è una renderizzazione condizionale.
            */}
            {icon && <span>{icon}</span>}
            {/* Renderizza un altro `span` per il testo della label */}
            <span>{label}</span>
        </a>
    );
};