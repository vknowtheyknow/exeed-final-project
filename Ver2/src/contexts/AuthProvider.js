// link ไปหน้าหลังจาก login
import React, { createContext, useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const AuthContext = createContext({})

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({})
  const navigate = useNavigate()

  const setUserInfo = (user) => {
    localStorage.setItem("user", JSON.stringify(user))
    setUser(user)
    navigate("/dashboard")
  }

  const logout = () => {
    localStorage.removeItem("user")
    setUser({})
    navigate("/login")
  }

  useEffect(() => {
    const oldUser = localStorage.getItem("user")
    if (oldUser) {
      navigate("/dashboard")
      setUser(JSON.parse(oldUser))
    } else {
      // navigate("/login")
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <AuthContext.Provider value={{ user, setUserInfo, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)

export default AuthProvider
