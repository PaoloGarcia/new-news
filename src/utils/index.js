const API_URL = "https://newsapi.org/v2/top-headlines";
const API_KEY = "6c1e4841b912414189f66ef82b0ed5b8";

export function createUrl(category, country) {
    return `${API_URL}?country=${country}&category=${category}&apiKey=${API_KEY}`
}