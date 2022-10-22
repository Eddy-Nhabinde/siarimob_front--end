import React from 'react';
import TextField from '@material-ui/core/TextField';
import { NumericFormat } from 'react-number-format';

function NumberFormatCustom(props) {
    const { inputRef, onChange, ...other } = props;

    return (
        <NumericFormat
            {...other}
            getInputRef={inputRef}
            onValueChange={(values) => {
                onChange({
                    target: {
                        name: props.name,
                        value: values.value,
                    },
                });
            }}
            isNumericString
        />
    );
}

export default function NumberInput({inpuChanged}) {
    return (
        <TextField
            name="numberformat"
            id="formatted-numberformat-input"
            InputProps={{
                inputComponent: NumberFormatCustom,
            }}
            variant="outlined"
            size='small'
            fullWidth
            placeholder='Preco'
            onChange={inpuChanged}
            style={{minWidth: 150, width: 'auto'}}
        />
    );
}
