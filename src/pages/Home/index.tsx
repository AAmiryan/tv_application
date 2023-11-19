import React, { useState, useEffect } from 'react';
import { Flex, message } from 'antd';

import { IResponse } from '../../types';
import LeftMenu from '../../components/Menue';
import MovesDescription from '../../components/MovesDescription';
const Home: React.FC = () => {
  const [data, setData] = useState<IResponse>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getDta = async (): Promise<void> => {
      try {
        setIsLoading(true);
        const response = await fetch('/data.json');
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const resData: IResponse = await response.json();
        setData(resData);
      } catch (err) {
        void message.error(err as string);
      } finally {
        setIsLoading(false);
      }
    };
    void getDta();
  }, []);

  return (
    <Flex style={{ backgroundColor: 'black', height: '100vh', position: 'relative' }}>
      <LeftMenu />
      <Flex vertical style={{ position: 'absolute', left: '80px' }}>
        <MovesDescription data={data} isLoading={isLoading} />
      </Flex>
    </Flex>
  );
};

export default Home;
