import React, { Component } from "react";
import Slider from "react-slick";
import styles from '../Useful/Useful.module.css'
import prev from '../../../assets/images/left-arrow.svg';
import next from '../../../assets/images/right-arrow.svg';

export default class Useful extends Component {
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
    }
    next() {
        this.slider.slickNext();
    }
    previous() {
        this.slider.slickPrev();
    }
    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            slickNext: false,
            slickPrev: false

        };
        return (
            <div>
                <div className={`${styles.header} d-flex justify-content-betveen align-items-center`}>
                    <div>Ресурсы</div>
                    <div className="d-flex">
                        <img src={prev} alt="" onClick={this.previous} className={styles.prev} />
                        <img src={next} alt="" onClick={this.next} className={styles.next} />
                    </div>
                </div>
                <Slider ref={c => (this.slider = c)} {...settings} className={styles.slide}>
                    <div key={1}>
                        <h3>1</h3>
                    </div>
                    <div key={2}>
                        <h3>2</h3>
                    </div>
                    <div key={3}>
                        <h3>3</h3>
                    </div>
                    <div key={4}>
                        <h3>4</h3>
                    </div>
                    <div key={5}>
                        <h3>5</h3>
                    </div>
                    <div key={6}>
                        <h3>6</h3>
                    </div>
                </Slider>
                
            </div>
        );
    }
}