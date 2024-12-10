import axios from "axios"
import { toast } from "react-toastify"
const baseURL = "http://localhost:3000"

const api = axios.create({
    baseURL
});

export const logout = () => {
    localStorage.removeItem("User")
    localStorage.removeItem("event")
    toast.success("Logged out successfully")
    setTimeout(() => {
        window.location.href = "/"
    }, 1000)
}
export default api