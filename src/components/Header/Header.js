import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import {
  Button,
  Icon,
  Input,
  Dropdown,
  Menu,
  Switch
} from 'antd'

import HeaderDropdown from '~/DropdownPDF/HeaderDropdown';

// @TODO we have a long list of props here. it's confusing.

const inputStyle = { marginLeft: 15, minWidth: 130, maxWidth: 300 }
const suffixIconStyle = { color: 'rgba(0,0,0,.25)' }
const buttonStyle = { marginLeft: 15, minWidth: 130 }
const spanStyle = { marginLeft: 15 }
const switchStyle = { marginLeft: 15 }

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 'app',
      visible: false,
      data: this.props.data
    }
  }
  handleClick = e => {
    console.log('click ', e)
    this.setState({
      current: e.key
    })
  }

  handleReload = (e) => {
    console.log('click ', e)

    // console.log(getRandomRecipe());
    console.log(this.state.data);

    // reloading data
    // this.setState({
    //   data: []
    // })
  }

  showModal = () => {
    console.log('click bithc')
    this.setState({
      visible: true
    })
  }

  render() {
  
    const {
      shuffle,
      search,
      setColumns,
      setMargin,
      setHeight,
      columns,
      margin } = this.props;

    return (
      <div className='header'>
        <Menu
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          mode="horizontal"
        >
          <Menu.Item key="get-data">
            <div>
              <Icon type="reload" />
            </div>
          </Menu.Item>

          <Menu.Item key="app">
          <Icon type="appstore" />
          Recipe List
          {/*}<Link to="/recipelist" />*/}
        </Menu.Item>

        <Menu.Item key="alipay">
          <div onClick={this.showModal}>
            <Icon type="plus-square" />Add Recipe Modal
          </div>

          <AddRecipeModal visible={this.state.visible} /> 

        </Menu.Item>

          <Menu.Item key="shuffle">
            <Button type='primary' onClick={shuffle}>
              Shuffle
             </Button>
          </Menu.Item>
          {/* TODO find out if button serch doesn't work in input field uncomment Menu.Item below */}
          <Menu.Item key="inputSearch">
          <Input
          style={inputStyle}
          suffix={<Icon type='search' style={suffixIconStyle} />}
          placeholder='input search text'
          onChange={search}
        />
          </Menu.Item>
          {/* <Menu.Item key="search">
          <Icon type="search" />
          Search
         
        </Menu.Item> */}
          <Menu.Item key="columnDropdown">
          <Dropdown
          trigger={['click']}
          overlay={
            <Menu onClick={setColumns}>
              <Menu.Item key='1'>
                1
              </Menu.Item>
              <Menu.Item key='2'>
                2
              </Menu.Item>
              <Menu.Item key='3'>
                3
              </Menu.Item>
              <Menu.Item key='4'>
                4
              </Menu.Item>
              <Menu.Item key='5'>
                5
              </Menu.Item>
              <Menu.Item key='6'>
                6
              </Menu.Item>
            </Menu>
          }>
          <Button style={buttonStyle}>
            {columns} Columns <Icon type='down' />
          </Button>

        </Dropdown>
          </Menu.Item>

          <Menu.Item key="marginDropdown">
          <Dropdown
          trigger={['click']}
          overlay={
            <Menu onClick={setMargin}>
              <Menu.Item key='0'>
                0
              </Menu.Item>
              <Menu.Item key='20'>
                20
              </Menu.Item>
              <Menu.Item key='40'>
                40
              </Menu.Item>
              <Menu.Item key='70'>
                70
              </Menu.Item>
            </Menu>
          }>

          <Button style={buttonStyle}>
            {margin} px margin <Icon type='down' />
          </Button>
        </Dropdown>
          </Menu.Item>

          <Menu.Item key="heightSwitch">
            <span style={spanStyle}>
              Individual height
            </span>
            <Switch style={switchStyle} defaultChecked onChange={setHeight} />
            <span style={spanStyle} />
          </Menu.Item>

          <Menu.Item key="buttonGroceries">
          <Button type='primary'>
          <Link to='/groceries'>View collection without fanciness</Link>
        </Button>
          </Menu.Item>

          <Menu.Item key="dropdead">
          
          <HeaderDropdown />
        </Menu.Item>
        </Menu>

      </div>
    )
  }

}

export default Header
