import axios from "axios";

const articlesAPI = axios.create({
  baseURL: "https://jacks-news.herokuapp.com/api",
});

export function getAllArticles() {
  return articlesAPI.get("/articles?sort_by=votes&order=ASC").then((response) => {
    return response.data.articles;
  });
}

export function getArticlesByTopic(chosenTopic) {
  return articlesAPI.get(`/articles?topic=${chosenTopic}`).then((response) => {
    return response.data.articles;
  });
}

export function getAllUsers() {
  return articlesAPI.get("/users").then((response) => {
    return response.data.users;
  });
}
