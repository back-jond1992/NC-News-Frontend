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

export function getArticlesByID(article_id) {
  return articlesAPI.get(`/articles/${article_id}`).then((response) => {
    return response.data.article;
  });
}

export function getCommentsByArticleID(article_id) {
  return articlesAPI.get(`/articles/${article_id}/comments`).then((response) => {
    return response.data.comments;
  });
}

export function patchUsers(article_id, vote) {
  return articlesAPI.patch(`/articles/${article_id}`, vote).then((response) => {
    return response.data.article;
  });
}
