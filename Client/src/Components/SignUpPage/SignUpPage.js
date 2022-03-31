import './SignUpPage.scss'

export default function SignUpPage() {
    return (
        <main className = 'signup-page'>
            <h1 className = 'signup-page__title'>Sign Up.</h1>
            <p className = 'signup-page__tagline'>
                Astrum. a <i>simple,</i> intuitive, collaborative project management interface for developers.
            </p>
            <form className = 'signup-page__form'>
                <div className = 'signup-page__form-left'>
                    <input type = 'text' name = 'username' className = 'signup-page__username' placeholder = 'username' />
                    <input type = 'text' name = 'email' className = 'signup-page__email' placeholder = 'email' />
                </div>
                <div className = 'signup-page__form-right'>
                    <input type = 'text' name = 'password' className = 'signup-page__password' placeholder = 'password' />
                    <input type = 'text' name = 'confirmpswd' className = 'signup-page__confirmpswd' placeholder = 'confirm pswd' />
                </div>
                <button className = 'signup-page__button'>take me there.</button>
            </form>
        </main>
    )
}