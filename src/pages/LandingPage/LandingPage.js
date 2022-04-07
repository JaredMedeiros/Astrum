import './LandingPage.scss'
import landingPageIcon from '../../assets/Final-Logo-White.png'
import arrow from '../../assets/landingPageArrow.png'
import { Link } from 'react-router-dom'

export default function LandingPage() {
    return (
        
        <main className = "landing-page">
            <div className = "landing-page__content-wrap">
                <Link to = "/login"><img className = "landing-page__icon" src ={landingPageIcon} alt = "Atrum icon. Click to enter the site" /></Link>
                <h1 className = "landing-page__logo">Astrum.</h1>
            </div>
        </main>
    )
}