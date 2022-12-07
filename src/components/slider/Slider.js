import Slider from "react-slick";
import {Card, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LeftArrow from "../../assets/left_icon-icons.com_61213.svg";
import RightArrow from "../../assets/rightarrow_121279.svg";
import {NavLink} from "react-router-dom";
import React from "react";

const Sliders = ({lastProducts}) => {
    const SlickLeft = ({currentSlide, slideCount, ...props}) => (
        <img src={LeftArrow} alt="prevArrow" {...props}/>
    );

    const SlickRight = ({currentSlide, slideCount, ...props}) => (
        <img src={RightArrow} alt="nextArrow" {...props}/>
    );

    const settings = {
        // centerPadding: "60px",
        dots: false,
        infinite: false,
        speed: 600,
        slidesToShow: 6,
        slidesToScroll: 3,
        initialSlide: 0,
        prevArrow: <SlickLeft/>,
        nextArrow: <SlickRight/>
    };

    const style = {
        width: '100%',
        height: '270px',
    };

    return (
        <Container style={style}>
            <Slider {...settings}>
                {
                    lastProducts.map((value) => {
                        return (
                            <Card style={style}>
                                <NavLink className="NavLink" to={{pathname: '/devices/' + value.id}}>
                                    <div className="styleSlider">
                                        <img src={value.image} alt="img" className="imageSlider"
                                             crossOrigin="anonymous"/>
                                        {value.name}
                                        <p>{value.price} uah</p>
                                    </div>
                                </NavLink>
                                {/*<ProductBuy key={value.date} device={value}/>*/}
                            </Card>
                        );
                    })
                }
            </Slider>
        </Container>
    )
};

export {Sliders};
