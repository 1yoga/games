import styles from "./Card.module.css"

let Card = ({icon_url, name, onRemove}) => {
    const obj = {name, icon_url}


    const onClickRemove = () => {
        onRemove(obj.name)
    }


    return (
        <div className={styles.card}>
            <img className={styles.icon} src={icon_url} alt="gameImage"/>
            <h5>{name}</h5>
            <div className={styles.cardFooter}>
                <img onClick={onClickRemove} className={styles.plus} src={"img/delete.svg"} alt="Delete"/>
            </div>
        </div>
    )
}

export default Card