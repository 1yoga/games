import {useState} from "react";
import Filter from "./Components/Filter"
import ListOfGames from "./Components/ListOfGames";
import TotalGames from "./Components/TotalGames";

function App() {
    const [gamesData, setGamesData] = useState([])
    const [searchValue, setSearchValue] = useState("")
    const [isSort, setIsSort] = useState(true)
    const [list, setList] = useState([])

    async function fetchData() {
        try {
            const gamesResponse = await fetch('https://pcg-appstore.s3.amazonaws.com/applications_for_import.json')
            let data = await gamesResponse.json()
            setGamesData(data.data)
        } catch (error) {
            alert("Ошибка при запросе данных")
            console.error(error)
        }
    }

    const onChangeSearchInput = (event) => {
        setSearchValue(event.target.value)
    }
    const onChangeSort = () => {
        setIsSort(!isSort)
        toSort()
    }
    const toSort = () => {
        isSort
            ? (list.sort((a, b) => a.name < b.name ? 1 : -1))
            : (list.sort((a, b) => a.name > b.name ? 1 : -1))
    }
    const addToList = (obj) => {
        if (list.find((item) => item.name === obj.name)){
            console.error("Эта игра уже в списке")
        } else {
            setList((prev) => [...prev, obj])
        }

    }
    const removeFromOrdersStore = (name) => {
        setList(prev => prev.filter(item => item.name !== name))
    }


    return (
        <div className="wrapper">
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
                <div className="totalGames">
                    <TotalGames
                        gamesData={gamesData}
                        addToList={addToList}
                        loading={fetchData}/>
                </div>
                <div className="wrapperListOfGames">
                    <ListOfGames
                        gamesData={list}
                        searchValue={searchValue}
                        removeFromOrdersStore={removeFromOrdersStore}
                    />
                </div>
            </div>
        </div>
    );
}

export default App;
