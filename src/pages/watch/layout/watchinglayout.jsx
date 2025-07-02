
import {useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { Watching } from "../component/watching/watching";
import { DescriptionMovie } from "../component/discription/description";
import { useLoading } from "../../../Providers/Context/LoadingContext";
import { intance } from "../../../Providers/axiosClient";
import styles from "./watchinglayout.module.css";

function WatchingLayout() {
    const { loading } = useLoading();
    const [load, setLoad] = useState(true);
    const [video, setVideo] = useState({
        id: null,
        name: '',
        duration: '',
        description: '',
        "poster_hor_url": "",
        "poster_ver_url": "",
        season: [],
    });
    const { videoID } = useParams();
    useEffect(() => {
        console.log(videoID);
    }, [videoID]);
    useEffect(() => {
        console.log(video);
    }, [video]);
    useEffect(() => {
        intance.get(`/api/getVideo/${videoID}`)
            .then(res => {
                setLoad(false);
                const { video } = res.data;
                console.log(video);
                setVideo({
                    id: video.id,
                    title: video.title,
                    duration: video.duration,
                    description: video.description,
                    url: res.data.src,
                    "poster_hor_url": video["poster_hor"],
                    "poster_ver_url": video["poster_ver"],
                    season: [...video.season]
                });
            })
            .catch(error => console.log(error));
    }, [videoID]);
    return (
        !loading && !load ?
            <div className={styles['watching-layout']}>
                <Watching video={video} />
                <DescriptionMovie video={video} />
            </div> : null
    )
}
export { WatchingLayout }