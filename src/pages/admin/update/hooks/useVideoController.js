import { instance } from "../../../../Providers/axiosClient";
export const useVideoController = () => {
    const [video, setVideo] = useState([]);
    const getVideo = async (id) => {
        return instance.get(`/getVideo/${id}`);
    }
    const upVideo = async (form) => {
        return instance.post('/upVideo', form);
    }
    const updateVideo = async (form) => {
        return instance.post('/updateVideo', form);
    }
    const deleteVideo = async (id) => {
        return instance.delete(`/video/${id}`);
    }
    return { getVideo, upVideo, updateVideo, deleteVideo }
}