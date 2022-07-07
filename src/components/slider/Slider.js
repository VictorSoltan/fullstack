import Slider from "react-slick";
import {Card, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './Slider.css';

const Sliders = () => {
    const settings = {
        centerMode: true,
        centerPadding: "60px",
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    };

    const posts = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const style = {
        width: '20rem'
    };
    return (
            <Slider {...settings}>
            {
                posts.map((index) => {
                    return (
                        <div>
                        <Card style={style}>
                            <Card.Body>
                                {/*<Card.Img variant="top" src="./http://www.w3.org/1999/xlink"/>*/}
                                <Card.Title>Card title {index}</Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet,
                                    consectetur adipisicing elit. Ab aliquam dolores eius esse est fugit, maxime repellendus
                                    suscipit! At, in?
                                </Card.Text>
                                <Button variant="primary">
                                    Go somewhere
                                </Button>
                            </Card.Body>
                        </Card>
                        </div>
                    );
                })
            }
            </Slider>
    )
};

export default Sliders;
