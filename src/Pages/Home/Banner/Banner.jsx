import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../../assets/banner/1.avif'
const Banner = () => {
    return (
        <Carousel>
        <div>
            <img src={img1} />
        </div>
        <div>
            <img src={img1} />
        </div>
        <div>
            <img src={img1} />
        </div>
        <div>
            <img src={img1} />
        </div>
        <div>
            <img src={img1} />
        </div>
        
    </Carousel>
    );
};

export default Banner;