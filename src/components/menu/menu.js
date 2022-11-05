import { Filter } from '../filterComponent/filter';
import styles from './menu.module.css'
import MediaCard from '../../components/Cards/card'
import StorefrontIcon from '@material-ui/icons/Storefront';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import HomeIcon from '@material-ui/icons/Home';
import React, { useEffect, useState } from 'react';
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
import { Propss } from '../../requests/Get/getProps';
import { Dashboard } from '../../pages/adminDashboard/adminDash';
import { useParams } from '../../hooks/QueryParams';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import MailIcon from '@material-ui/icons/Mail';
import { Requests } from '../../pages/requisicoes/requisicoes';
import { SitView } from '../../pages/situation/situation';

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
    const data = new FormData()

    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = useState(false);

    const [Casas, setCasas] = useState([])
    const [BairroFilter, setBairroFilter] = useState("");
    const [TipoFilter, setTipoFilter] = useState("");
    const [PrecoFilter, setPrecoFilter] = useState("");
    const { add, removeAll, useQuery } = useParams()
    const { GetProps } = Propss()
    const urlParams = useQuery()
    let page = urlParams.get('component')

    useEffect(() => {
        if (!urlParams.get('component')) {
            add('component', 0)
        }
        (async () => {
            data.append('dono_id', '1')
            if (BairroFilter) data.append('bairro', BairroFilter)

            if (TipoFilter) data.append('tipo', TipoFilter)

            if (PrecoFilter) data.append('preco', PrecoFilter)

            let response = await GetProps(data)

            if (response) {
                setCasas(response.data)
            }
        })()
    }, [BairroFilter, TipoFilter, PrecoFilter])

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    function setComponent(val) {
        removeAll()
        add('component', val)
    }

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
                            <PositionedPopper funcao='user' />
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
                    <ListItem button onClick={() => { setComponent(0) }}>
                        <ListItemIcon><StorefrontIcon /></ListItemIcon>
                        <ListItemText primary={'Mercado'} />
                    </ListItem>
                    {sessionStorage.getItem("acesso") == 'admin' ?
                        <>
                            <ListItem button onClick={() => { setComponent(1) }}>
                                <ListItemIcon><HomeIcon /></ListItemIcon>
                                <ListItemText primary={'Propriedades'} />
                            </ListItem>
                            <ListItem button onClick={() => { setComponent(2) }}>
                                <ListItemIcon><FormatListBulletedIcon /></ListItemIcon>
                                <ListItemText primary={'Inquilinos'} />
                            </ListItem>
                            <ListItem button onClick={() => { setComponent(6) }}>
                                <ListItemIcon><MailIcon /></ListItemIcon>
                                <ListItemText primary={'Requisicoes'} />
                            </ListItem>
                            <ListItem button onClick={() => { setComponent(3) }}>
                                <ListItemIcon><EqualizerIcon /></ListItemIcon>
                                <ListItemText primary={'Estatisticas'} />
                            </ListItem>
                        </>
                        :
                        sessionStorage.getItem("acesso") == 'adminMaster' ?
                            <>
                                <ListItem button onClick={() => { setComponent(4) }}>
                                    <ListItemIcon><DashboardIcon /></ListItemIcon>
                                    <ListItemText primary={'Dashdoard'} />
                                </ListItem>
                            </>
                            :
                            <>
                                <ListItem button onClick={() => { setComponent(5) }}>
                                    <ListItemIcon><AssignmentIndIcon /></ListItemIcon>
                                    <ListItemText primary={'Meus Arrendamentos'} />
                                </ListItem>
                            </>}
                </List>
            </Drawer>
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <div className={classes.drawerHeader} />

                {urlParams.get('component') == 0 ?
                    <>
                        <Filter setPrecoFilter={setPrecoFilter} setBairroFilter={setBairroFilter} setTipoFilter={setTipoFilter} />
                        <div className={styles.container} >
                            {
                                Casas?.[0]?.map((val) => {
                                    return (
                                        <MediaCard casa={val} />
                                    )
                                })
                            }
                        </div>
                    </>
                    : urlParams.get('component') == 1 ?
                        <Props />
                        : urlParams.get('component') == 2 ?
                            <Lista />
                            : urlParams.get('component') == 3 ?
                                <BarChart />
                                : urlParams.get('component') == 4 ?
                                    <Dashboard />
                                    : urlParams.get('component') == 5 ?
                                        <SitView />
                                        : urlParams.get('component') == 6 ?
                                            <Requests />
                                            : ''
                }
            </main>
        </div>
    );
}
