import {useState, useEffect} from "react";
import Card from "./Components/Card";
import Filter from "./Components/Filter"


function App() {
    useEffect(() => {
        async function fetchData() {
            try { const gamesResponse = await fetch('https://pcg-appstore.s3.amazonaws.com/applications_for_import.json')
                let data = await gamesResponse.json()
                setGamesData(data.data)
            } catch (error) {
                alert("Ошибка при запросе данных")
                console.error(error)
            }}
        fetchData()
    }, [])





    const [gamesData, setGamesData] = useState([])
    const [searchValue, setSearchValue] = useState("")
    const [isSort, setIsSort] = useState(true)
    const [ordersStore, setOrdersStore] = useState([])


    const onChangeSearchInput = (event) => {
        setSearchValue(event.target.value)
    }
    const onChangeSort = () => {
        setIsSort(!isSort)
        toSort()
    }
    const toSort = () => {
        isSort
            ? (gamesData.sort((a, b) => a.name < b.name ? 1 : -1))
            : (gamesData.sort((a, b) => a.name > b.name ? 1 : -1))
    }
    const addToOrdersStore = (obj) => {
        setOrdersStore((prev) => [...prev, obj])
    }

    const renderItems = () => {
        const filteredItems = gamesData.filter((item) =>
            item.name.toLowerCase().includes(searchValue.toLowerCase()),
        );
        return filteredItems.map((item, index) => (
            <Card
                key={index}
                name={item.name}
                icon_url={item.icon_url}
                onPlus={(obj) => addToOrdersStore(obj)}
            />
        ))
    }

    return (<div className="wrapper">
            <div className="filter">
                <Filter
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                    onChangeSearchInput={onChangeSearchInput}
                    onChangeSort={onChangeSort}
                    isSort={isSort}
                />
            </div>

            <div className="content">
                {renderItems()}
            </div>
        </div>
    );
}

export default App;
