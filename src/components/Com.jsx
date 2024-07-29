import axios from "axios";
import { useEffect, useState } from "react";

export const Component = () => {
  let [articles, setArticles] = useState([]);

  useEffect(() => {
    axios.get("https://dev.to/api/articles").then((response) => {
      setArticles(response.data);
    });
  }, []);

  return (
    <div>
      <ul>
        {articles.map((article) => (
          <li>{article.title}</li>
        ))}
      </ul>
    </div>
  );
};
