import './LogInPage.scss'

export default function LogInPage() {
    return (
        <main className = 'login-page'>
            <h1 className = 'login-page__title'>Log In.</h1>
            <form className = 'login-page__form'>
                <input type = 'text' name = 'username' className = 'login-page__username' placeholder = 'username' />
                <input type = 'text' name = 'password' className = 'login-page__password' placeholder = 'password' />
                <button className = 'login-page__button'>enter.</button>
            </form>
            <p className = 'login-page__to-signup'>Don't have an Astrum account? Sign up here.</p>
        </main>
    )
}