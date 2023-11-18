import React, { useState, useEffect } from 'react';
import { Flex } from 'antd';

import { IResponse } from '../../types';
import LeftMenu from '../../components/Menue';
// import MovesSlider from '../../components/MovesSlider';
import MovesDescription from '../../components/MovesDescription';
const Home: React.FC = () => {
  const [data, setData] = useState<IResponse>();

  useEffect(() => {
    const getDta = async (): Promise<void> => {
      try {
        const response = await fetch('/data.json');
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const resData: IResponse = await response.json();
        setData(resData);
      } catch (err) {
        console.log(err);
      }
    };
    void getDta();
  }, []);

  console.log(data);

  return (
    <Flex style={{ backgroundColor: 'black', height: '100vh', position: 'relative' }}>
      <LeftMenu />
      <Flex vertical style={{ position: 'absolute', left: '80px' }}>
        <MovesDescription />
        {/* <MovesSlider data={data} /> */}
      </Flex>
    </Flex>
  );
};

export default Home;

// function secondsToHms(date) {
//   date = Number(date);
//   let h = Math.floor(date / 3600);
//   let m = Math.floor((date % 3600) / 60);
//   let newDate = `${h}h ${m}m`;
//   return newDate;
// }
