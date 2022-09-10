import React from "react";

const Pagination = ({ page, paginationHandler, totalPages}) => {
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

export {Pagination};
