import React, { Component, Fragment } from 'react'

import { List } from 'antd';

const style = {
  // marginBottom: 16
}

// @TODO add header, footer
// size = default middle small
const ListWrapperShort = ( data, size = 'default' ) => {

  return (
    <Fragment>
      <List
        size={size}
        header={<div>Header</div>}
        footer={<div>Footer</div>}
        bordered
        dataSource={data}
        renderItem={item => (<List.Item>{item}</List.Item>)}
      />
    </Fragment>
  )
}

export default ListWrapperShort;
