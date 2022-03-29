import './PageHeader.scss';
import moment from 'moment';
import React, { useEffect, useState } from 'react'


export default function PageHeader() {

    const [clockState, setClockState] = useState();

    useEffect(() => {
        setInterval(() => {
            const date = new Date()
            setClockState(date.toLocaleTimeString())
        }, 1000)
    }, []);
    
    const thisDate = new Date()
    let mm = thisDate.getMonth() +1;
    let dd = thisDate.getDate();
    if (dd < 10) dd = '0' + dd;
    if(mm < 10) mm = '0' + mm;
    const headerDate = `${mm}/${dd}`

    return (
        <header className = "astrum-header">
            <h1 className = "astrum-header__logo">
                Astrum.
            </h1>
            <div className = "astrum-header__datetime-wrapper">
                <p className = "astrum-header__date">
                    {headerDate}
                </p>
                <p className = "astrum-header__time">
                    {clockState}
                </p>
            </div>
        </header>
    )
}