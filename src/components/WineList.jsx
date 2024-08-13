import WineItem from "./WineItem";

const WineList = ({wineData}) => {
    return (
        <ul className="wine-list">         
            {wineData && wineData.map((wine) =>
                <WineItem 
                    key={wine.vintage.id}
                    wine={wine}
                />)}
        </ul>
    )
};
export default WineList;