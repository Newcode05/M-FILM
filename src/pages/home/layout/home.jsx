
import { SuggestLayout } from "../component/suggest/layout/suggest"
import { TrendingLayout } from "../component/trending/layout/trendinglayout"
import { TrailerLayout } from "../component/trailer/layout/trailer"
import { Section } from "../../../layout/section/section"
import { LazyCard } from "../../../component/lazyloading/lazyloading"
import { Footer } from "../../../layout/footer/layout/footer"

import { useLoading } from "../../../Providers/Context/LoadingContext"

import styles from "./home.module.css"


function Home() {
    const { loading } = useLoading();
    return (
        !loading ?
            <>
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
                </div>
                <Footer />
            </> : null
    )
}
export { Home };