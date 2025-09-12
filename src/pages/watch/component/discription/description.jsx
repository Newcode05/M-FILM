
import { useState, useEffect } from "react";
import styles from "./description.module.css"
function DescriptionMovie({ video = {} }) {
    const [seasonIndex, setSeasonIndex] = useState(0);
    const [episodeIndex, setEpisodeIndex] = useState(0);
    useEffect(() => {
        setEpisodeIndex(0);
        console.log(seasonIndex);
    }, [seasonIndex]);
    useEffect(() => {
        console.log(video.season[0]?.episode?.length);
    }, [video]);
    return (
        <div className={styles['discription-movie']}>
            <div className={styles['movie-name']}>{video.title}</div>
            <div className={styles['discription']}>{video.description}</div>
            <div className={styles['movie-infor']}>
                <div className={styles['season-contain']}>
                    {video.season?.length > 0 ? video.season.map((season, index) =>
                        <div key={index}
                            style={{
                                color: seasonIndex == index ? 'white' : 'black',
                                backgroundColor: seasonIndex == index ? 'black' : 'white',
                                border: seasonIndex == index ? '1px solid white' : '1px solid black',
                            }}
                            className={styles['season-item']}
                            onClick={() => { setSeasonIndex(index) }}>{`Season ${season['season_order']}`}</div>
                    ) : null}
                </div>
                {video.season[seasonIndex]?.episode?.length > 0 ?
                    <>
                        <h3 className={styles['episode-title']}>Episode</h3>
                        <div className={styles['episode-contain']}>
                            {video.season[seasonIndex]?.episode?.map((episode, index) =>
                                <div key={index}
                                    className={styles['episode-item']}
                                    style={{
                                        color: episodeIndex == index ? 'white' : 'white',
                                        border: episodeIndex == index ? '1px solid rgba(181,217,36,1)' : 'none',
                                    }}
                                    onClick={() => { setEpisodeIndex(index) }}
                                >{`Ep ${episode['episode_order']}`}</div>
                            )}
                        </div>
                    </> : null}
            </div>
            {/*
            <div className={styles['actor-list']}>
                {[...Array(5)].map((actor, index) =>
                    <Actor key={index} />
                )}
            </div>*/}

        </div>
    )
}
function Actor() {
    return (
        <div className={styles['actor']}>

        </div>
    )
}
export { DescriptionMovie }