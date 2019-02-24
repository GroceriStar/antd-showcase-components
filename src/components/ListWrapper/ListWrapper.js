import React, { Component } from 'react'
import { List, Card, Ellipsis, Icon, Button } from 'antd'


const ItemCard = (item) => (
  <List.Item key={item.key}>
    <Card hoverable className="card" actions={[<a>OK</a>, <a>OK</a>]}>
      <Card.Meta
        avatar={<img alt="" className="cardAvatar" src={item.recipe.img} />}
        title={<a>{item.recipe.title}</a>}
        description={
          <h2>
            {item.recipe.directions}
          </h2>
        }
      />
    </Card>
  </List.Item>
)

const ItemCardEmpty = () => (
  <List.Item>
    <Button type="dashed" className="newButton">
      <Icon type="plus" /> Add new
    </Button>
  </List.Item>
)

const renderItem = ( item ) => {
  // can be replaced with <ItemCard />
  return (
    ( item ) ? ItemCard(item) : ItemCardEmpty
  )
}

const gridStyles = {
  gutter: 24,
  lg: 3,
  md: 2,
  sm: 1,
  xs: 1
}

const ListWrapper = ( { list } ) => {
  return (
    <List
        rowKey="id"
        grid={gridStyles}
        dataSource={['', ...list]}
        renderItem={ item => renderItem( item ) }
      />
  )
}

export default ListWrapper;
