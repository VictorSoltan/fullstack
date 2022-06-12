import {Col, Container, ListGroup, Row} from "react-bootstrap";

const Catalog = () => {
    return (
        <Container>
            <Row>
                <Col xs={3}>
                    <ListGroup variant="flush">
                        <ListGroup.Item>Samsung</ListGroup.Item>
                        <ListGroup.Item>Apple</ListGroup.Item>
                        <ListGroup.Item>Lenovo</ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col xs={9}>

                </Col>
            </Row>
        </Container>
    )
}

export {Catalog};
