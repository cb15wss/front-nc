import axios from "axios";
const apiRequest = axios.create({
  baseURL: "https://xtine-news.herokuapp.com/api"
});

export const getArticles = async (searchTerm, filterTerm) => {
  const { data } = await apiRequest.get(`/articles`, {
    params: { topic: searchTerm, sort_by: filterTerm }
  });
  return data.articles;
};

export const getArticle = async article_id => {
  const {
    data: { article }
  } = await apiRequest.get(`/articles/${article_id}`);
  return article;
};

export const getTopics = async () => {
  const { data } = await apiRequest.get(`topics`);
  return data.topics;
};

export const getArticleComments = async article_id => {
  const { data } = await apiRequest.get(`/articles/${article_id}/comments`);

  return data.comments;
};

export const getUsers = async () => {
  const { data } = await apiRequest.get(`/users`);

  return data.users;
};

export const getArticlesByTopic = async topic => {
  const { data } = await apiRequest.get(`/articles`, {
    params: { topic: { topic } }
  });
  return data.articles;
};
