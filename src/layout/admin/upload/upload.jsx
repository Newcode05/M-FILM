import { useContext, useEffect, useState } from 'react';
import { Snipper } from '../../../pages/login/component/loading_snipper/snipper';
import { LoadingContext, AuthContext } from '../../../App';
import { Sort } from '../../header/component/sort/sort';
import { intance } from '../../../Providers/axiosClient';
import styles from './upload.module.css';
function Upload() {
    const { user } = useContext(AuthContext);
    const { loading } = useContext(LoadingContext);
    const [src, setSrc] = useState('/Movie/Mavka.mp4');
    const [posterVer, setPosterVer] = useState("/Img-Poster/Poster-conan.jpg");
    const [posterHor, setPosterHor] = useState("/Img-Poster/poster-ngang-movide-26.jpg");
    const [duration, setDuration] = useState(0);
    const [load, setLoad] = useState(false);
    const [type, setType] = useState(null);
    const listType = [
        { 'title': 'Movie' },
        { 'title': 'Singel' },
        { 'title': 'Series' }
    ];
    useEffect(() => {
        console.log(type);
    }, [type]);
    const onSub = (e) => {
        setLoad(true);
        console.log('e');
        e.preventDefault();
        const formData = new FormData(e.target);
        formData.append('type', type);
        formData.append('duration', duration);
        for (let [value, key] of formData.entries()) {
            if (value == 'categories') {
                console.log(typeof value);
            }
            console.log(value, key);
        }
        intance.post(('/api/upload'), formData)
            .then(res => {
                setLoad(false);
                if (res.data.message = "success") {
                    console.log('Up thành công');

                }
                else {
                    console.log('Up ko thành công')
                }
            }).catch(err => {
                setLoad(false);
                console.log(err);
            })


    }

    return (
        user.role === 'admin' ? !loading ?
            < div className={styles['upload-contain']} >
                <div className={styles['form-video']}>
                    <video src={src} className={styles['video-pre']} controls onLoadedMetadata={(e) => setDuration(e.target.duration)}></video>
                    <div className={styles['poster']}>
                        <div>
                            <img src={posterVer} className={styles['poster-ver']} />
                        </div>
                        <div>
                            <img src={posterHor} alt="poster-horizontal" className={styles['poster-hor']} />
                        </div>
                    </div>
                </div>
                <form className={styles['form-upload']} onSubmit={onSub} action="" encType="multipart/form-data">
                    <div className={styles['form-title']}>
                        <label htmlFor="text">Title</label>
                        <input type="text" name="title" id="text" placeholder='Conan Movie' required />
                    </div>
                    <div className={styles['form-description']}>
                        <label htmlFor="">Description</label>
                        <textarea name="description" className={styles['description']}></textarea>
                    </div>
                    <div className={styles['form-type']}>
                        <div>Type</div>
                        <Sort options={listType} classCustom={styles['sort']} styleCustom={{ borderRadius: '0px', backgroundColor: 'rgba(181,217,36,1)', width: '100%' }} onClick={setType} />
                        <div className={styles['form-poster']}>
                            <label htmlFor="file-hor" className={styles['file-poster-hor']}>
                                Img horizontal
                                <input style={{ display: 'none' }}
                                    name="poster_hor"
                                    id="file-hor"
                                    type="file"
                                    accept='image/*'
                                    onChange={(e) => setPosterHor(URL.createObjectURL(e.target.files[0]))}
                                    required />
                            </label>
                            <label htmlFor="file-ver" className={styles['file-poster-ver']}>
                                Img vertical
                                <input style={{ display: 'none' }}
                                    name="poster_ver"
                                    id="file-ver"
                                    type="file"
                                    accept='image/*'
                                    onChange={(e) => setPosterVer(URL.createObjectURL(e.target.files[0]))}
                                    required />
                            </label>
                        </div>
                    </div>
                    <div className={styles['form-categories']}>
                        <div>Categories</div>
                        <div className={styles['categories-content']}>
                            <label htmlFor="action">
                                <input type="checkbox" id="action" name="categories[]" value="Act" />
                                Act
                            </label>
                            <label htmlFor="">
                                <input type="checkbox" name="categories[]" value="Emoltional" />
                                Emoltional
                            </label>
                            <label htmlFor="">
                                <input type="checkbox" name="categories[]" value="Dramatic" />
                                Dramatic
                            </label>
                            <label htmlFor="">
                                <input type="checkbox" name="categories[]" value="Psychology" />
                                Psychology
                            </label>
                            <label htmlFor="">
                                <input type="checkbox" name="categories[]" value="Detective" />
                                Detective
                            </label>
                            <label htmlFor="">
                                <input type="checkbox" name="categories[]" value="Romatic" />
                                Romatic
                            </label>
                            <label htmlFor="">
                                <input type="checkbox" name="categories[]" value="Cartoon 3D" />
                                Cartoon 3D
                            </label>
                        </div>
                    </div>
                    <div className={styles['file-upload']}>
                        <label htmlFor="file" className={styles['file-label']}>Choose video</label>
                        <input id="file"
                            className={styles['file']}
                            name="video"
                            type="file"
                            onChange={(e) =>
                                setSrc(URL.createObjectURL(e.target.files[0]))
                            }
                            accept='video/*'
                            required />
                    </div>
                    <button style={{ position: 'relative' }} type="submit" className={styles['button-upload']}>{load ? "" : "Upload"}
                        <Snipper customStyle={{ border: '4px solid rgba(181,217,36,1)', borderTop: '4px solid white' }} load={load} />
                    </button>
                </form>
            </div > : null : null
    )
}
export { Upload }