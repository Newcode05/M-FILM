import { useState } from "react"
import { intance } from "../../../../Providers/axiosClient"
export const useVideoUpload = () => {
    const [value, setValue] = useState({
        'title': '',
        'description': ''
    })
    const [warn, setWarn] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        intance.get('/upload')
            .then(res => {
                if (res.data['upload_status'] === "success") {
                }
            })
            .catch(err => console.log(err))
    }
    return { handleSubmit, setWarn }
}