import styles from './login.module.css'
import Input from '../../components/textField/textField'
import { Button } from '@material-ui/core'
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { LoginContext } from '../../contexts/loginContext'
import RadioButtonsGroup from '../../components/radioB/radioButton'


export function Login() {
    const { setLoginContext } = useContext(LoginContext)
    const [login,] = setLoginContext
    const [normal, setNormal] = useState(false)

    return (
        <div className={styles.container}>
            <img src={require('../../assets/foto.jpg')} />
            {login ? <div className={styles.login}>
                <h1 className={styles.h1} >SIAR-IMOB</h1>
                <table style={{ marginTop: '200px' }}>
                    <tr>
                        <td>
                            <h1>Email</h1>
                        </td>
                        <td>
                            <Input label='Email' tipo='email' />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <h1>Senha</h1>
                        </td>
                        <td>
                            <Input label='Email' tipo='email' />
                        </td>
                    </tr>
                </table>
                <a>Esqueceu senha?</a>
                <Button style={{ width: '175px', marginTop: '40px', marginLeft: '85px' }} size='small' variant="contained" color="primary" disableElevation>
                    <Link to='/home' style={{ textDecoration: 'none', color: 'black', margin: '0px' }}>
                        <span style={{ textTransform: 'capitalize' }}>Entrar</span>
                    </Link>
                </Button>
            </div>
                :
                <div className={styles.register}>
                    <h1 className={styles.h1} >SIAR-IMOB</h1>
                    <table>
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
                                <Input label='Email' tipo='email' />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h1>Apelido</h1>
                            </td>
                            <td>
                                <Input label='Email' tipo='email' />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h1>Email</h1>
                            </td>
                            <td>
                                <Input label='Email' tipo='email' />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h1>Data Nascimnto</h1>
                            </td>
                            <td>
                                <Input label='Email' tipo='email' />
                            </td>
                        </tr>
                        {
                            normal ? "" : <tr>
                                <td>
                                    <h1>Numero da Conta</h1>
                                </td>
                                <td>
                                    <Input label='Email' tipo='email' />
                                </td>
                            </tr>
                        }
                        <tr>
                            <td>
                                <h1>Senha</h1>
                            </td>
                            <td>
                                <Input label='Email' tipo='email' />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <h1>Confirme a senha</h1>
                            </td>
                            <td>
                                <Input label='Email' tipo='email' />
                            </td>
                        </tr>
                    </table>
                    <div className={styles.actions}>
                        <Button style={{ width: '105px', marginTop: '15px', marginLeft: '85px' }} size='small' variant="contained" color="primary" disableElevation>
                            <span style={{ textTransform: 'capitalize' }}>Registar</span>
                        </Button>
                        <Button style={{ width: '105px', marginTop: '15px', marginLeft: '27px' }} size='small' variant="contained" color="secondary" disableElevation>
                            <span style={{ textTransform: 'capitalize' }}>Cancelar</span>
                        </Button>
                    </div>
                </div>
            }

        </div>
    )
}