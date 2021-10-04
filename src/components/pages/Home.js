import HeroImg from '../../assets/herobg.svg';
import HeroArea from "../HeroArea";
export default function Home() {
    return (
        <div>
            <HeroArea text="Don't Run, Just Crawl" img={HeroImg} isTrue={true}/>
        </div>
    )
}
