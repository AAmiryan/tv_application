import React from 'react';
import { Row, Col, Image } from 'antd';
import { SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, EffectCoverflow, Controller } from 'swiper';

import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/swiper-bundle.min.css';

import { IResponse } from '../../types';

import AsnSwiper from './styled';
const width = window.innerWidth;
const MovesSlider: React.FC<{ data: IResponse | undefined }> = ({ data }) => {
  return (
    <Row
      align={'middle'}
      justify={'center'}
      style={{ width: '100%', padding: '32px 4% 10px 4%', position: 'relative' }}
    >
      <Col xxl={{ span: 16 }} xl={{ span: 17 }} lg={{ span: 20 }} md={{ span: 24 }} sm={{ span: 24 }} xs={{ span: 24 }}>
        {
          <AsnSwiper
            spaceBetween={30}
            loop={true}
            effect='coverflow'
            centeredSlides={true}
            modules={[EffectCoverflow, Pagination, Navigation, Controller]}
            coverflowEffect={{ rotate: 0, stretch: 0, depth: 100, modifier: 1, slideShadows: false }}
            style={{ width: '100%' }}
            className='coverflow padding'
            pagination={{
              clickable: true,
              type: 'custom',
            }}
            slideToClickedSlide
            breakpoints={{
              300: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: data?.TendingNow && data?.TendingNow?.length <= 2 ? 1 : 3,
              },
              992: {
                slidesPerView:
                  data?.TendingNow && data?.TendingNow?.length <= 2
                    ? 1
                    : data?.TendingNow && data?.TendingNow?.length >= 3 && data?.TendingNow?.length <= 4
                      ? 3
                      : 4,
              },
            }}
          >
            {data?.TendingNow?.map((story, i) => (
              <SwiperSlide key={i}>
                <Image src={story?.photo} preview={false} className='swiper_img' />
              </SwiperSlide>
            ))}
            {data?.TendingNow &&
              data?.TendingNow?.length >= 4 &&
              data?.TendingNow?.length < 10 &&
              width > 768 &&
              data?.TendingNow?.map((story, i) => (
                <SwiperSlide key={i}>
                  <Image src={story?.photo} preview={false} className='swiper_img' />
                </SwiperSlide>
              ))}
          </AsnSwiper>
        }
      </Col>
    </Row>
  );
};
export default MovesSlider;
