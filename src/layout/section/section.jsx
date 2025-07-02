
import { useEffect, useState } from "react";
import { CardFilm } from "../../component/card/cardfilm";
import { Scroll } from "../../component/scroll/scroll";
import { intance } from "../../Providers/axiosClient";
import styles from "./section.module.css"
function Section() {
    const [list, setList] = useState([]);
    /*const List = [
        { poster: '/Img-Poster/Kho do danh 1.jpg', name: 'Khó dỗ dành' },
        { poster: '/Img-Poster/bậc thầy đàm phán.jpg', name: 'Bậc thầy đàm phán' },
        { poster: '/Img-Poster/khi cuoc doi cho ban qua quyt 1.webp', name: 'Khi cuộc đời cho bạn quả quýt' },
        { poster: '/Img-Poster/khi cuoc doi cho ban qua quyt.webp', name: 'Khi cuộc đời cho bạn quả quýt' },
        { poster: '/Img-Poster/Kho do danh 2.jpg', name: 'Bậc thầy đàm phán' },
        { poster: '/Img-Poster/Kho do danh 3.jpg', name: 'Bậc thầy đàm phán' },

    ]*/
    useEffect(() => {
        intance.get(`/api/getVideo/type?Dramatic`)
            .then((res) => {
                if (res.data.message === 'success') {
                    const { data } = res.data;
                    setList(prev => [...data]);

                }
                else {
                    setList([]);
                }
            })
            .catch(err => console.log(err))
    })
    return (
        <section className={styles['section']}>
            <h2 className={styles['title']}>Dramatic</h2>
            <Scroll customClass={styles['list']}>
                {list.length > 0 ? list.map((card, index) =>
                    <CardFilm key={index} card={card} />
                ) : <div style={{ color: 'white' }}>Không có dữ liệu</div>}
            </Scroll>
        </section >
    )
}
export { Section }