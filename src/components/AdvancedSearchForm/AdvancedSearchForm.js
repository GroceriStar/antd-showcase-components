import React, { Component } from 'react';

import {
  Form, Row, Col, Input, Button, Icon,
} from 'antd';


const asf_style = ( index, count ) => {
  const style = {
    display: index < count ? 'block' : 'none'
  }
  return style;
}

class AdvancedSearchForm extends React.Component {
  state = {
    expand: false,
  };

  // To generate mock Form.Item
  getFields() {
    const count = this.state.expand ? 10 : 6;
    const { getFieldDecorator } = this.props.form;
    // const style = {
    //   display: i < count ? 'block' : 'none'
    // }

    const children = [];
    for (let i = 0; i < 10; i++) {
      children.push(
        <Col span={8} key={i} style={asf_style(i, count)}>
          <Form.Item label={`Field ${i}`}>
            {getFieldDecorator(`field-${i}`, {
              rules: [{
                required: true,
                message: 'Input something!',
              }],
            })(
              <Input placeholder="placeholder" />
            )}
          </Form.Item>
        </Col>
      );
    }
    return children;
  }


  handleSearch = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      console.log('Received values of form: ', values);
    });
  }

  handleReset = () => {
    this.props.form.resetFields();
  }

  toggle = () => {
    const { expand } = this.state;
    this.setState({ expand: !expand });
  }


  render() {

    const iconType = this.state.expand ? 'up' : 'down'

    const styles = {
      col:      { textAlign: 'right' },
      clear:    { marginLeft: 8 },
      collapse: { marginLeft: 8, fontSize: 12 }
    }

    return (
      <Form
        className="ant-advanced-search-form"
        onSubmit={this.handleSearch}
      >
        <Row gutter={24}>
          {this.getFields()}
        </Row>
        <Row>
          <Col span={24} style={styles.col}>
            <Button type="primary" htmlType="submit">
              Search
            </Button>
            <Button style={styles.clear} onClick={this.handleReset}>
              Clear
            </Button>

            <a style={styles.collapse} onClick={this.toggle}>
              Collapse
              <Icon type={iconType} />
            </a>
          </Col>
        </Row>
      </Form>
    );
  }
}

export default AdvancedSearchForm;
