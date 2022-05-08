import React from "react";
import './Footer.css';

const Footer = ({ page, paginationHandler}) => {
    return (
        <footer>
            <button disabled={page <= 1} onClick={() => {
                paginationHandler(-1)
            }}>prev
            </button>

            {page}

            <button onClick={() => {
                paginationHandler(1)
            }}>next
            </button>
        </footer>
    )
};

export default Footer;
