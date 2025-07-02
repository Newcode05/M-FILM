import { useEffect } from 'react'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'

import { Header } from './layout/header/layout/header.jsx'
import { Home } from './pages/home/layout/home.jsx'
import { Shop } from './pages/shop/layout/shop.jsx'
import { NavLeft } from './layout/nav-left/layout/navleft.jsx'

import { Forget } from './pages/forget/forget.jsx'
import { Form } from './pages/login/layout/form.jsx'
import { LogIn } from './pages/login/component/log/log.jsx'
import { Register } from './pages/login/component/register/register.jsx'
import { EmailStep } from './pages/forget/component/email/emailstep.jsx'
import { PasswordStep } from './pages/forget/component/password/passwordstep.jsx'

import { WatchingLayout } from './pages/watch/layout/watchinglayout.jsx'

import { Loading } from './component/loading/loading.jsx'
import { Result } from './layout/search_result/component/list_result/listresult.jsx'
import { Upload } from './pages/admin/upload/upload.jsx'
import { Update } from './pages/admin/update/update.jsx'
import { intance } from './Providers/axiosClient.jsx'

import { OtpStep } from './pages/forget/component/otp/otpstep.jsx'


import { useAuth } from './Providers/Context/AuthContext.jsx'


import { useLogIn } from './Providers/Context/LoginContext.jsx'


import { useDevice } from './Providers/Context/DeviceContext.jsx'

import { DisplayNavProvider } from './Providers/Context/DisplayNavContext.jsx'
import { useDisplayNav } from './Providers/Context/DisplayNavContext.jsx'

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
  const { displayNav } = useDisplayNav();
  const { isDevice } = useDevice();
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
      </main>
    </>
  )
}
export const App = () => {
  const { setUser } = useAuth();
  const { setLogin } = useLogIn();
  const { setIsDevice } = useDevice();

  useEffect(() => {
    intance.post('/login')
      .then(res => {
        if (res.data['message'] == 'success') {
          const { user } = res.data;
          setLogin(true);
          setUser({
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role
          });
        }
        else {
          setUser({
            id: null,
            name: '',
            email: '',
            role: ''
          });
        }
      }).catch(err => {
        console.error(err);
      })

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
      });
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
    window.addEventListener('resize', windowSize);
    return () => window.removeEventListener('resize', windowSize);
  }, []);
  return (
    <DisplayNavProvider>
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
            <Route index element={<Form><LogIn /></Form>} />
          </Route>
          <Route path="/register" element={<Form ><Register /></Form>} />

          <Route path="/forgotpassword" element={<Forget />} >
            <Route index element={<EmailStep />} />
            <Route path="otp/:token/:email" element={<OtpStep />} />
            <Route path="password/:token/:email" element={<PasswordStep />} />
          </Route>
          <Route path="/admin" element={<Update />}>

          </Route>

        </Routes>
      </BrowserRouter>
    </DisplayNavProvider>
  )
}

