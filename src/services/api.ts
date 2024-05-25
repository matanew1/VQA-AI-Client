import axios from 'axios';

export const postQuestion = async (formData: FormData) => {
    const response = await axios.post('https://matanew1-vqa-server.hf.space/answer_question', formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
    return response.data;
};