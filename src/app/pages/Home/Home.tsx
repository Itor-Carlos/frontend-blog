import { useEffect, useState } from "react";
import { Post } from "../../components/Post";
import axios from "axios";
import { TypePost } from "../../types/Post";

export function Home(){

    const [posts, setPosts] = useState<TypePost[]>([]);
    useEffect(() => {
        const getPosts = async () => {
            const postsGet = await axios.get("http://localhost:3000/post");
            setPosts(postsGet.data)
        }
        getPosts();
    }, [])


    return (
    <>
        {
            posts.map((item) => (
                <Post key={item.id} id={item.id} titulo={item.titulo} conteudo={item.conteudo} />
              ))
        }
    </>
    )
}