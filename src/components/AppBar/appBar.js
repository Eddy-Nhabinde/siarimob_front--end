import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import styles from './appBar.module.css'


export default function ButtonAppBar() {

    return (
        <AppBar position="static">
            <Toolbar style={{ backgroundColor: 'rgb(71, 106, 209)' }}>
                <div className={styles.div}>
                    <Typography variant="h6" style={{ marginTop: '5px' }}>
                        <span style={{ fontSize: '23px' }}>SIAR-IMOB</span>
                    </Typography>
                    <div>
                        <span style={{ fontSize: '17px' }}>Login</span>
                        <span style={{ fontSize: '17px' }}>Register</span>
                        <span style={{ fontSize: '17px' }}>About</span>
                    </div>
                </div>
            </Toolbar>
        </AppBar>
    );
}
