import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { ResultCard } from "../result_card/resultcard";
import { useLoading } from "../../../../Providers/Context/LoadingContext";
import { intance } from "../../../../Providers/axiosClient";
import styles from "./listresult.module.css"
const Result = () => {
    const { loading } = useLoading();
    const [videos, setVideos] = useState([]);
    const [load, setLoad] = useState(true);
    const url = useLocation();
    const query = new URLSearchParams(url.search);
    const search = query.get('q');
    const genre = query.get('g');
    useEffect(() => {
        console.log(videos);
    }, [videos])
    useEffect(() => {
        intance.get(`api/getVideoBy?q=${search}&g=${genre}`)
            .then(res => {
                setLoad(false);
                console.log(res);
                if (res.data['get_video_status'] == 'success') {
                    setVideos(prev => ([...res.data.videos]));
                    console.log(res.videos);
                }
                else {
                    console.log('a');
                    setVideos([]);
                }
            })
            .catch(error => console.log(error));
    }, [url]);
    return (
        <div className={styles['list-result']}>
            <div className={styles['list-result-content']}>
                {!loading && !load ? videos.length <= 0 ? <div style={{ width: 'max-content', color: 'white', fontSize: '1.5rem' }} className={styles['no-result']}>Không có kết quả nào phù hợp</div> :
                    videos.map((video, index) => {
                        return <ResultCard key={index} video={video} />
                    })
                    : [...Array(10)].map((_, index) => {
                        return <ResultCard key={index} />
                    })}
            </div>
        </div>
    )
}
export { Result };