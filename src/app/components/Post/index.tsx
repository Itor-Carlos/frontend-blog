import axios from "axios";
import { Button } from "../Button";
import { User } from "../User";
import { ButtonContainerPost, PostContainer, PostContent, PostHeader } from "./styles";
import { FaTrash} from 'react-icons/fa';

interface PostProps{
    titulo: string;
    conteudo: string;
    id: string;
}

export function Post({titulo, conteudo, id}: PostProps){

    const deletePost = async (id: string) => {
        await axios.delete(`http://localhost:3000/post/${id}`)
        window.location.reload()
    }

    return (
        <PostContainer>
            <ButtonContainerPost>
                <Button onClick={() => deletePost(id)} label={<FaTrash/>}/>
            </ButtonContainerPost>
            <PostHeader>
                <User titulo={titulo}/>
            </PostHeader>
            <PostContent>
                <p>{conteudo}</p>
            </PostContent>
        </PostContainer>
    )
}