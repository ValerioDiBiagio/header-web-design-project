import { NavLink } from "../NavLink/NavLink";
import type { NavLinkProps } from '../NavLink/NavLink';
import "./NavLinkList.css"

export type NavLinksListProps = {
    items: (NavLinkProps & { selected?: boolean; onClick?: () => void })[];
    ariaLabel: string;
    className?: string;
};

export const NavLinksList = ({ items, ariaLabel, className }: NavLinksListProps) => {
    return (
        <nav aria-label={ariaLabel} className={`nav-items ${className || ''}`}>
            <ul className="list-items">
                {items.map((item, index) =>
                    <li key={index}>
                        <NavLink {...item} />
                    </li>
                )}
            </ul>
        </nav>
    );
};