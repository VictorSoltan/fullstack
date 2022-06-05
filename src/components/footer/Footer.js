import React from "react";
import './Footer.css';

const Footer = ({ page, paginationHandler, totalPages}) => {
    return (
        <footer>
            <button disabled={page <= 1} onClick={() => {
                paginationHandler(-1)
            }}>prev
            </button>

            {page}

            <button disabled={page >= totalPages} onClick={() => {
                paginationHandler(1)
            }}>next
            </button>
        </footer>
    )
};

export {Footer};
