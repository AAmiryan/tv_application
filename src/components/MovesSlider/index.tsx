import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/swiper-bundle.min.css';
import { IMovesSliderProps } from '../../types';

const MovesSlider: React.FC<IMovesSliderProps> = ({ data, setMovesData }) => {
  return (
    <Swiper slidesPerView={8} spaceBetween={12} style={{ width: '100%' }} pagination={true} allowTouchMove={true}>
      {data?.TendingNow?.map((movie, i) => (
        <SwiperSlide
          key={i}
          style={{
            marginLeft: '8px',
          }}
        >
          <img width={150} src={movie?.CoverImage} onClick={() => setMovesData(movie)} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
export default MovesSlider;
