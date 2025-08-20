import { NavLink } from "../NavLink/NavLink";
import type { NavLinkProps } from '../NavLink/NavLink';

export type NavLinksListProps = {
    links: NavLinkProps[];
};

export const NavLinksList = ({ links }: NavLinksListProps) => {
    return (
        <nav>
            <ul>
                {links.map((link, index) =>
                    <li key={index} >
                        <NavLink {...link} />
                    </li>)}
            </ul>
        </nav>
    )
}