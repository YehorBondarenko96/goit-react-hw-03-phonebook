import css from '../Styles.module.css'

export const Filter = ({filterWithState, updateStateForFilter}) => {
        return(
            <>
                <label className={css.label}>
                <span className={css.nameInput}>Find contacts by name</span>
                <input 
                value={filterWithState}
                className={css.input} 
                type="text" 
                name="filter" 
                onChange={updateStateForFilter}
                />
            </label>
            </>
        )
}