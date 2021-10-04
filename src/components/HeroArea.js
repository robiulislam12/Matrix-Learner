import HeroImg from '../assets/herobg.svg';

export default function HeroArea() {
    return (
        <div className="hero-section">
          <div className="hero-content">
            <h1>Don't Run, Just Crawl</h1>
            <p>
            Matrix Learner is an open platform for learning web development. Here you will find advanced tutorials starting from Basic in the form of courses and you can start learning by enrolling. If you have any problem, you will get huge help from the community.
            </p><p>
            All the tutorials of Matrix Learner are free and all future tutorials are also free. If you like a course, please rate it, share our site with your friends who are interested in learning web development.
            </p>
          <button>Learn More</button>
          
          </div>
        <img src={HeroImg} alt="" />
      </div>
    )
}
