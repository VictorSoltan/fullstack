import {useEffect, useState} from "react";
import {getComments} from "../../services/axios/commentsService";
import {Comment} from "./Comment";

const Comments = () => {
    const [backendComments, setBackendComments] = useState([]);

    useEffect(() => {
        getComments.then(value => console.log(value))
    });

    return (
        <div>
            {
                backendComments.map(value => (
                    <Comment key={value._id} item={value}/>
                ))
            }
        </div>
    )
}

export {Comments};
