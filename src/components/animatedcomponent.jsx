import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

const AnimatedComponent = ({children, className}) => {
  const boxRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(
        boxRef.current,
        { opacity: 0, y: 50 },
        {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
            trigger: boxRef.current,
            start: 'top 80%', // Animation starts when the top of the box hits 80% of the viewport height
            },
        }
        );
    }, []);

  return (
    <div>
      <div ref={boxRef} className={className}>
        {children}
      </div>
    </div>
  );
};


export default AnimatedComponent;
