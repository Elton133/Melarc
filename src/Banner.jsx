import './App.css'
import image from  './assets/main.jpg'
export default function Banner(){
    return(
        <div>
            <div className="banner">
                <div className='banner-texts'>
                <p className='name-role'>Hello, I'm Elorm Matthias, <br /> A Backend Developer</p>
                <p className='description'>I am a Backend Developer who is passionate about creating web applications that are reliable, secure, and user-friendly.</p>
                
                <button className="btn">
                    <span className="btn-text-one">Hire Me</span>
                    <span className="btn-text-two">Great Choice!</span>
                </button>
                </div>
                <img src={image} alt="" />
            </div>
        </div>
    )
}