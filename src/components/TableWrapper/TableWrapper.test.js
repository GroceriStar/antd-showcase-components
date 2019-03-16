import React from 'react'
import ReactDOM from 'react-dom'
import Enzyme, { shallow, configure } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'

import TableWrapper from './TableWrapper'

// Setup enzyme's react adapter
configure({ adapter: new EnzymeAdapter() })

const columns = [
  // {
  // title: 'ID',
  // dataIndex: 'id',
  // },
  {
    title: 'Title',
    dataIndex: 'title'
  },
  {
    title: 'Directions',
    dataIndex: 'directions'
  },
  {
    title: 'Ingredients',
    dataIndex: 'ingredients'
  },
  {
    title: 'Prep Time',
    dataIndex: 'prep_time'
  },
  {
    title: 'Total Time',
    dataIndex: 'total_time'
  },
  {
    title: 'Yield',
    dataIndex: 'recipe_yield'
  },
  {
    title: 'URL',
    dataIndex: 'url'
  }

]

// describe("xxx", () => {
//   it("xxx", () => {
//
//
//   });
// });
