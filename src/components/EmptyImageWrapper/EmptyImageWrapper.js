import React, { Component, Fragment } from 'react';

import { Icon, Empty } from 'antd'
import { Link } from 'react-router-dom'

import Img from 'react-image'


const EmptyImageWrapper = ( image ) => {
  return (
    <Img src={image} unloader={<Empty />} />
  )
}

const LinkEmptyImage = ( path, image ) => {
  return (
    <Link to={path}>
      <div className="custom-image">

      {EmptyImageWrapper(image)}

      </div>
    </Link>
  )
}



export {
  EmptyImageWrapper,
  LinkEmptyImage
}
