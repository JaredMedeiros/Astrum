import './ChatPage.scss';
import goBack from '../../assets/goBackArrow.png'
import {useLocation, useNavigate} from 'react-router-dom'
import PageHeader from '../../Components/PageHeader/PageHeader';

export default function ChatPage() {

    const location = useLocation()
    const navigate = useNavigate();

return( 
    <>
    <PageHeader/>
    <main className = 'chatpage'>
        <div className = 'chatpage__top'>
            <h1 className = 'chatpage__title'>Chat.</h1>
            <img onClick={() => navigate(-1)} src = {goBack} className = 'chatpage__go-back' alt = 'go back to project dashboard' />
        </div>
        <div className='chatpage__chat-box'>

        </div>
        <div className = 'chatpage__bottom'>
            <div className = 'chatpage__text-bar'>
                <p className = 'chatpage__text-bar-send'>+</p>
            </div>
        </div>
    </main>
    </>
)    
}