
import { Trailer } from "../../trailer/component/trailer/trailer"
import { SuggestLayout } from "../../suggest/layout/suggest"
import { TrendingLayout } from "../../trending/layout/trendinglayout"
import { TrailerLayout } from "../../trailer/layout/trailer"
import { Section } from "../../section 2/section"
import styles from "./home.module.css"

function Home() {
    return (
        <div className={styles['home']}>
            <TrailerLayout />
            <SuggestLayout />
            <TrendingLayout />
            <Section />
        </div>
    )
}
export { Home };