import styled from 'styled-components';
import { Menu } from 'antd';

const CustomMenu = styled(Menu)`
  position: absolute;
  z-index: 10;
  max-width: 250px;
  min-width: 50px;
  height: 100vh;
  background-color: unset;
  padding-inline: unset;
  display: flex;
  flex-direction: column;
  gap: 16px;
  backdrop-filter: blur(3px);
  background-color: rgba(14, 24, 27, 0.3);
  .ant-menu-item-selected {
    background-color: #3b486d;
  }

  .ant-menu-item {
    display: flex;
    align-items: center;
    color: white !important;
    font-weight: 700;
    font-size: 18px;
    svg {
      margin-left: 10px;
    }
  }

  &.ant-menu-inline-collapsed > .ant-menu-item {
    padding-inline: unset;
  }

  &.ant-menu .ant-menu-item .ant-menu-item-icon {
    min-width: 50px;
    margin-left: 20px;
  }
`;

export default CustomMenu;
