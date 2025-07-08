import { useEffect } from 'react'

import { intance } from './Providers/axiosClient.jsx'

import { useAuth } from './Providers/Context/AuthContext.jsx'
import { useLogIn } from './Providers/Context/LoginContext.jsx'
import { useDevice } from './Providers/Context/DeviceContext.jsx'

import { DisplayNavProvider } from './Providers/Context/DisplayNavContext.jsx'

import { AppRoute } from '../routes/AppRoutes.jsx'

import './App.css'


export const App = () => {
  const { setUser } = useAuth();
  const { setLogin } = useLogIn();
  const { setIsDevice } = useDevice();

  useEffect(() => {
    intance.post('/login')
      .then(res => {
        if (res.data['message'] === 'success') {
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
      <AppRoute />
    </DisplayNavProvider>
  )
}

