import React, { useState, Component } from 'react';
import PropTypes from 'prop-types';

import { Carousel, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import demo from './Statics/demo.jpg'
import demo2 from './Statics/demo2.jpg'
import { propTypes } from 'react-bootstrap/esm/Image';

function ControlledCarousel() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    return (
      
      <Carousel activeIndex={index} onSelect={handleSelect}  interval = {null} slide={false}>
            <Carousel.Item>
                <div className='photo-card-width'>
                    <img
                        className="d-block w-100"
                        src={demo}
                        alt="First slide"
                    />
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div className='photo-card-width'>
                    <img
                        className="d-block w-100"
                        src={demo2}
                        alt="First slide"
                    />
                </div>
            </Carousel.Item>
      </Carousel>
    );
  }
  
  
export default class PhotoCard extends Component{
  

  render(){
    const { place_name, text } = this.props

    return(
      <Card className='photo-card-width'>
        <ControlledCarousel/>
        <Card.Body>
          <div className='photo-card-content-wrap'>
            <h7>{ place_name }</h7>
            <article>
              { text }
            </article>
          </div>
          
        </Card.Body>
      </Card>
    )
  }
}




