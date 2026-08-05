import axios from "axios";

const uploadImage = async (file: File) => {
    const formData = new FormData();

    formData.append("file", file);
    formData.append("upload_preset", "products");

    try {
        const { data } = await axios.post(
            "https://api.cloudinary.com/v1_1/xs6ogkzz/image/upload",
            formData
        );

        if (!data?.secure_url) {
            throw new Error("Image upload failed.");
        }

        return data.secure_url;
    } catch (error) {
        throw new Error("Image upload failed.", { cause: error });
    }
};

export default uploadImage;