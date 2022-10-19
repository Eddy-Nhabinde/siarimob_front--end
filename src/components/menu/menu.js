import { Filter } from '../filterComponent/filter';
import styles from './menu.module.css'
import MediaCard from '../../components/Cards/card'
import StorefrontIcon from '@material-ui/icons/Storefront';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import HomeIcon from '@material-ui/icons/Home';
import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Props from '../../pages/propriedades/propriedades';
import { Lista } from '../../pages/inquilinos/inquilinos';
import PositionedPopper from '../popver/Popover';
import BarChart from '../../pages/estatistcas/estatisticas';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1,
        },
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(2),
        background: '#eee',
    },
}));

export default function MiniDrawer() {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const [component, setcomponent] = React.useState(0);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, {
                            [classes.hide]: open,
                        })}
                    >
                        <MenuIcon />
                    </IconButton>
                    <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                        <Typography variant="h6" noWrap>
                            SIAR-IMOB
                        </Typography>
                        <Typography variant="h6" noWrap>
                            <PositionedPopper />
                        </Typography>
                    </div>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                })}
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    }),
                }}
            >
                <div className={classes.toolbar}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </div>
                <Divider />
                <List>
                    <ListItem button onClick={() => { setcomponent(0) }}>
                        <ListItemIcon><StorefrontIcon /></ListItemIcon>
                        <ListItemText primary={'Mercado'} />
                    </ListItem>
                    <ListItem button onClick={() => { setcomponent(1) }}>
                        <ListItemIcon><HomeIcon /></ListItemIcon>
                        <ListItemText primary={'Propriedades'} />
                    </ListItem>
                    <ListItem button onClick={() => { setcomponent(2) }}>
                        <ListItemIcon><FormatListBulletedIcon /></ListItemIcon>
                        <ListItemText primary={'Inquilinos'} />
                    </ListItem>
                    <ListItem button onClick={() => { setcomponent(3) }}>
                        <ListItemIcon><EqualizerIcon /></ListItemIcon>
                        <ListItemText primary={'Estatisticas'} />
                    </ListItem>
                </List>
            </Drawer>
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <div className={classes.drawerHeader} />
                {component == 0 ?
                    <>
                        <Filter />
                        <div className={styles.container} >
                            <MediaCard />
                            <MediaCard />
                            <MediaCard />
                            <MediaCard />
                            <MediaCard />
                            <MediaCard />
                            <MediaCard />
                            <MediaCard />
                            <MediaCard />
                            <MediaCard />
                            <MediaCard />
                            <MediaCard />
                        </div>
                    </>
                    :
                    component == 1 ?
                        <Props />
                        : component == 2 ?
                            <Lista /> : <BarChart />}
            </main>
        </div>
    );
}
