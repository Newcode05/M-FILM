import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ResultCard } from "../result_card/resultcard";
import styles from "./listresult.module.css"
function Result() {
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true);
    const url = useLocation();
    const query = new URLSearchParams(url.search);
    const search = query.get('q');
    const genre = query.get('g');
    useEffect(() => {
        console.log(videos);
    }, [videos])
    useEffect(() => {
        const option = {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
            }
        }
        fetch(`http://127.0.0.1:8000/api/getVideoBy?q=${search}&g=${genre}`, option)
            .then(res => res.json())
            .then(data => {
                setLoading(false);
                console.log(data);
                if (data['get_video_status'] == 'success') {
                    setVideos(prev => ([...data.videos]));
                    console.log(data.videos);
                }
                else {
                    console.log('a');
                    setVideos([]);
                }
            })
            .catch(error => console.log(error));
    }, [search]);
    return (
        <div className={styles['list-result']}>
            <div className={styles['list-result-content']}>
                {loading ? [...Array(20)].map((_, index) => {
                    return <ResultCard key={index} />
                }) : videos.length <= 0 ? <div style={{ width: 'max-content', color: 'white', fontSize: '1.5rem' }} className={styles['no-result']}>Không có kết quả nào phù hợp</div> :
                    videos.map((video, index) => {
                       return <ResultCard key={index} video={video} />
                    })}
            </div>
        </div>
    )
}
export { Result };