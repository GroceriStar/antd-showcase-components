import React, { Component } from 'react';
import {
  Form,
  // Row, Col, Input, Button, Icon,
  // Layout,

} from 'antd';

import AdvancedSearchForm from './AdvancedSearchForm'

const WrappedAdvancedSearchForm = Form.create()(AdvancedSearchForm);

export default WrappedAdvancedSearchForm;
