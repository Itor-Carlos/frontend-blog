import React from 'react';

import { AboutContainer, Title, Description, List, ListItem, Footer } from './styles';


const funcionalidades = [
    "Funcionalidade 1: Criação de post",
    "Funcionalidade 2: Edição de posts",
    "Funcionalidade 3: Exclusão de posts"
];

export const About = () => {
    return (
        <AboutContainer>
            <Title>Sobre o Projeto de Posts</Title>
            <Description>
                Este projeto é uma plataforma onde os usuários podem criar, editar e visualizar posts. Ele foi desenvolvido com o objetivo de fornecer uma interface amigável e intuitiva para gerenciar conteúdos.
                Desenvolvida para praticar React.js, TypeScript e Styled Components.
            </Description>
            <List>
                {funcionalidades.map((funcionalidade => <ListItem>{funcionalidade}</ListItem>))}
            </List>
            <Footer>
                &copy; 2024 Projeto de Posts. Todos os direitos reservados.
            </Footer>
        </AboutContainer>
    );
}

