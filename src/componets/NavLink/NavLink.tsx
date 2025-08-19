import type { ReactNode } from 'react';

export type NavLinkProps = {
    href: string;
    label: string;
    icon?: ReactNode;
};

export const NavLink = ({ href, label, icon }: NavLinkProps) => {
    return (

        <a href={href}>
            {icon && <span>{icon}</span>}
            <span>{label}</span>
        </a>
    );
};