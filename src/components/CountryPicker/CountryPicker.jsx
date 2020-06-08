import React, {useState, useEffect} from 'react';
import  styles from './CountryPicker.module.css';
import { fetchCountries } from '../../api';
import InputLabel from '@material-ui/core/InputLabel';

import MenuItem from '@material-ui/core/MenuItem'
import  FormControl  from '@material-ui/core/FormControl';
import  Select from '@material-ui/core/Select';




const CountryPicker = ({handleCountryChange}) => {

    const [fetchedCountries, setFetchedCountries] = useState([])

    useEffect(() => {
        const fetchApi = async() => {
            let fd = await fetchCountries();   
            setFetchedCountries(fd);
        }
        fetchApi();
    }, [setFetchedCountries])
    

    return (
            <FormControl variant="outlined" className={styles.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">Countries</InputLabel>
                <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}
                    label="Age"
                >
                <MenuItem value='' key="-1">
                    Gobal
                </MenuItem>
                    {fetchedCountries.map((country, i) => <MenuItem key={i} value={country}>{country}</MenuItem> )}
                </Select>
            </FormControl>
    )
}

export default CountryPicker;