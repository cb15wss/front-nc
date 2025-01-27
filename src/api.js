import axios from "axios";
const apiRequest = axios.create({
  baseURL: "https://xtine-news.herokuapp.com/api"
});

export const getArticles = async (sortValue, topic, filter) => {
  const { data } = await apiRequest.get(`/articles`, {
    params: { topic: topic, sort_by: sortValue, filter: filter }
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

export const insertComment = async (article_id, comment) => {
  const { data } = await apiRequest.post(
    `/articles/${article_id}/comments`,
    comment
  );
  return data.comment;
};

export const deleteById = async (id, target) => {
  const { status } = await apiRequest.delete(`/${target}/${id}`);
  return status;
};

export const patchVote = async (target, id, vote) => {
  const { status } = await apiRequest.patch(`/${target}/${id}`, {
    inc_votes: vote
  });
  return status;
};
