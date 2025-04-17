import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";

import { Watching } from "../component/watching/watching";
import { DiscriptionMovie } from "../component/discription/discription";
import styles from "./watchinglayout.module.css";
import { useEffect } from "react";

function WatchingLayout() {
    const [video, setVideo] = useState({
        id: null,
        name: '',
        duration: '',
        description: ''
    });
    const { videoID } = useParams();
    useEffect(() => {
        console.log(videoID);
    }, [videoID]);
    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/getVideo/${videoID}`)
            .then(response => {
                const data = response.data.video;
                setVideo({
                    id: data.id,
                    title: data.title,
                    duration: data.duration,
                    description: data.description
                });
                console.log(response);
            })
            .catch(error => console.log(error));
    }, [videoID]);
    return (
        <div className={styles['watching-layout']}>
            <Watching />
            <DiscriptionMovie video={video} />
        </div>
    )
}
export { WatchingLayout }