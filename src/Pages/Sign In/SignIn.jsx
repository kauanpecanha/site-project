import React from 'react'
import Facebook from '../../assets/Facebook'
import Google from '../../assets/Google'
import './SignIn.css'


const SignIn = props => {
    return(
        <div className="signin">
            <div className="login-title">
                <h1>Login de Conta Tester</h1>

                <p>Uma só conta para todos os produtos Tester</p>
            </div>

            <div className="login-input">
                <p>E-mail</p>
                <input placeholder='Entre com seu e-mail a seguir.'></input>
                <a href="https://login.globo.com/recuperacaoLogin/4728?url=https://g1.globo.com/&tam=WIDGET&_ga=2.189896107.1491046534.1672088085-1479139283.1672088084&glbproduct=UA-296593-3&component=menu_mobile">Esqueceu seu login?</a>
            </div>   
            
            <div className="login-input">
                <p>Senha</p>
                <input placeholder='Entre com sua senha a seguir.'></input>
                <a href='https://login.globo.com/recuperacaoSenha/4728?url=https://g1.globo.com/&tam=WIDGET&_ga=2.189896107.1491046534.1672088085-1479139283.1672088084&glbproduct=UA-296593-3&component=menu_mobile'>Esqueceu sua senha?</a>
            </div>

            <div className="login-button">
                <button>Entrar</button>
                <p>Não tem conta? <a href = "https://login.globo.com/cadastro/4728?url=https://g1.globo.com/&tam=WIDGET&_ga=2.189896107.1491046534.1672088085-1479139283.1672088084&glbproduct=UA-296593-3&component=menu_mobile">Cadastre-se.</a></p>
            </div>

            <div className="login-options">
                <p>ou entre com</p>

                <div className="login-plats">
                    <div className="google-button">
                        <a href="https://myaccount.google.com/?utm_source=sign_in_no_continue&pli=1">
                            <Google />
                            <p>Google</p>
                        </a>
                    </div>
                    <div className="facebook-button">
                        <a href='https://web.facebook.com/?_rdc=1&_rdr'>
                            <Facebook />
                            <p>Facebook</p>
                        </a>
                    </div>
                </div>

                <div className="terms">
                    <p>Este site é protegido pelo hCaptcha e está sujeito a sua <a href='https://www.hcaptcha.com/privacy'>Política de Privacidade</a> e <a href='https://www.hcaptcha.com/terms'>Termos de Uso.</a></p>
                </div>
            </div>

        </div>
    )
}

export default SignIn;