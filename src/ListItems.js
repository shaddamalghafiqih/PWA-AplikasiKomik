import React, {Component} from "react";
import { Modal } from "antd";
import "antd/dist/antd.css";
import Data from "./assets.json";
import './ListItems.css';


export default class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  handleModal = (results) => {
    this.setState({
      visible: true,
      title: results.title,
      writtor: results.writtor,
      cover: results.cover,
    })
  }
  render() {
    return (
      <div className="container">
        <div className="boxWhite">
          <center>
            <h1 className="m-0">List Comic</h1>
          </center>
          <Modal
            title="LIST DETAIL COMIC"
            centered
            visible={this.state.visible}
            onOk={() => this.setState({ visible: false })}
            onCancel={() => this.setState({ visible: false })}
            width={500}
          >
            <div className="text-center">
              <img src={this.state.cover} alt="cover comic"></img>
              <h3>{this.state.title}</h3>
              <p>Author: {this.state.writtor}</p>
            </div>
          </Modal>
          <div className="container">
            <center>
            {Data.map((results) => {
              return(
                <div className="card mb-3 text-center d-flex shadow" key={results.id}>
                  <div className="card-body text-center">
                    <img src={results.cover} alt="Cover Comic"></img>
                    <h3 className="card-title">{results.title}</h3> 
                  </div>
                  <button
                    className="button ml-5 mr-5 rounded mb-2"
                    onClick={() => this.handleModal(results)}
                  >                  
                  show more detail
                  </button>
                </div>
              );
            })}
            </center>
          </div>
        </div>
      </div>
    );
  }
}