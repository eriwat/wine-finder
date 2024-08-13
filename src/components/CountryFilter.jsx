import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const CountryFilter = ({ onFilterCountry }) => {

    const handleChange = (_, newValue) => {
        const codes = newValue.map(option => option.code);
        console.log("Selected codes:", codes);
        onFilterCountry(codes);
    };

    return (
        <div class="filter">
            <Autocomplete
                multiple
                id="country-filter"
                options={countries}
                disableCloseOnSelect
                getOptionLabel={(option) => option.name}
                onChange={handleChange}
                isOptionEqualToValue={(option, value) => option.code === value.code}
                renderOption={(props, option, { selected }) => {
                    const { key, ...optionProps } = props;
                    return (
                        <li key={key} {...optionProps}>
                            <Checkbox
                                icon={icon}
                                checkedIcon={checkedIcon}
                                style={{ marginRight: 8 }}
                                checked={selected}
                            />
                            {option.name}
                        </li>
                    );
                }}
                style={{ width: 500 }}
                renderInput={(params) => (
                    <TextField {...params} label="Filter" placeholder="Filter by countries" />
                )}
            />
        </div>
    );
}

const countries = [
    { code: 'ar', name: 'Argentina' },
    { code: 'au', name: 'Australia' },
    { code: 'at', name: 'Austria' },
    { code: 'cl', name: 'Chile' },
    { code: 'fr', name: 'France' },
    { code: 'de', name: 'Germany' },
    { code: 'it', name: 'Italy' },
    { code: 'pt', name: 'Portugal' },
    { code: 'za', name: 'South Africa' },
    { code: 'es', name: 'Spain' },
    { code: 'us', name: 'United States' }
];

export default CountryFilter;


