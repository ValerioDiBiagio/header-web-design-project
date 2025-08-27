import { NavLink } from "../NavLink/NavLink";
import type { NavLinkProps } from '../NavLink/NavLink';
import "./NavLinkList.css"

// Aggiungi le prop opzionali `selected` e `onClick` al tipo degli items.
export type NavLinksListProps = {
    items: (NavLinkProps & { selected?: boolean; onClick?: () => void })[];
    ariaLabel: string;
    className?: string;
};

export const NavLinksList = ({ items, ariaLabel }: NavLinksListProps) => {



    return (
        <nav aria-label={ariaLabel}>
            <ul className="list-items">
                {items.map((item, index) =>
                    <li key={index} >
                        {/* Passa tutte le proprietà del link al componente NavLink. */}
                        <NavLink {...item} />
                    </li>)}
            </ul>
        </nav>
    )
}