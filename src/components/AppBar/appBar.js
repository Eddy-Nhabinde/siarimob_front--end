import React, { useContext } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import styles from './appBar.module.css'
import { Link } from 'react-router-dom';
import { LoginContext } from '../../contexts/loginContext';

export default function ButtonAppBar() {
    const { setLoginContext } = useContext(LoginContext)
    const [login, SetLogin] = setLoginContext
    return (
        <AppBar position="static">
            <Toolbar style={{ backgroundColor: 'rgb(71, 106, 209)' }}>
                <div className={styles.div}>
                    <Typography variant="h6" style={{ marginTop: '5px' }}>
                        <span style={{ fontSize: '23px' }}>SIAR-IMOB</span>
                    </Typography>
                    <div>
                        <Link to='/login' style={{ textDecoration: 'none', color: 'black', margin: '0px' }}>
                            <span style={{ fontSize: '17px' }} onClick={() => { SetLogin(true) }}>Login</span>
                        </Link>
                        <Link to='/login' style={{ textDecoration: 'none', color: 'black', margin: '0px' }}>
                            <span style={{ fontSize: '17px' }} onClick={() => { SetLogin(false) }} >Register</span>
                        </Link>
                        <Link to='/login' style={{ textDecoration: 'none', color: 'black', margin: '0px' }}>
                            <span style={{ fontSize: '17px' }}>About</span>
                        </Link>
                    </div>
                </div>
            </Toolbar>
        </AppBar>
    );
}
