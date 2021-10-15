let TotalGames = ({gamesData, addToList, loading}) => {

    return (
        <>
            {(!gamesData || gamesData.length===0)
                ? <button onClick={loading}>Загрузка</button>
                : <ul>
                    {gamesData.map((item, index) => (
                        <li key={index} onClick={() => addToList(item)}>
                            <img width={42} height={42} src={item.icon_url} alt=""/>
                            <span>{item.name}</span>
                        </li>
                    ))}
                </ul> }

        </>
    )
}

export default TotalGames