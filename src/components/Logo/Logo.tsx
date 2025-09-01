import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHexagonNodes } from '@fortawesome/free-solid-svg-icons';
import "./Logo.css";

export type logoProps = {
    text: string;
}

// 'export const Logo' definisce e esporta un componente funzionale chiamato 'Logo'.
// Questo componente accetta un oggetto di props (proprietà) che corrisponde al tipo 'logoProps' che abbiamo appena definito.
// Usiamo la destrutturazione per estrarre direttamente la proprietà 'text' dall'oggetto delle props.
export const Logo = ({ text }: logoProps) => {
    // Il componente restituisce un elemento JSX.
    return (
        // Il testo passato tramite le props viene inserito all'interno del 'div'.
        <div id="logo">
            <FontAwesomeIcon className='icona' icon={faHexagonNodes} />{text}
        </div>
    )
}