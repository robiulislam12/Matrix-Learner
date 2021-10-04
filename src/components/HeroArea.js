import { Button } from '@mui/material';

export default function HeroArea({text, img, isTrue, children}) {
    return (
        <div className="hero-section">
          <div className="hero-content">
            <h1>{text}</h1>
            {
              children ? children : (
             <>
              <p>
              Matrix Learner is an open platform for learning web development. Here you will find advanced tutorials starting from Basic in the form of courses and you can start learning by enrolling. If you have any problem, you will get huge help from the community.
              </p><p>
              All the tutorials of Matrix Learner are free and all future tutorials are also free. If you like a course, please rate it, share our site with your friends who are interested in learning web development.
              </p>
             </>
              )
            }
            
            {
              isTrue && <Button style={{marginLeft: "-0px"}} sx={{ m: 2 }} variant="contained" color="success">Learn More</Button>
            } 
          
          </div>
        <img src={ img } alt="" />
      </div>
    )
}
