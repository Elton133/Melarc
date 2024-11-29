import './App.css'
import { useState } from 'react';
import main from './assets/main.jpg'

export default function Testimonials(){
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);

    const closeModal = () => setIsModalOpen(false);
    return(
        <div id="testimonials">
            <h5>Testimonials</h5>
            <p>What my clients say</p>

            <div className="testimonials-list">
             <div className="testimonials-item">
                <p className="testimonial-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam sit amet, modi libero quasi mollitia quidem nostrum aliquam.<a href="#testimonial-popup" className='read-more' onClick={openModal}>Read more</a></p>
                
                <span className='image-title'>
                <img className="image-of-person" src={main} alt="" />
                    <span className='title-role'>
                     <p className="name-of-person">Morden Elton</p>
                     <p className='role-of-person'>CEO</p>
                    </span>  
                </span>
                {isModalOpen && (
                    <div className="overlay" onClick={closeModal}>
                    <div className="popup">
                        <div className="popup-content">
                            <span className="close" onClick={closeModal}>&times;</span>
                            <p className="full testimonial"id='testimonial-popup'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam beatae provident dolore ad magnam ab dolor, repellendus, ea fuga possimus obcaecati sequi cum quisquam porro perferendis, dolorum cumque amet totam.</p>
                        </div>
                    </div>
                    </div>
                )}
                </div>

                <div className="testimonials-item">
                <p className="testimonial-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam sit amet, modi libero quasi mollitia quidem nostrum aliquam.</p>
                <span className='image-title'>
                <img className="image-of-person" src={main} alt="" />
                    <span className='title-role'>
                     <p className="name-of-person">Morden Elton</p>
                     <p className='role-of-person'>CEO</p>
                    </span>
                    
                </span>
                </div>

                <div className="testimonials-item">
                <p className="testimonial-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam sit amet, modi libero quasi mollitia quidem nostrum aliquam.</p>
                <span className='image-title'>
                <img className="image-of-person" src={main} alt="" />
                    <span className='title-role'>
                     <p className="name-of-person">Morden Elton</p>
                     <p className='role-of-person'>CEO</p>
                    </span>
                    
                </span>
                </div>    
            </div>

        </div>
    )
}