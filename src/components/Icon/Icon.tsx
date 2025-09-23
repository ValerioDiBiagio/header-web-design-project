// Imports necessari
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faHouse, faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons';

// Definisci i nomi delle icone che vuoi utilizzare
type IconName = 'home' | 'cart' | 'user';

// Definisci le props del componente Icon
type IconProps = {
    name: IconName;
    className?: string;
    size?: string;
    ariaLabel?: string;
};

// Componente funzionale Icon
export const Icon = ({ name, size, ariaLabel, ...props }: IconProps) => {
    let iconToRender: IconDefinition;

    if (name === 'home') {
        iconToRender = faHouse;
    } else if (name === 'cart') {
        iconToRender = faCartShopping;
    } else if (name === 'user') {
        iconToRender = faUser;
    } else {
        return null;
    }

    return <FontAwesomeIcon style={size ? { fontSize: size } : undefined} icon={iconToRender} {...props} />;
};