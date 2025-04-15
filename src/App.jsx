import { createContext, useContext, useEffect, useState } from 'react'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import { Header } from './header/layout/head/header'
import { Home } from './layout/home/home'
import { Shop } from './shop/layout/shop'
import { NavLeft } from './nav-left/layout/navleft'
import { Login } from './Login/layout/login/login.jsx'
import { WatchingLayout } from './watch/layout/watchinglayout'
import { Footer } from './layout/footer/layout/footer.jsx'
import { Loading } from './loading/loading.jsx'
import { LazyCard } from './component/lazyloading/lazyloading.jsx'
import './App.css'
function LoginLayout() {
  return (
    <>
      <main className="login-main">
        <Outlet />
      </main>
    </>
  )
}
function Layout() {
  const { loading } = useContext(LoadingContext);
  const { displayNav, setDisplayNav } = useContext(DisplayNavContext);
  const { isDesktop } = useContext(DesktopContext);
  const homeStyle = isDesktop ? {
    width: displayNav ? 'calc(100% - 300px)' : 'calc(100% - 25px)',
    left: displayNav ? '300px' : '25px'
  } : {
    width: 'calc(100% - 25px)',
    left: '25px'
  };
  return (
    <>
      <Header />
      <NavLeft />
      <Loading />
      {loading ? null :
        <main style={{ ...homeStyle }}>
          <Outlet />
          <Footer />
        </main>
      }

    </>
  )
}
export const loginContext = createContext(null);
export const DisplayNavContext = createContext(null);
export const DesktopContext = createContext(null);
export const LoadingContext = createContext(null);
function App() {
  const [loading, setLoading] = useState(true);
  const [login, setLogin] = useState();
  const [displayNav, setDisplayNav] = useState(true);
  const [isDesktop, setIsDesktop] = useState(null);
  useEffect(() => {
    setIsDesktop(window.innerWidth >= 1500);
    const windowSize = () => {
      setIsDesktop(window.innerWidth >= 1500);
    }
    console.log(window.innerWidth);
    window.addEventListener('resize', windowSize);
    return () => window.removeEventListener('resize', windowSize);
  }, [])
  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      <loginContext.Provider value={{ login, setLogin }}>
        <DesktopContext.Provider value={{ isDesktop, setIsDesktop }}>
          <DisplayNavContext.Provider value={{ displayNav, setDisplayNav }}>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Layout />}>
                  <Route index element={<Home />} />
                  <Route path="shop" element={<Shop />} />
                  <Route path="/watch" element={<WatchingLayout />} />
                </Route>
                <Route path="/login" element={<LoginLayout />}>
                  <Route index element={<Login />} />
                </Route>
              </Routes>
            </BrowserRouter>
          </DisplayNavContext.Provider>
        </DesktopContext.Provider>
      </loginContext.Provider>
    </LoadingContext.Provider>
  )
}

export default App
