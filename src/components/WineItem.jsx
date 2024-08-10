export default function ({ wine }) {

    const countryCodeFormatted = wine.vintage.wine.region.country.code.toUpperCase();
    const rating = wine.vintage.statistics.wine_ratings_average;

    function getStarPercentage () {
        return `${(rating / 5) * 100}%`;
    };

    return (
        <li className="wine-item fade-in">
            <div className="wine-item__image-container">
                <img
                    className="wine-item__image"
                    src={`https:${wine.vintage.image.variations.bottle_small}`}
                    alt={wine.vintage.name}
                />
            </div>
            <div className="wine-item__details">
                <p className="wine-item__winery-name">{wine.vintage.wine.winery.name}</p>
                <p className="wine-item__wine-name">{wine.vintage.name}</p>
                <p className="wine-item__region">
                    <img
                        className="wine-item__flag"
                        src={`https://web-common.vivino.com/assets/countryFlags/${countryCodeFormatted}-48.png`}
                        alt={`${countryCodeFormatted} flag`}
                    />
                    {wine.vintage.wine.region.name}, {wine.vintage.wine.region.country.name}
                </p>
            </div>
            <div className="wine-item__rating-container">
                <p className="wine-item__rating" aria-label={`Average rating: ${rating} out of 5`}>{wine.vintage.statistics.wine_ratings_average}</p>
                <p className="wine-item__rating-stars" aria-hidden="true">
                    <span className="wine-item__rating-stars-background">★★★★★</span>
                    <span className="wine-item__rating-stars-foreground" style={{ width: getStarPercentage() }}>
                        ★★★★★
                    </span>
                </p>
                <p className="wine-item__rating-count">                  
                    {wine.vintage.statistics.wine_ratings_count} ratings
                </p>
            </div>
        </li>
    )
}