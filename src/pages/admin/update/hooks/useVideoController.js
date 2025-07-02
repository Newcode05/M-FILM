import { intance } from "../../../../Providers/axiosClient";
export const useVideoController = () => {
    const [video, setVideo] = useState([]);
    const getVideo = async (id) => {
        return intance.get(`/getVideo/${id}`);
    }
    const upVideo = async (form) => {
        return intance.post('/upVideo', form);
    }
    const updateVideo = async (form) => {
        return intance.post('/updateVideo', form);
    }
    const deleteVideo = async (id) => {
        return intance.delete(`/video/${id}`);
    }
    return { getVideo, upVideo, updateVideo, deleteVideo }
}