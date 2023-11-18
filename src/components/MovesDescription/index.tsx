import React from 'react';
import { Button, Typography } from 'antd';

import FeaturedTitleImag from '../../assets/icons/FeaturedTitleImage.png';

import { MovesDescriptionContainer } from './styled';

const { Text } = Typography;

const MovesDescription: React.FC = () => {
  return (
    <MovesDescriptionContainer>
      <div
        style={{
          width: '35vw',
          padding: '80px 30px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
        }}
      >
        <h3
          style={{
            color: '#87888A',
            fontWeight: 800,
          }}
        >
          MOVE
        </h3>
        <img
          src={FeaturedTitleImag}
          style={{
            width: '35vw',
          }}
        />
        <Text style={{ color: '#F1F1F1' }}>2021 +18 1h 48m</Text>
        <Text style={{ color: '#F1F1F1', width: '100%' }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
          industry&apos;s standard dummy text ever since the 1500s
        </Text>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: '16px',
          }}
        >
          <Button>Play</Button>
          <Button type='primary'>More Info</Button>
        </div>
      </div>
    </MovesDescriptionContainer>
  );
};
export default MovesDescription;
