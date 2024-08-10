

import WineItem from "./WineItem";

export default function WineList({wineData}) {
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