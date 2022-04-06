import './ChatPage.scss';
import goBack from '../../assets/goBackArrow.png'
import {useLocation, useNavigate} from 'react-router-dom'
import PageHeader from '../../Components/PageHeader/PageHeader';
import { useEffect, useState } from 'react';

const getMessagesFromLS=()=>{
    const data = localStorage.getItem('Messages')
    if(data){
        return JSON.parse(data)
    }
    else{
        return[]
    }
}

export default function ChatPage() {

    const location = useLocation()
    const navigate = useNavigate();

    const[messageValue, setMessageValue] = useState('');
    

    const[messages, setMessages]= useState(getMessagesFromLS());
    console.log(messages)

    const handleSubmit=(e)=>{
        e.preventDefault();
        
        const date = new Date();
        const time = date.getTime();

        let messageObect={
            ID: time,
            MessageValue: messageValue,
        }

        setMessages([...messages, messageObect]);

        setMessageValue('');
    }

    useEffect(()=> {
        localStorage.setItem('Messages', JSON.stringify(messages));
    },[messages])

return( 
    <>
    <PageHeader/>
    <main className = 'chatpage'>
        <div className = 'chatpage__top'>
            <h1 className = 'chatpage__title'>Chat.</h1>
            <img onClick={() => navigate(-1)} src = {goBack} className = 'chatpage__go-back' alt = 'go back to project dashboard' />
        </div>
        <div className='chatpage__chat-box'>
         
                
                    {messages.map((individualMessage,index)=>(
                        <div className = 'chatpage__message' key={individualMessage.ID}>
                            <div>
                                <span>{individualMessage.MessageValue}</span>
                            </div>
                        </div>
                    ))}
    
            
        </div>
        <form className = 'chatpage__bottom' onSubmit={handleSubmit}>
            <input onChange={(e)=>setMessageValue(e.target.value)} value={messageValue} type = 'text' className = 'chatpage__text-bar' />
            <button type = 'submit' className = 'chatpage__text-bar-send'>+</button>
        </form>
    </main>
    </>
)    
}