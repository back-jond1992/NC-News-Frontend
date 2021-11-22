import axios from "axios";

const articlesAPI = axios.create({
  baseURL: "https://jacks-news.herokuapp.com/api",
});

export function getAllArticles() {
  return articlesAPI.get("/articles").then((response) => {
    return response.data.articles;
  });
}
