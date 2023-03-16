import { Offcanvas, OffcanvasHeader, OffcanvasTitle } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";

type ShoppingCartProps = {
    isOpen: boolean
}

export function ShoppingCart() {
    const {closeCart} = useShoppingCart()
    return <Offcanvas show={true} onHide={closeCart} placement="end">
        <OffcanvasHeader closeButton>
            <OffcanvasTitle>Cart</OffcanvasTitle>
        </OffcanvasHeader>
    </Offcanvas>
}