import Card from "./Card";

let ListOfGames = ({gamesData, searchValue, removeFromOrdersStore}) => {
    const filteredItems = gamesData.filter((item) =>
        item.name.toLowerCase().includes(searchValue.toLowerCase()),
    );
    return (
        <div className="listOfGames">
            {filteredItems.map((item, index) => (
                <Card
                    key={index}
                    name={item.name}
                    icon_url={item.icon_url}
                    onRemove={(obj) => removeFromOrdersStore(obj)}
                />
            ))}
        </div>
    )
}

export default ListOfGames