import React, { Component } from 'react'
import {
  // Menu, Icon,
  Modal, Button
} from 'antd'


  // import AddRecipe from './AddRecipe'

// const AddRecipeModal = ({ visible }) => {

const footerButtons = (handleCancel) => {

  return [
    <Button key="back" size="large"
      onClick={handleCancel}>
      Cancel
    </Button>
  ]
}


class AddRecipeModal extends Component {

  constructor(props){
    super(props);

    this.state = {
      visible: false
       // this.props.visible // yeah it's bad @TODO change this
    }

    this.handleOk     = this.handleOk.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  componentDidMount() {
    this.setState((state, props) => ({
      visible: props.visible
    }));
  }

  // state = {
  //   // current: 'app',
  //
  // }

  handleOk = e => {
    console.log(e)
    this.setState({
      visible: false
    })
  }

  handleCancel = e => {
    console.log(e)
    this.setState({
      visible: false
    })
  }

  render() {
    // console.log(this.props.visible)
    console.log(this.state)

    // this.setState({
    //   visible: this.props.visible
    // })

    const { title, isVisible, handleOk, handleCancel } = this.props;
    // <Modal
    //   title={title}
    //   visible={isVisible}
    //   onOk={handleOk}
    //   onCancel={handleCancel}
    //   footer={[
    //     <Button key="back" size="large" onClick={handleCancel}>
    //       Cancel
    //     </Button>
    //   ]}
    // >
    // <hr />
    //   { /* <AddRecipe handleOk={handleOk} /> */}
    //
    // </Modal>

    return (
      <Modal
        title="Add Recipe"
        visible={this.state.visible}
        onOk={this.handleOk}
        onCancel={this.handleCancel}
        footer={footerButtons(this.handleCancel)}
      >
      <hr />

        { /* <AddRecipe handleOk={this.handleOk} /> */}

      </Modal>
    )
  }

}

export default AddRecipeModal;
