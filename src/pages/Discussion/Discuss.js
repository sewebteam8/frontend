import Landing from "../../components/DiscussLanding/Landing";
import DiscussMessage from "../../components/DiscussMessage/DiscussMessage";
import React,{ useState, useEffect } from 'react'
const steps = {
    1: Landing,
    2: DiscussMessage,
};
const Home = () => {
      useEffect(() => {
          if (localStorage.getItem('cc-logged') === 'true') {} else {
              window.location.href = '/authorise';
          }
      }, []);
     function onNext() {
         setStep(step + 1);
     }
    const [step, setStep] = useState(1);
    const Step = steps[step];
  return (
    <div>
        <Step onNext= {onNext} />;
    </div>
  );
};

export default Home;