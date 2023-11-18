import React, { useState } from 'react';
import { MenuProps } from 'antd';

import { ReactComponent as HomeIcon } from '../../assets/icons/home.svg';
import { ReactComponent as SearchIcon } from '../../assets/icons/search.svg';
import { ReactComponent as TvShowIcon } from '../../assets/icons/tv_show.svg';
import { ReactComponent as MoviesIcon } from '../../assets/icons/movies.svg';
import { ReactComponent as GenresIcon } from '../../assets/icons/genres.svg';
import { ReactComponent as LaterIcon } from '../../assets/icons/leater.svg';

import CustomMenu from './styled';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('Search', '1', <SearchIcon />),
  getItem('Home', '2', <HomeIcon />),
  getItem('TV Shows', '3', <TvShowIcon />),
  getItem('Movies', '4', <MoviesIcon />),
  getItem('Genres', '5', <GenresIcon />),
  getItem('Watch Later', '6', <LaterIcon />),
];
const LeftMenu: React.FC = () => {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <CustomMenu
      onMouseEnter={() => setCollapsed(!collapsed)}
      onMouseLeave={() => setCollapsed(!collapsed)}
      defaultSelectedKeys={['2']}
      // defaultOpenKeys={['sub1']}
      // mode='inline'
      // theme='dark'
      inlineCollapsed={collapsed}
      items={items}
    />
  );
};
export default LeftMenu;
