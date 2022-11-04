import styles from './login.module.css'
import Input from '../../components/textField/textField'
import { Button } from '@material-ui/core'
import { useContext, useState } from 'react'
import { LoginContext } from '../../contexts/loginContext'
import RadioButtonsGroup from '../../components/radioB/radioButton'
import { SaveUser } from '../../requests/Post/saveUser'
import Snack from '../../components/alerts/Alerts'
import SimpleBackdrop from '../../components/backdrop/backdrop'
import { Log } from '../../requests/Post/login'
import { BackdropContext } from '../../contexts/backdropContext'
import { AlertContext } from '../../contexts/alertContext'
import { useNavigate } from 'react-router-dom'

export function Login() {
    const navigate = useNavigate();
    const { setLoginContext } = useContext(LoginContext)
    const { setAlertContext } = useContext(AlertContext)
    const { setBackdropContext } = useContext(BackdropContext)
    const [login, setLogin] = setLoginContext
    const [, setOpen] = setAlertContext
    const [, setOpenBackdrop] = setBackdropContext
    const { Entrar } = Log()
    const { SavingUser } = SaveUser()
    const [normal, setNormal] = useState(true)
    const [message, setMessage] = useState(false)
    const [severity, setSeverity] = useState('warning')
    let mail, pass, nome, apelido, contacto, dataNasc, conta, Cpass

    const email = (e) => {
        mail = e.target.value
    }

    const password = (e) => {
        pass = e.target.value
    }

    const Name = (e) => {
        nome = e.target.value
    }

    const surname = (e) => {
        apelido = e.target.value
    }

    const Contact = (e) => {
        contacto = e.target.value
    }

    const dateBirth = (e) => {
        dataNasc = e.target.value
    }

    const account = (e) => {
        conta = e.target.value
    }

    const passConfirm = (e) => {
        Cpass = e.target.value
    }

    function Gravar() {
        if (!mail || !pass || !nome || !apelido || !contacto || !dataNasc || !Cpass) {
            setOpen(true)
            setMessage('Por favor preencha todos os campos')
        } else if (pass !== Cpass) {
            setMessage('As palavras passes devem ser iguais')
        } else {
            (async () => {
                setOpenBackdrop(true)
                let response = await SavingUser(mail, pass, nome, apelido, contacto, dataNasc, conta, Cpass)
                if (response.error) {
                    setOpenBackdrop(false)
                    setMessage(response.error)
                    setSeverity('error')
                    setOpen(true)
                } else {
                    setOpenBackdrop(false)
                    setSeverity('success')
                    setMessage('Registo feito com sucesso')
                    setOpen(true)
                    setLogin(true)
                }
            })()
        }
    }

    function logIn() {
        if (!mail || !pass) {
            setOpen(true)
            setMessage('Por favor preencha todos os campos')
        } else {
            (async () => {
                let response = await Entrar(mail, pass)
                if (response.error) {
                    setOpen(true)
                    setMessage('Email ou senha errada')
                } else {
                    navigate('/home')
                    localStorage.setItem('token', response.access_token)
                }
            })()
        }
    }

    return (
        <div className={styles.container}>
            <img src={require('../../assets/edddd.jpg')} />
            {login ? <div className={styles.login}>
                <h1 className={styles.h1} >SIAR-IMOB</h1>
                <table style={{ marginTop: '250px' }}>
                    <tr>
                        <td>
                            <h1>Email</h1>
                        </td>
                        <td>
                            <Input tipo='email' InputChanged={email} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <h1>Senha</h1>
                        </td>
                        <td>
                            <Input tipo='email' InputChanged={password} />
                        </td>
                    </tr>
                </table>
                <a>Esqueceu senha?</a>
                <Button style={{ width: '175px', marginTop: '40px', marginLeft: '45px' }}
                    size='small' variant="contained" color="primary" disableElevation
                    onClick={() => { logIn() }}
                >
                    <span style={{ textTransform: 'capitalize', color: 'white' }}>Entrar</span>
                </Button>
            </div>
                :
                <div className={styles.register}>
                    <table style={{ marginTop: '30px' }}>
                        <tr>
                            <td>
                                <h1>Proposito</h1>
                            </td>
                            <td>
                                <RadioButtonsGroup setNormal={setNormal} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h1>Nome</h1>
                            </td>
                            <td>
                                <Input tipo='text' InputChanged={Name} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h1>Apelido</h1>
                            </td>
                            <td>
                                <Input tipo='text' InputChanged={surname} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h1>Contacto</h1>
                            </td>
                            <td>
                                <Input tipo='text' InputChanged={Contact} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h1>Email</h1>
                            </td>
                            <td>
                                <Input tipo='email' InputChanged={email} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h1>Data Nascimnto</h1>
                            </td>
                            <td>
                                <Input tipo='date' InputChanged={dateBirth} />
                            </td>
                        </tr>
                        {
                            normal ? "" : <tr>
                                <td>
                                    <h1>Numero da Conta</h1>
                                </td>
                                <td>
                                    <Input tipo='number' InputChanged={account} />
                                </td>
                            </tr>
                        }
                        <tr>
                            <td>
                                <h1>Senha</h1>
                            </td>
                            <td>
                                <Input tipo='password' InputChanged={password} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h1>Confirme a senha</h1>
                            </td>
                            <td>
                                <Input tipo='password' InputChanged={passConfirm} />
                            </td>
                        </tr>
                    </table>
                    <div className={styles.actions}>
                        <Button style={{ width: '105px', marginTop: '5px', marginLeft: '85px' }} size='small'
                            variant="contained" color="primary" disableElevation
                            onClick={() => { Gravar() }}
                        >
                            <span style={{ textTransform: 'capitalize' }}>Registar</span>
                        </Button>
                        <Button style={{ width: '105px', marginTop: '5px', marginLeft: '27px' }} size='small' variant="contained" color="secondary" disableElevation>
                            <span style={{ textTransform: 'capitalize' }}>Cancelar</span>
                        </Button>
                    </div>
                </div>
            }
            <Snack severity={severity} message={message} />
            <SimpleBackdrop />
        </div>
    )
}