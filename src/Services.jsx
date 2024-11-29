import avatar from './assets/avatar.png'

export default function Services(){
    return(
        <div id="services">
            <h5>Services</h5>
            <p>Expertise Service! Let's check it out</p>
            <div className="services-list">
                <div className="service-item">
                    <img className="service-icon"src={avatar} alt="" />
                    <p className="title-of-service">Wireframe</p>
                    <p className="service-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam sit amet, modi libero quasi mollitia quidem nostrum aliquam.</p>
                </div>
                <div className="service-item">
                    <img className="service-icon"src={avatar} alt="" />
                    <p className="title-of-service">Wireframe</p>
                    <p className="service-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam sit amet, modi libero quasi mollitia quidem nostrum aliquam.</p>
                </div>
                <div className="service-item">
                    <img className="service-icon"src={avatar} alt="" />
                    <p className="title-of-service">Wireframe</p>
                    <p className="service-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam sit amet, modi libero quasi mollitia quidem nostrum aliquam.</p>
                </div>
            </div>

        </div>
    )
}