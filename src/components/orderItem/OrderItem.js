import {useDispatch} from "react-redux";
import './OrderItem.css';
import {AiOutlineCloseCircle} from "react-icons/all";
import styled from "styled-components";
import {mobile} from "../../responsive";

const OrderItem = ({device}) => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch({type: "deleteItemFromCart", payload: device._id});
    }

    const Product = styled.div`
      display: flex;
      justify-content: space-between;
      ${mobile({flexDirection: 'column'})}
    `;

    const ProductDetail = styled.div`
      flex: 2;
      display: flex;
    `;

    const ProductName = styled.span``;

    const ProductBrand = styled.div`
      font-size: 30px;
      font-weight: 200;
      ${mobile({marginBottom: '20px'})}
    `;

    const Details = styled.div`
      padding: 20px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
    `;

    const Image = styled.img`
      width: 200px;
    `;

    return (
        <div className="order-item">
            <Product>
                <ProductDetail>
                    <Image src={device.image}/>
                    <Details>
                        <ProductName>
                            <b>Product:</b> {device.name}
                        </ProductName>
                        <ProductBrand>
                            <b>Brand:</b> {device.brand}
                        </ProductBrand>
                        <ProductBrand>
                            <b>Price:</b> {device.price}
                        </ProductBrand>
                    </Details>
                </ProductDetail>
            </Product>
            <div className="order-item_price">
                <AiOutlineCloseCircle
                    size={25}
                    className="cart-item_delete-icon"
                    onClick={handleClick}
                />
            </div>
        </div>
    )
}

export {OrderItem};
