import { Link } from 'react-router-dom'
import './PageFooter.scss'

export default function PageFooter() {
    return (
        <footer className = 'footer'>
            <Link  className = 'footer__workblock-link' to="/workblock">
            <h2>
                WorkBlock
            </h2>
            </Link>
        </footer>
    )
}