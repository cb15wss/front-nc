import axios from "axios";
const apiRequest = axios.create({
  baseURL: "https://xtine-news.herokuapp.com/api"
});

export const getArticles = async () => {
  const { data } = await apiRequest.get(`/articles`);
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
