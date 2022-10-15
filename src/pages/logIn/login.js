import styles from './login.module.css'
import Input from '../../components/textField/textField'
import { Button } from '@material-ui/core'
import { useState } from 'react'


export function Login() {
    const [login, setLogin] = useState(true)
    return (
        <div className={styles.container}>
            <img src={require('../../assets/foto.jpg')} />
            {login ? <div className={styles.login}>
                <h1 className={styles.h1} >SIAR-IMOB</h1>
                <div className={styles.email} >
                    <h1>Email</h1>
                    <Input label='Email' tipo='email' />
                </div>
                <div>
                    <h1>Senha</h1>
                    <Input label='Password' tipo='password' />
                </div>
                <a>Esqueceu senha?</a>
                <Button style={{ width: '175px', marginTop: '40px', marginLeft: '85px' }} size='small' variant="contained" color="primary" disableElevation>
                    <span style={{ textTransform: 'capitalize' }}>Entrar</span>
                </Button>
            </div>
                :
                <div className={styles.register}>
                    <h1 className={styles.h1} >SIAR-IMOB</h1>
                    <div className={styles.nome} >
                        <h1>Nome</h1>
                        <Input label='Email' tipo='email' />
                    </div>
                    <div>
                        <h1>Apelido</h1>
                        <Input label='Password' tipo='password' />
                    </div>
                    <div  >
                        <h1>Contacto</h1>
                        <Input label='Email' tipo='email' />
                    </div>
                    <div>
                        <h1>Email</h1>
                        <Input label='Password' tipo='password' />
                    </div>
                    <div>
                        <h1>Data Nascimnto</h1>
                        <Input label='Password' tipo='password' />
                    </div>
                    <div>
                        <h1>Senha</h1>
                        <Input label='Password' tipo='password' />
                    </div>
                    <div>
                        <h1>Email</h1>
                        <Input label='Password' tipo='password' />
                    </div>
                    <div className={styles.actions}>
                        <Button style={{ width: '105px', marginTop: '25px', marginLeft: '85px' }} size='small' variant="contained" color="primary" disableElevation>
                            <span style={{ textTransform: 'capitalize' }}>Registar</span>
                        </Button>
                        <Button style={{ width: '105px', marginTop: '25px', marginLeft: '85px' }} size='small' variant="contained" color="secondary" disableElevation>
                            <span style={{ textTransform: 'capitalize' }}>Cancelar</span>
                        </Button>
                    </div>
                </div>
            }

        </div>
    )
}