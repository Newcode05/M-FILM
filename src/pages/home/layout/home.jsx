import { useContext } from "react"
import { SuggestLayout } from "../component/suggest/layout/suggest"
import { TrendingLayout } from "../component/trending/layout/trendinglayout"
import { TrailerLayout } from "../component/trailer/layout/trailer"
import { Section } from "../../../layout/section/section"
import { LazyCard } from "../../../component/lazyloading/lazyloading"
import { LoadingContext } from "../../../App"
import styles from "./home.module.css"


function Home() {
    const { loading, setLoading } = useContext(LoadingContext);
    return (
        !loading ?
            <div className={styles['home']}>
                <LazyCard>
                    <TrailerLayout />
                </LazyCard>
                <LazyCard>
                    <SuggestLayout />
                </LazyCard>
                <LazyCard>
                    <TrendingLayout />
                </LazyCard>
                <LazyCard>
                    <Section />
                </LazyCard>
            </div> : null
    )
}
export { Home };