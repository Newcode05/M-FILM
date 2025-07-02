import { useEffect, useState } from "react";
import { ListVideo } from "./component/list/listvideo";
import { intance } from "../../../Providers/axiosClient";
import styles from "./update.module.css"
import { set } from "lodash";

function Update() {
    const [video, setVideo] = useState([]);
    const [err, setErr] = useState(false);
    useEffect(() => {
        const req = {
            'limit': '2',
            'offset': '0'
        }
        intance.post('/getVideoUp', req)
            .then(res => {
                if (res.data['message'] === 'success') {
                    setVideo(res.data.videos)
                }
                else {

                }
            })
            .catch(err => {
                setErr('Server error!');
                console.log(err);
            });
    }, []);
    return (
        <div className={styles['update-contain']}>
            {err ? err : <ListVideo video={video} />}
        </div>
    )
}
export { Update }