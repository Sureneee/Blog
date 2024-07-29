import { Carousel } from "./Carousel"
import { Nav } from "./Nav"
import { Post1} from "./Post"
import { Trending } from "./Treding"
import { Contact } from "../pages/Contact"
import { SinglePost } from "../pages/SinglePost"
import { BlogContent } from "./BlogContent"
import axios from "axios";
import { useEffect, useState } from "react";

export const Test = () => {
    let [articles, setArticles] = useState([]);
    
    useEffect(() => {
      axios.get(`${process.env.REACT_APP_BACKEND_ENDPOINT}/articles`).then((response) => {
        setArticles(response.data);
      });
    }, []);

    return (
        <>
            <Carousel />
            <Trending />
            <Post1 articles={articles} /> 
            
            
        </>
    )
}