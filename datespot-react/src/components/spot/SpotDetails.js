import React, { Fragment, useState } from "react";
import SpotMap from "./SpotMap.js"
import { Jumbotron, Container, Row, Col, Toast, Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTie } from '@fortawesome/free-solid-svg-icons';
import { faMoneyBillWave } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import "./css/SpotDetails.css";



const SpotDetails = (props) => {

    const [show, setShow] = useState(false);
    console.log(1, props.location.aboutProps);
    return(
    
       <Fragment>
            <Jumbotron fluid className="shadow" style={{
                backgroundImage: `url(${props.location.aboutProps.url})`, 
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat', 
                height: '375px'
                
                }}>
                <Container>
                    <h1><span>{props.location.aboutProps.title}</span></h1>
                    <h3><span>
                    {props.location.aboutProps.summary}
                    </span></h3>
                    <h6><span>
                    {props.location.aboutProps.location}
                    </span></h6>
                </Container>
            </Jumbotron>
    <div class="container">
        <Container className="cont">
            <Row>
                <Col>
                <p><FontAwesomeIcon icon={faMoneyBillWave} /> : £{props.location.aboutProps.avg_cost}</p>
                <p><FontAwesomeIcon icon={faClock} /> : {props.location.aboutProps.best_times}</p>
                <p><FontAwesomeIcon icon={faUserTie} /> : {props.location.aboutProps.dress}</p>
                <p><FontAwesomeIcon icon={faInfoCircle} /> : {props.location.aboutProps.description}</p>
                <div className="spotButton">
                    <Button onClick={() => setShow(true)}>Let me give you some advice...</Button>
                </div>
                <Toast onClose={() => setShow(false)} show={show} delay={20000} autohide>
                    <Toast.Header>
                        <img
                        src="holder.js/20x20?text=%20"
                        className="rounded mr-2"
                        alt=""
                        />
                        <strong className="mr-auto">Advice from DateSpot's in-house experts</strong>
                    </Toast.Header>
                    <Toast.Body>{props.location.aboutProps.advice}</Toast.Body>
                    </Toast>

                
                </Col>
                <Col>
                    <div className="map shadow">
                        <SpotMap longitude = {props.location.aboutProps.longitude} 
            latitude ={props.location.aboutProps.latitude} ></SpotMap>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                </Col>
                <Col>
                    <div className="address"><FontAwesomeIcon icon={faLocationArrow} /> : {props.location.aboutProps.address} </div>
                </Col>
            </Row>
        </Container>
        </div>
        </Fragment>
       
    );
};



export default SpotDetails;
