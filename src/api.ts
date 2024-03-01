const handleResponse = (res: Response) => {
    if (!res.ok) throw new Error(res.statusText);
    return res.json();
};

/**
 * @description Sends API request with different settings
 * @param method
 * @param payload - could be any type
 * @returns API response
 * @author amomammadw
 */
export const customFetch = () => {
    const get = async (endpoint: string, options?: RequestInit) => {
        const res = await fetch(endpoint, options);
        handleResponse(res);
    };

    return { get };
};
