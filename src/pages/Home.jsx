import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import bannerImage1 from '../assets/banner/banner-1.jpg';
import bannerImage2 from '../assets/banner/banner-2.jpg';
import bannerImage3 from '../assets/banner/banner-3.jpg';
import bannerImage4 from '../assets/banner/banner-4.jpg';
import bannerImage5 from '../assets/banner/banner-5.jpg';
import bannerImage6 from '../assets/banner/banner-6.jpg';


const Home = () => {
    return (
        <div>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide><img src={bannerImage1} alt="" /></SwiperSlide>
                <SwiperSlide><img src={bannerImage2} alt="" /></SwiperSlide>
                <SwiperSlide><img src={bannerImage3} alt="" /></SwiperSlide>
                <SwiperSlide><img src={bannerImage4} alt="" /></SwiperSlide>
                <SwiperSlide><img src={bannerImage5} alt="" /></SwiperSlide>
                <SwiperSlide><img src={bannerImage6} alt="" /></SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Home;

