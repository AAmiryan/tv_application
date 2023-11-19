import React, { useEffect, useState } from 'react';
import { Button, Spin, Typography } from 'antd';

import FeaturedTitleImag from '../../assets/icons/FeaturedTitleImage.png';
import { IItem, IMovesDescriptionProps } from '../../types';
import MovesSlider from '../MovesSlider';

import { MovesDescriptionContainer } from './styled';

const { Text } = Typography;

const MovesDescription: React.FC<IMovesDescriptionProps> = ({ data, isLoading }) => {
  const [movesData, setMovesData] = useState<IItem | undefined>();
  useEffect(() => {
    setMovesData({ ...data?.Featured });
  }, [data]);

  const secondsToHms: (date: string) => string = (date) => {
    const newDate = Number(date);
    const h = Math.floor(newDate / 3600);
    const m = Math.floor((newDate % 3600) / 60);
    const duration = h === 0 ? `${m}m` : `${h}h ${m}m`;
    return duration;
  };

  if (isLoading) {
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: 'calc(100vw - 80px)',
          height: '100vh',
        }}
      >
        <Spin />
      </div>
    );
  }
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
          {movesData?.Category}
        </h3>
        <img
          src={FeaturedTitleImag}
          style={{
            width: '35vw',
          }}
        />
        <Text style={{ color: '#F1F1F1' }}>
          {movesData?.ReleaseYear} {movesData?.MpaRating} {secondsToHms(movesData?.Duration || '')}
        </Text>
        <Text style={{ color: '#F1F1F1', width: '100%' }}>{movesData?.Description}</Text>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: '16px',
          }}
        >
          <Button href={movesData?.VideoUrl} target='_blank'>
            Play
          </Button>
          <Button type='primary'>More Info</Button>
        </div>
      </div>
      <MovesSlider data={data} setMovesData={setMovesData} isLoading={isLoading} />
    </MovesDescriptionContainer>
  );
};
export default MovesDescription;
