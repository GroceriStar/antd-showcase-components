import React, { Component, Fragment } from 'react';


import _        from "lodash";


// import "antd/dist/antd.css";

// import "./../styles.css";



import Header from '~/Header/Header';
import Main   from '~/Main/Main';




import { getFirstFiveRecipes } from "../selectors/selector";

//@babel/plugin-proposal-class-properties
class HomeView extends Component {

    state = {
      // data: getGroceryCollection(), //Did we need it here? i think we didn use all data from this method

    };






  render() {


    // const data = this.state.data;

    return (
      <Fragment>
        <div className="main">

            <Header />
            {/*
            <Main data={getFirstFiveRecipes()} />
            */}
        </div>
      </Fragment>

    );
  }
}

export default HomeView;
