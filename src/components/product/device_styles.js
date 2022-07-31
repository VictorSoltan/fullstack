const styles = {
    review: {
        marginBottom: 15,
        borderBottom: "1px solid #B8B8B8",
        padding: 10
    },
    review_title: {
        display: "flex",
        padding: "10px 15px"
    },
    logo_user: {
        marginRight: 10
    },
    addReview: {
        padding: "5px",
        border: "1px solid #000",
        borderRadius: 10,
        display: "inline-block",
        marginBottom: 10,
        background: "#E8E8E8",
        cursor: "pointer"
    },

    popup_frame: {
        height: "100vh",
        width: "100vw",
        background: "rgba(0, 0, 0, 0.4)",
        position: "fixed",
        zIndex: 5,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        left: 0,
        top: 0
    },
    popup: {
        padding: "20px 50px",
        borderRadius: 12,
        background: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"

    },
    popup_title: {
        marginBottom: 20,
        fontSize: 20,
        fontWeight: 400
    }
};

export default styles;
