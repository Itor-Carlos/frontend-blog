import { User } from "../User";
import { PostContainer, PostContent, PostHeader } from "./styles";


interface PostProps{
    titulo: string;
    conteudo: string;
}

export function Post({titulo, conteudo}: PostProps){
    return (
        <PostContainer>
            <PostHeader>
                <User titulo={titulo}/>
            </PostHeader>
            <PostContent>
                <p>{conteudo}</p>
            </PostContent>
        </PostContainer>
    )
}