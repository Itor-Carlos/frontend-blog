import { User } from "../User";
import { PostContainer, PostContent, PostHeader } from "./styles";

export function Post(){
    return (
        <PostContainer>
            <PostHeader>
                <User/>
            </PostHeader>
            <PostContent>
                <p>O empenho em analisar a revolução dos costumes apresenta tendências no sentido de aprovar a manutenção dos níveis de motivação departamental.</p>
            </PostContent>
        </PostContainer>
    )
}