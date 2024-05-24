export const canvasToBlob = (canvas: HTMLCanvasElement): Promise<Blob | null> => {
    return new Promise((resolve) => {
        canvas.toBlob((blob) => {
            resolve(blob);
        });
    });
};

export const createFormData = (blob: Blob, question: string): FormData => {
    const formData = new FormData();
    formData.append('image', blob);
    formData.append('question', question);
    return formData;
};