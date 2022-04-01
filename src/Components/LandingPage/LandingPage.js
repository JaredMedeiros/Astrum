import './LandingPage.scss'
import landingPageIcon from '../../assets/desk2bitmap.png'
import arrow from '../../assets/landingPageArrow.png'

export default function LandingPage() {
    return (
        
        <main className = "landing-page">
            <div className = "landing-page__content-wrap">
                <img src = {landingPageIcon} className = "landing-page__icon" alt = "Astrum Icon" />
                <h1 className = "landing-page__logo"><span className = "landing-page__superA">A</span>strum<span className = "landing-page__logo-period">.</span></h1>
                <img src = {arrow} className = "landing-page__arrow" alt = "arrow to enter the project page" />
            </div>
        </main>
    )
}