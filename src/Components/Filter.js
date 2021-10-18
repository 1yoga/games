import styles from "./Filter.module.css"

let Filter = ({searchValue, setSearchValue, onChangeSearchInput, onChangeSort, isSort}) => {

    return (
        <div className={styles.contentUp}>
            <h1>{searchValue ? `Поиск по запросу: "${searchValue}"` : "Games"}</h1>
            <div>
                <button onClick={onChangeSort}>Сориторовка по алфавиту <img src={isSort ? "games/img/az.png" : "games/img/za.png"}
                                                                            alt="sortImg"/></button>
            </div>
            <div className={styles.searchBlock}>
                <img src="games/img/search.svg" alt="Search"/>
                {searchValue &&
                <img onClick={() => setSearchValue("")} className={styles.clear} src="games/img/btn-remove.svg" alt="Clear"/>}
                <input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск..."/>
            </div>
        </div>
    )
}

export default Filter