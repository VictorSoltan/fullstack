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
        fontsize: '14px',
        // textdecoration: none,
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
        height: '320px',
    };

    return (
        <Container style={style}>
            <Slider {...settings}>
                {
                    lastProducts.map((value) => {
                        return (
                            <Card style={style}>
                                <NavLink to={{pathname: '/devices/' + value.id}}>
                                    <div className="styleSlider">
                                        <img src={value.image} alt="img" className="imageSlider"
                                             crossOrigin="anonymous"/>
                                        {/*<Card.Img variant="top" src="http://localhost:5000/static/image-1659789848904.jpg"/>*/}
                                        {value.name}
                                        <p>{value.price}</p>
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
