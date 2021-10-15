import styles from "./Card.module.css"

let Card = ({icon_url, name, onPlus}) => {
    const obj = {name, icon_url}

    const onClickPlus = () => {
        onPlus(obj)
    }

    return (
        <div className={styles.card}>
            <img width={100} height={100} src={icon_url} alt="gameImage"/>
            <h5>{name}</h5>
            <div className={styles.cardFooter}>
                <img onClick={onClickPlus} className={styles.plus} src={"img/btn-plus.svg"} alt="Plus"/>
            </div>
        </div>
    )
}

export default Card