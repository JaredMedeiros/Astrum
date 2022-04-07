import { Link } from 'react-router-dom'
import './PageFooter.scss'
import pagelogo from '../../assets/Final-Logo-Green.png'

export default function PageFooter() {
    return (
        <footer className = 'footer'>
            <Link  className = 'footer__workblock-link' to="/workblock">
                <img className = 'footer__image' src = {pagelogo} alt = 'link to pomodoro timer page' />
            </Link>
        </footer>
    )
}