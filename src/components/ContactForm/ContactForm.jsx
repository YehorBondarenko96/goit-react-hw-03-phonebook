import css from '../Styles.module.css';

export const ContactForm = ({updateStateForAdd}) => {
    return (
        <form className={css.form} onSubmit={updateStateForAdd}>
            <label className={css.label}>
                <span className={css.nameInput}>Name</span>
            <input className={css.input} type="text" name="name" required />
            </label>
            <label className={css.label}>
                <span className={css.nameInput}>Number</span>
                <input className={css.input} type="tel" name="number" required />
            </label>
            <button className={css.button} type="submit">Add contact</button>
        </form>
    )
};