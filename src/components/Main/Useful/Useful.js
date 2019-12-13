import React from 'react';
import styles from '../Useful/Useful.module.css';
import { Tab, Tabs, Carousel, Row, Container, Col, Image } from 'react-bootstrap';
import reactBg from '../../../assets/images/reactBg.png';
import cssBg from '../../../assets/images/cssBg.jpg';
import javaBg from '../../../assets/images/javaBg.png'


export default function Useful({ id }) {
    return (
        <div className="w-100 p-4" id={id}>
            <h1 className="display-4 text-left">ПОЛЕЗНОСТИ</h1>
            <hr />
            <Tabs className={styles.navTabs} defaultActiveKey="home" id="uncontrolled-tab-example">
                <Tab eventKey="home" title="HTML">
                    <Carousel ride="false">
                        <Carousel.Item>
                            <Container>
                                <Row>
                                    <Col xs={2} md={2}>
                                    <Image src={reactBg} rounded />
                                    </Col>
                                    <Col xs={2} md={2}>
                                    <Image src={reactBg} rounded />
                                    </Col>
                                </Row>
                            </Container>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={cssBg}
                                alt="Third slide"
                            />

                            <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={javaBg}
                                alt="Third slide"
                            />

                            <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>

                </Tab>
                <Tab eventKey="profile" title="CSS">
                </Tab>
                <Tab eventKey="contact" title="JavaScript">
                </Tab>
                <Tab eventKey="profile" title="Rreact">
                </Tab>
            </Tabs>


        </div>
    );
};
