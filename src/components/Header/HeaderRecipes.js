import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Menu, Icon, Modal, Button } from 'antd'

// // import AddRecipe from './AddRecipe'

import AddRecipeModal from '~/AddRecipeModal/AddRecipeModal';

// //@TODO update it. different names. confusing
import HeaderDropdown from '~/Dropdown/HeaderDropdown';

class HeaderRecipes extends Component {

  state = {
    current: 'app',
    visible: false,


    data: this.props.data
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

  // handleOk = e => {
  //   console.log(e)
  //   this.setState({
  //     visible: false
  //   })
  // }
  //
  // handleCancel = e => {
  //   console.log(e)
  //   this.setState({
  //     visible: false
  //   })
  // }

  render() {

    console.log(this.state.visible)

    return (
      <Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
      >

        <Menu.Item key="get-data">
          <div onClick={this.reloadData}>
            <Icon type="reload" />
          </div>
        </Menu.Item>

        <Menu.Item key="app">
          <Icon type="appstore" />
          Recipe List
          {/*}<Link to="/recipelist" />*/}
        </Menu.Item>

        <Menu.Item key="add">
          <Icon type="appstore" />
          {/*Add Recipe*/}
          {/*}<Link to="/addrecipe" />*/}
          {/*}<Link to="/addrecipe" >Add Recipe</Link>*/}
        </Menu.Item>

        <Menu.Item key="alipay">
          <div onClick={this.showModal}>
            <Icon type="plus-square" />Add Recipe Modal
          </div>



          <AddRecipeModal visible={this.state.visible} />


        </Menu.Item>

        <Menu.Item key="search">
          <Icon type="search" />
          Search
          {/*}<Link to="/s" />*/}
        </Menu.Item>

        <Menu.Item key="search2">
          <Icon type="search" />
          Search
          {/*}<Link to="/s2" />*/}
        </Menu.Item>

        <Menu.Item key="dropdead">
          <Icon type="ellipsis" />
          {/*Search*/}
          {/*<Link to="/ssss" />*/}
          <HeaderDropdown />
        </Menu.Item>

      </Menu>
    )
  }
}

export default HeaderRecipes
