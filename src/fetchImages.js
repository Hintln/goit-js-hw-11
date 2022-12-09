import axios from "axios";

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '31948822-97332d21255bee78933a2e93c'; 

export async function fetchImApi(searchQuery, page = 1) {
    const response = await axios.get(
        `${BASE_URL}?key=${API_KEY}&q=${searchQuery}&page=${page}&per_page=40&image_type=photo&orientation=horizontal&safesearch=true`
    );
    const { data } = response;
    return { data };
}
