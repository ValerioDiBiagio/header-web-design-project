import { NavLink } from "../NavLink/NavLink";
import type { NavLinkProps } from '../NavLink/NavLink';
import "./NavLinkList.css"

// Definisce il tipo delle proprietà del componente NavLinksList.
// items: un array di oggetti di tipo NavLinkProps.
export type NavLinksListProps = {
    items: NavLinkProps[];
};

// Componente NavLinksList che accetta un array di items e li renderizza.
export const NavLinksList = ({ items }: NavLinksListProps) => {
    return (
        <nav>
            <ul className="list-items">
                {/* Mappa l'array di items e crea un elemento <li> con un componente NavLink per ogni elemento. */}
                {items.map((item, index) =>
                    <li key={index} > {/* La chiave è importante per le liste in React. */}
                        <NavLink {...item} /> {/* Passa tutte le proprietà del link al componente NavLink. */}
                    </li>)}
            </ul>
        </nav>
    )
}