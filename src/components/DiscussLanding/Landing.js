import './landing.css'
const Landing = () => {
  return (
    <div className="landing-container p-5">
        <div className="inner-landing-continer row">
              <div className="col-7 p-5 desc">
                  <h1>
                       Find your buddy and Talk with them
                  </h1>
                  <button>
                      join
                 </button>
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