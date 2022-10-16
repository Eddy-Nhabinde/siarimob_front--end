import React from 'react';
import Radio from '@material-ui/core/Radio';
import { FormControlLabel } from '@material-ui/core';


export default function RadioButtons({ setNormal }) {
    const [selectedValue, setSelectedValue] = React.useState('a');

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    return (
        <div>
            <FormControlLabel value="female" control={
                <Radio
                    onClick={() => { setNormal(true) }}
                    checked={selectedValue === 'a'}
                    onChange={handleChange}
                    value="a"
                    label='a'
                    name="radio-button-demo"
                    inputProps={{ 'aria-label': 'A' }}
                />
            } label="Quero Arrendar" />

            <FormControlLabel value="female" control={
                <Radio
                    onClick={() => { setNormal(false) }}
                    checked={selectedValue === 'b'}
                    onChange={handleChange}
                    value="b"
                    name="radio-button-demo"
                    inputProps={{ 'aria-label': 'B' }}
                />
            } label="Tenho Propriedades" />
        </div>
    );
}
