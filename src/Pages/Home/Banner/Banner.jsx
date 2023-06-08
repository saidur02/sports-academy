import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../../assets/banner/1.jpg'
import img2 from '../../../assets/banner/2.jpg'
import img3 from '../../../assets/banner/3.jpg'
import img4 from '../../../assets/banner/4.jpg'
import img5 from '../../../assets/banner/5.jpg'
const Banner = () => {
    return (
        <Carousel>
        <div>
            <img src={img1} />
        </div>
        <div>
            <img src={img2} />
        </div>
        <div>
            <img src={img3} />
        </div>
        <div>
            <img src={img4} />
        </div>
        <div>
            <img src={img5} />
        </div>
        
    </Carousel>
    );
};

export default Banner;