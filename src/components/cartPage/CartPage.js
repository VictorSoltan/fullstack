import {useDispatch, useSelector} from "react-redux";
import {OrderItem} from "../orderItem/OrderItem";
import {Button} from "react-bootstrap";
import styled from "styled-components";
import {mobile} from "../../responsive";
import {useNavigate} from "react-router-dom";
import React from "react";

const CartPage = () => {
    const state = useSelector(state => {
        const {cart, device} = state;
        return {cart, device}
    });

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const {itemsInCart} = state.cart;

    const totalPrice = itemsInCart.reduce((acc, device) => acc += device.price, 0);

    const Container = styled.div`
      margin-top: 50px;
    `;

    const Wrapper = styled.div`
      padding: 20px;
      ${mobile({padding: '10px'})}
    `;

    const Title = styled.h1`
      font-weight: 300;
      text-align: center;
    `;

    const Top = styled.div`
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 20px;
    `;

    const TopButton = styled.button`
      padding: 10px;
      font-weight: 600;
      cursor: pointer;
      border: ${(props) => props.type === 'filled' && 'none'};
      background-color: ${(props) =>
              props.type === 'filled' ? 'black' : 'transparent'};
      color: ${(props) => props.type === 'filled' && 'white'};
    `;

    const Bottom = styled.div`
      display: flex;
      height: 40px;
      justify-content: space-between;
      ${mobile({flexDirection: 'column'})}
    `;

    const Info = styled.div`
      flex: 3
    `;

    const Summary = styled.div`
      flex: 1;
      border: 0.5px solid lightgray;
      border-radius: 10px;
      padding: 20px;
      height: 50vh;
    `;

    const SummaryTitle = styled.h1`
      font-weight: 200;
    `;

    const SummaryItem = styled.div`
      margin: 30px 0px;
      display: flex;
      justify-content: space-between;
    `;

    const SummaryItemText = styled.span``;

    const backToShop = () => {
        navigate('/devices');
    };

    if (itemsInCart < 1) {
        return (
            <div>
                <Top>
                    <button className="topBtn" onClick={backToShop}>Продовжити покупки</button>
                </Top>
                <Top>
                    <h1>Зараз гарний час щоб щось вибрати</h1>
                </Top>
                <Top>
                    <h4>Ваш кошик порожній</h4>
                </Top>
            </div>
        )
    }

    return (
        <Container>
            <Wrapper>
                <Title>Your bag</Title>
                <Top>
                    <TopButton onClick={backToShop}>Continue Shopping</TopButton>
                    <Button onClick={() => dispatch({type: "CLEAR_CART"})}>Clear cart</Button>
                </Top>
                <Bottom>
                    <Info className="order-page_left">
                        {itemsInCart.map(device =>
                            <OrderItem key={device._id} device={device}/>
                        )}
                    </Info>
                    <Summary>
                        <SummaryTitle>Order Summary</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>
                                {itemsInCart.length} товаров на сумму
                                {totalPrice} грн
                            </SummaryItemText>
                        </SummaryItem>
                    </Summary>

                    <Button className="orderButton">Оформить заказ</Button>
                </Bottom>
            </Wrapper>
        </Container>
    )
}

export {CartPage};
