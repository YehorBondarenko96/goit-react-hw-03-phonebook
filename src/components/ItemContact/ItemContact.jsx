import css from '../Styles.module.css';

export const ItemContact = ({contact, updateStateForDelete}) => {
    return(
        <li key={contact.id} className={css.itemContscts}>
                <p className={css.pItemContacts}>{contact.name}: {contact.number}</p>
                <button id={contact.id} className={css.buttonDelete} type='button' onClick={updateStateForDelete}>
                    Delete
                </button>
        </li>
    )
}