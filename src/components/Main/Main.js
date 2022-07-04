import React from 'react'
import './Main.scss';
import logo from '../../images/reactjs-icon 2.png';

function Main (){
    return (
    <body>
        
            <h1 className='main-txt'>
                Fun facts about React
            </h1>
                <div className='fun-facts'>
                    <ul>
                        <li>Was first released in 2013</li>
                        <li>Was originally created by Jordan Walke</li>
                        <li>Has well over 100K starts on GitHib</li>
                        <li>Is maintained by Facebook</li>
                        <li>Power thousands of enterprise apps, including mobile apps</li>
                    </ul>
                </div>
                <img className='bkg-logo'src={logo} alt= 'logo'/>
    </body>

    );

}

export default Main;