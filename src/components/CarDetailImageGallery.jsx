import React, { Component } from 'react';
import '../stylesheets/CarDetail.css';

class CarDetailImageGallery extends Component {

  render(){
    return(
      <div className="gallery-bar">
        <div
          className="gallery-bar-frame"
          onClick={this.props.swapMainImage.bind(this, 0)}
        >
          <img
            className="gallery-image"
            src={this.props.carDesc.imageLink1}
            alt="carPic 1"
          />
        </div>
        <div
          className="gallery-bar-frame"
          onClick={this.props.swapMainImage.bind(this, 1)}
        >
          <img
            className="gallery-image"
            src={this.props.carDesc.imageLink2}
            alt="carPic 2"
          />
        </div>
        <div
          className="gallery-bar-frame"
          onClick={this.props.swapMainImage.bind(this, 2)}
        >
          <img
            className="gallery-image"
            src={this.props.carDesc.imageLink3}
            alt="carPic 3"
          />
        </div>
        <div
          className="gallery-bar-frame"
          onClick={this.props.swapMainImage.bind(this, 3)}>
          <img
            className="gallery-image"
            src={this.props.carDesc.imageLink4}
            alt="carPic 4"
          />
        </div>
        <div
          className="gallery-bar-frame"
          onClick={this.props.swapMainImage.bind(this, 4)}>
          <img
            className="gallery-image"
            src={this.props.carDesc.imageLink5}
            alt="carPic 5"
          />
        </div>
        <div
          className="gallery-bar-frame"
          onClick={this.props.swapMainImage.bind(this, 5)}
          >
          <img
            className="gallery-image"
            src={this.props.carDesc.imageLink6}
            alt="carPic 6"
          />
        </div>
      </div>
    )
  }
}

export default CarDetailImageGallery;
