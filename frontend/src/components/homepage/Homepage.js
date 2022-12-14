import './homepage.css';
import clubPic from './club-pic.png';
import calendar from './calendar.png';
import { Link } from 'react-router-dom';

export const Homepage = (props) => {
    
    return (
        <div className='homepage-container'>
            <Link to='/' className='title'>Clubify</Link>
            <div className='description-container'>
                <div className='description-top'>
                  <h2>Want to get involved at UTSC? Don’t know where to get started?</h2>
                </div>
                <div className='description-bot'>
                  <h3>The one platform for all clubs uoft related.</h3>
                </div>
            </div>
            <div className='slogan'>
                Unify With Clubify
            </div>
            <img className="calendar" src={calendar} alt="Calendar"></img>
            <div className='buttons-container'>
                <div className='buttons'>
                    <Link className='browse-btn' to='/browse'><em>Browse</em></Link>
                    <Link className='admin-login-btn' to='/admin'><em>Admin Login</em></Link>
                </div>
            </div>
            <img className='club-pic' src={clubPic} alt='People in Club' />
            <div className="waves1">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                </svg>
            </div>
        </div>
    )

}