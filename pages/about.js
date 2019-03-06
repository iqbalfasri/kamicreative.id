import React, { Component } from "react";
import Head from "../components/head";

export default class About extends Component {
  // Add some delay
  static async getInitialProps() {
    await new Promise(resolve => {
      setTimeout(resolve, 500);
    });
    return {};
  }

  render() {
    return (
      <div>
        <Head title="About" />
        <p>This is about Next!</p>
      </div>
    );
  }
}
