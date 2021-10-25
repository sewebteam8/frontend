import './landing.css'
const Landing = ({ onNext }) => {
  return (
    <div className="landing-container p-5">
        <div className="inner-landing-continer row">
              <div className="col-7 p-5 desc">
                  <h1>
                       Find your buddy and Talk with them
                  </h1>
                  <p>
                      Here you can find your nearby college student and chat with them , resolve quesries regarding studies and make a strong educational environment
                  </p>
                  <div class="chat_img d-flex flex-row ">
                      <img src='./images/chat_img.jpg' />
                      <button onClick={onNext}>Start</button>
                  </div>
              </div>
              
              <div className="col-5 p-5 message-box">
                  <div className="message-card">

                  </div>
              </div>
        </div>
    </div>
  );
};
export default Landing;