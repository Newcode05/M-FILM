
import { Trailer } from "../../trailer/component/trailer/trailer"
import { SuggestLayout } from "../../suggest/layout/suggest"
import { TrendingLayout } from "../../trending/layout/trendinglayout"
import styles from "./home.module.css"
function Home() {
    return (
        <div className={styles['home']}>
            <Trailer />
            <SuggestLayout />
            <TrendingLayout />
        </div>
    )
}
export { Home };