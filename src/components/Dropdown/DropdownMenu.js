import React, { Component } from 'react'

import { Menu, Icon, message } from 'antd'


const openNotification = () => {
  message.info("This is a normal message");
};

const style = {
  marginLeft: "6px"
}

const DropdownMenu = () => (
  <Menu onClick={() => openNotification()}>
    <Menu.Item key="site-overview">
      <Icon type="eye-o" />
      <span style={style}>
        Overview
      </span>
    </Menu.Item>
    <Menu.Item key="marketing">
      <Icon type="area-chart" />
      <span style={style}>
        Marketing
      </span>
    </Menu.Item>
    <Menu.Item key="activity">
      <Icon type="calendar" />
      <span style={style}>
        Activity
      </span>
    </Menu.Item>
  </Menu>
)
export default DropdownMenu
