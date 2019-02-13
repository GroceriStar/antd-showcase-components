import React, { Component } from 'react'

import { Dropdown, Menu, Icon, message } from 'antd'



const HeaderDropdown = () => {

  return (
    <Dropdown
      trigger={["click"]}
      overlay={DropdownMenu}
    >
      <Icon className="card-action-content" type="ellipsis" />
    </Dropdown>
  )
}

export default HeaderDropdown
