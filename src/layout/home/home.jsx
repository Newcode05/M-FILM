
import { Trailer } from "../../trailer/component/trailer/trailer"
import { SuggestLayout } from "../../suggest/layout/suggest"
import { TrendingLayout } from "../../trending/layout/trendinglayout"
import styles from "./home.module.css"
import { TrailerLayout } from "../../trailer/layout/trailer"
function Home() {
    return (
        <div className={styles['home']}>
            <TrailerLayout />
            <SuggestLayout />
            <TrendingLayout />
        </div>
    )
}
export { Home };