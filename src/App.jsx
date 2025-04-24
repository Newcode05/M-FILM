import { createContext, useContext, useEffect, useState } from 'react'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import { Header } from './layout/header/layout/header.jsx'
import { Home } from './pages/home/layout/home.jsx'
import { Shop } from './pages/shop/layout/shop.jsx'
import { NavLeft } from './layout/nav-left/layout/navleft.jsx'
import { Form } from './pages/login/layout/form.jsx'
import { WatchingLayout } from './pages/watch/layout/watchinglayout.jsx'
import { Footer } from './layout/footer/layout/footer.jsx'
import { Loading } from './component/loading/loading.jsx'
import { Result } from './layout/search_result/component/list_result/listresult.jsx'
import { Upload } from './layout/admin/upload/upload.jsx'
import { Update } from './layout/admin/update/update.jsx'
import axios from 'axios'
import Cookies from "js-cookie"
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
  const { isDevice } = useContext(DeviceContext);
  const homeStyle = isDevice == "desktop" ? {
    width: displayNav ? 'calc(100% - 325px)' : 'calc(100% - 50px)',
    left: displayNav ? '300px' : '25px'
  } : {};
  return (
    <>
      <Header />
      <NavLeft />
      <Loading />
      <main style={{ ...homeStyle }}>
        <Outlet />
        {!loading ? <Footer /> : null}
      </main>


    </>
  )
}
export const AuthContext = createContext(null);
export const LoginContext = createContext(null);
export const DisplayNavContext = createContext(null);
export const DeviceContext = createContext(null);
export const LoadingContext = createContext(null);
function App() {
  const [user, setUser] = useState({
    id: null,
    name: '',
    email: '',
    role: ''
  });
  const [loading, setLoading] = useState(true);
  const [login, setLogin] = useState(false);
  const [displayNav, setDisplayNav] = useState(true);
  const [isDevice, setIsDevice] = useState(null);
  const fetchData = async () => {
    try {

      await axios.get('http://localhost:8000/sanctum/csrf-cookie', { withCredentials: true });
      const token = Cookies.get('XSRF-TOKEN');
      console.log(token);
      axios.post(
        'http://localhost:8000/login',
        {},
        {
          withCredentials: true,
          headers: {
            'X-XSRF-TOKEN': token,
            accept: 'Application/json',
          },
        }
      ).then(res => {
        console.log(res);
        if (res.data['message'] == 'success') {
          const { user } = res.data;
          console.log(res);
          setLogin(true);
          setUser({
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role
          })
        } else {
          setUser({
            id: null,
            name: '',
            email: '',
            role: ''
          })
        }
      })
    } catch (err) {
      console.error(err);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    setIsDevice(
      prev => {
        if (window.innerWidth >= 1500) {
          return "desktop";
        }
        else if (window.innerWidth > 480 && window.innerWidth < 1500) {
          return "tablet";
        }
        else if (window.innerWidth <= 480) {
          return "mobile";
        }
      }, []);
    const windowSize = () => {
      setIsDevice(
        prev => {
          if (window.innerWidth >= 1500) {
            return "desktop";
          }
          else if (window.innerWidth > 480 && window.innerWidth < 1500) {
            return "tablet";
          }
          else if (window.innerWidth <= 480) {
            return "mobile";
          }
        }
      );
    }
    console.log(window.innerWidth);
    window.addEventListener('resize', windowSize);
    return () => window.removeEventListener('resize', windowSize);
  }, []);
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <LoadingContext.Provider value={{ loading, setLoading }}>
        <LoginContext.Provider value={{ login, setLogin }}>
          <DeviceContext.Provider value={{ isDevice, setIsDevice }}>
            <DisplayNavContext.Provider value={{ displayNav, setDisplayNav }}>
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="shop" element={<Shop />} />
                    <Route path="watch/:videoID" element={<WatchingLayout />} />
                    <Route path="search/" element={<Result />} />
                    <Route path="/admin/upload" element={<Upload />} />
                    <Route path="/admin/update" element={<Update />} />
                  </Route>

                  <Route path="/login" element={<LoginLayout />}>
                    <Route index element={<Form type="login" />} />
                  </Route>
                  <Route path="/register" element={<Form />} />

                </Routes>
              </BrowserRouter>
            </DisplayNavContext.Provider>
          </DeviceContext.Provider>
        </LoginContext.Provider>
      </LoadingContext.Provider>
    </AuthContext.Provider>
  )
}

export default App
