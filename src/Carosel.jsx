import './Carosel.css'
import chat from './assets/chat.png'

function Carosel(){
    return(
        <div className="car-cont">
            <div className="carosel" id="carousel">
      
                <div className="card">
                    <img src={chat} alt="" className="image1" />
                    <div className="content">"Chat Chill Repeat"</div>
                    <div className="des">Be Connected with the world.</div>
                </div>
                <div className="card">
                    <div className="content">Connect with your friend</div>
                    <div className="des">Have Fun.</div>
                    <button className="sign">Sign Up</button>
                </div>
                <div className="card">
                    
                    <div className="content1">"Secured Messaging"</div>
                    <div className="des1">Your messages are always Encrypted.</div>
                </div>
               
             </div>

        </div>
    )
}
export default Carosel