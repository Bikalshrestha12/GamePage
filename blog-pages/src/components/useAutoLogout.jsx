import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const useAutoLogout = (timeout = 30 * 60 * 1000) => {
    const navigate = useNavigate();
    useEffect(() => {
        const resetTimer = () => {
            clearTimeout(window.autoLogoutTimer);
            window.autoLogoutTimer = setTimeout(() => {
                localStorage.clear(); // Optional: Clear session info
                navigate('/login');   // Redirect to login
            }, timeout);
        };

        const events = ['mousemove', 'keydown', 'click', 'scroll'];
        events.forEach(event => window.addEventListener(event, resetTimer));

        resetTimer(); // Start timer initially

        return () => {
            events.forEach(event => window.removeEventListener(event, resetTimer));
            clearTimeout(window.autoLogoutTimer);
        };
    }, [navigate, timeout]);
    
  return (
    <div>
      
    </div>
  )
}

export default useAutoLogout
