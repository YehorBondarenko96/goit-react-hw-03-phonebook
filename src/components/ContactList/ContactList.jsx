import css from '../Styles.module.css';
import { ItemContact } from 'components/ItemContact/ItemContact';

export const ContactList = ({contacts, updateStateForDelete}) => {
    return(
        <ul className={css.listContacts}>
            {contacts.length !== 0 &&
            contacts.map((contact) => (
                <ItemContact 
                key={contact.id}
                contact={contact}
                updateStateForDelete={updateStateForDelete}
                />
            ))
            }
        </ul>
    )
}