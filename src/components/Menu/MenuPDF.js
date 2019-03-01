import React, { Component } from 'react'

import { Menu, Icon, Modal, Button } from 'antd'



import { Link } from 'react-router-dom'


//@TODO yes - we need to change that
class MenuPDF extends Component {

  state = {
    current: 'app',
    visible: false
  }

  handleClick = e => {
    console.log('click ', e)
    this.setState({
      current: e.key
    })
  }

  showModal = () => {
    this.setState({
      visible: true
    })
  }

  handleOk = e => {
    console.log(e)
    this.setState({
      visible: false
    })
  }

  handleCancel = e => {
    console.log(e)
    this.setState({
      visible: false
    })
  }

  render() {
    return (
      <Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
      >

        <Menu.Item key="app">
          <Icon type="appstore" />
            PDF1 View
          {/*}<Link to="/pdf1" /> */}
        </Menu.Item>

        <Menu.Item key="app">
          <Icon type="appstore" />
            PDF2 View
          {/*<Link to="/pdf2" />*/}
        </Menu.Item>

        <Menu.Item key="app">
          <Icon type="appstore" />
            PDF3 View
          {/*<Link to="/pdf3" />*/}
        </Menu.Item>

        <Menu.Item key="app">
          <Icon type="appstore" />
            PDF4 View Recipe
          {/*<Link to="/recipe" />*/}
        </Menu.Item>


      </Menu>
    )
  }
}

export default MenuPDF
