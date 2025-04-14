
import { SuggestLayout } from "../../suggest/layout/suggest"
import { TrendingLayout } from "../../trending/layout/trendinglayout"
import { TrailerLayout } from "../../trailer/layout/trailer"
import { Section } from "../../section/section"
import { LazyCard } from "../../component/lazyloading/lazyloading"
import styles from "./home.module.css"

function Home() {
    return (
        <div className={styles['home']}>
            <TrailerLayout />
            <LazyCard>
                <SuggestLayout />
            </LazyCard>
            <LazyCard>
                <TrendingLayout />
            </LazyCard>
            <LazyCard>
                <Section />
            </LazyCard>
        </div>
    )
}
export { Home };