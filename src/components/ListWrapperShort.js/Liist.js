import React, { Component, Fragment } from 'react'

import { List } from 'antd';

// import { DefaultList } from '@groceristar/grocery-component'
//
// import _        from "lodash";

// import {
//   getRandomRecipe,
//   getFirstFiveRecipes,
//   getFiveRandomIngredients,
//   getRecipeChickenKyivById,
//   getShowcaseFiveRecipes
// } from './../../selectors'


// const data = [
//   'Racing car sprays burning fuel into crowd.',
//   'Japanese princess to wed commoner.',
//   'Australian walks 100km after outback crash.',
//   'Man charged over missing wedding girl.',
//   'Los Angeles battles huge wildfires.',
// ];

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
