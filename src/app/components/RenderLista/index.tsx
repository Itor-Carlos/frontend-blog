import React from "react";

interface RenderElementsProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    lista: Array<any>,
    element: React.ElementType
}

export const RenderElements = ({ lista, element: Element }: RenderElementsProps) => {
    return (
        <>
            {lista.map((item) => (
                <Element>{item}</Element>
            ))}
        </>
    );
};
