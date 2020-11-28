import React, {Component} from "react";
import { Button, Modal } from "antd";
import "antd/dist/antd.css";
import Data from "./assets.json";
import './ListItems.css';
import Profile from './profile.jpg';

export default class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal1visible: false,
      modal2visible: false,
    };
  }

  handleModal1 = (results) => {
    this.setState({
      modal1visible: true,
      title: results.title,
      writtor: results.writtor,
      cover: results.cover,
    })
  }
  handleModal2 = () => {
    this.setState({
      modal2visible: true,
    })
  }

  render() {
    return (
      <div className="container">
        <div className="boxWhite">
          <center>
            <h1 className="m-0">List Comic</h1>
            <Button
            className="button ml-5 mr-5 rounded mb-2"
            onClick={() => {this.handleModal2()}}
            >
            About Me
            </Button>
          </center>
          {/* Modal 1 yang nampilin list data */}
          <Modal
            title="LIST DETAIL COMIC"
            centered
            visible={this.state.modal1visible}
            onOk={() => this.setState({ modal1visible: false })}
            onCancel={() => this.setState({ modal1visible: false })}
            width={500}
          >
            <div className="text-center">
              <img src={this.state.cover} alt="cover comic"></img>
              <h3>{this.state.title}</h3>
              <p>Author: {this.state.writtor}</p>
            </div>
          </Modal>
          {/* Modal 2 yang nampilin about */}
          <Modal
            title="ABOUT ME"
            centered
            visible={this.state.modal2visible}
            onOk={() => this.setState({ modal2visible: false })}
            onCancel={() => this.setState({ modal2visible: false })}
            width={500}
          >
            <div className="text-center">
              <img src={Profile} alt="Profile" width="100px" height="100px"></img>
              <h3>Indira ananda putra utama</h3>
              <p>21120118130091</p>
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
                    onClick={() => this.handleModal1(results)}
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