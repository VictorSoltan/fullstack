import Slider from "react-slick";
import {Card, Button, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {useEffect, useState} from "react";
import {searchDevice} from "../../services/axios/device.service";
import React from 'react';
import {NavLink} from "react-router-dom";
import LeftArrow from "../../assets/left_icon-icons.com_61213.svg";
import RightArrow from "../../assets/rightarrow_121279.svg";

const Sliders = () => {
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
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        prevArrow: <SlickLeft/>,
        nextArrow: <SlickRight/>
    };

    const [devices, setDevices] = useState([])

    useEffect(() => {
        searchDevice()
            .then(value => setDevices(value.data.data))
    }, []);

    const style = {
        width: '100%',
        padding: '30px'
    };
    return (
        <Container style={style}>
            <Slider {...settings}>
                {
                    devices.map((value, index) => {
                        return (
                            <NavLink to={{pathname: '/products/' + value._id}}>
                                <Card style={style}>
                                    <Card.Body>
                                        {/*<Card.Img variant="top" src="./http://www.w3.org/1999/xlink"/>*/}
                                        <Card.Title>Card title {index}</Card.Title>
                                        <Card.Text>
                                            {value.name}
                                        </Card.Text>
                                        <Button variant="primary">
                                            Go somewhere
                                        </Button>
                                    </Card.Body>
                                </Card>
                            </NavLink>
                        );
                    })
                }
            </Slider>
        </Container>
    )
};

export default Sliders;
