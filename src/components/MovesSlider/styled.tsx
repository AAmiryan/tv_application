import styled from 'styled-components';
import { Swiper } from 'swiper/react';

export const SliderContainer = styled.div``;

const AsnSwiper = styled(Swiper)`
  .swiper-pagination-bullet {
    border-radius: 1px;
    height: 3px;
    width: 10px;
    background: red;
  }
  .swiper-pagination-bullet-active {
    width: 14px;
  }

  .swiper-horizontal > .swiper-pagination-bullets,
  .swiper-pagination-bullets.swiper-pagination-horizontal {
    bottom: 18px;
  }
  &.flex .swiper-wrapper {
    align-items: center;
    justify-content: center;
  }

  &.coverflow {
    .swiper-slide-prev {
      #comment {
        display: none;
      }
      .ant-image {
        height: 140px !important;
        width: 140px !important;
        img {
          height: 140px !important;
        }
      }
    }
    .swiper-slide-next {
      #comment {
        display: none;
      }
      .ant-image {
        height: 140px !important;
        width: 140px !important;
        img {
          height: 140px !important;
        }
      }
    }
    .swiper-slide {
      #comment {
        display: none;
      }
      display: flex;
      justify-content: center;
      .ant-image {
        height: 120px;
        width: 120px;
        img {
          height: 120px;
        }
      }
    }
    .swiper-wrapper {
      display: flex;
      align-items: center;
    }
    .swiper-slide-active {
      #comment {
        display: block;
      }
      .ant-image {
        height: 200px;
        width: 200px;
        margin-left: -24px;
      }
    }
  }
`;

export default AsnSwiper;
