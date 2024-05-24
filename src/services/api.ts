import axios from 'axios';

export const postQuestion = async (formData: FormData) => {
    const response = await axios.post('http://localhost:8080/answer_question', formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
    return response.data;
};