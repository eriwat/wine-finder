export default function Filter({onSelectCountry, selectedCountry}) {

    const countries = [
        { "code": "ar", "name": "Argentina" },
        { "code": "au", "name": "Australia" },
        { "code": "at", "name": "Austria" },
        { "code": "cl", "name": "Chile" },
        { "code": "fr", "name": "France" },
        { "code": "de", "name": "Germany" },
        { "code": "it", "name": "Italy" },
        { "code": "pt", "name": "Portugal" },
        { "code": "za", "name": "South Africa" },
        { "code": "es", "name": "Spain" },
        { "code": "us", "name": "United States" }
      ];
    return(
        <fieldset className="filter__container">
            <legend className="filter__title">Filter by Country</legend>
            {countries.map(country => {
                const isActive = selectedCountry.includes(country.code);
                const baseClasses = 'filter__button';
                const activeClass = isActive ? 'filter__button-active' : '';
                
                return (
                    <button
                        key={country.code}
                        className={`${baseClasses} ${activeClass}`}     
                        onClick={() => onSelectCountry(country.code)}
                        aria-pressed={isActive}
                        aria-label={`Filter by ${country.name}`}
                    >
                        {country.name}
                    </button>
                );
            })}
        </fieldset>
    )
}