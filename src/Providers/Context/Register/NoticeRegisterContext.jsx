import { useState, createContext } from "react"
export const NoticeRegisterContext = createContext();
export const NoticeRegisterProvider = () => {
}
export const useNoticeRegisterContext = () => useContext(NoticeRegisterContext);