import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
    formControl: {
        marginLeft: 10,
        minWidth: 200,
    },
}));

export default function SelectM({ Label, data, setValue }) {
    const classes = useStyles();
    const [state, setState] = React.useState({
        age: '',
        name: 'hai',
    });

    const handleChange = (event) => {
        const name = event.target.name;
        setState({
            ...state,
            [name]: event.target.value,
        });
        setValue(event.target.value)
    };

    return (
        <div>
            <FormControl variant="outlined" className={classes.formControl} size='small'>
                <InputLabel htmlFor="outlined-age-native-simple">{Label}</InputLabel>
                <Select
                    native
                    value={state.age}
                    onChange={handleChange}
                    label={Label}
                    inputProps={{
                        name: 'age',
                        id: 'outlined-age-native-simple',
                    }}
                >
                    {data && <option aria-label="None" value="" />}
                    {
                        data?.map((val) => {
                            return (
                                <option value={val.id}>{val.nome}</option>
                            )
                        })
                    }

                </Select>
            </FormControl>
        </div>
    );
}
