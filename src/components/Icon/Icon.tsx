import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';

// Definisci i nomi delle icone che vuoi utilizzare
type IconName = 'home' | 'cart' | 'user';

// Mappa i nomi delle stringhe alle icone di Font Awesome
const icons: Record<IconName, IconDefinition> = {
    home: faHouse,
    cart: faCartShopping,
    user: faUser
};

// Definisci le props del componente Icon
type IconProps = {
    name: IconName;
    className?: string;
    size?: string;
};

// Componente funzionale Icon
export const Icon = ({ name, size, ...props }: IconProps) => {
    const iconToRender = icons[name];

    // Controlla se l'icona esiste nella mappa prima di renderizzarla
    if (!iconToRender) {
        return null;
    }

    // Restituisce l'icona di Font Awesome con le props passate
    return <FontAwesomeIcon style={size ? { fontSize: size } : undefined} icon={iconToRender} {...props} />;
};