import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { Menu, Icon, message } from 'antd'

import MenuPDF from '../Menu/MenuPDF'
const openNotification = () => {
  message.info('This is a normal message')
}

const style = {
  marginLeft: '6px'
}

const DropdownMenu = () => (
  <MenuPDF />
)
export default DropdownMenu
