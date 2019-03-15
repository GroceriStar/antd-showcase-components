import React, { Component } from 'react'
import { List, Card, Ellipsis, Icon, Button } from 'antd'
import { ListWrapper, Em }   from '@groceristar/cards-wrapper';

class ListWrapperEmpty extends Component {

  getListWrapper(list){
    if(list != undefined && list.length > 0){
      return (<ListWrapper list={list} />)
    } else {
      return (<Em />)
    }
  }

  render() {
    return (
      <div>
        {this.getListWrapper(this.props.list)}
      </div>
    );
  }
}

export default ListWrapperEmpty;
