import styled from "styled-components";
import {PageConfig} from "../main";

const Url = styled.a`
  color: white;
`;

const Container = styled.div`
  margin: 2%;
`;

function createRouteList(routes: string[]) {
    const listElements = [];

    for (let route of routes) {
        listElements.push(
            <li key={Math.random()}>
                <Url href={route}>{route}</Url>
            </li>
        )
    }

    return listElements;
}

export default function Error404(props: {pages: Record<string, PageConfig>}) {

    return (
        <Container>
            <h1>404 Not Found</h1>
            <p>
                Available Routes:
            </p>
            <ul>{createRouteList(Object.keys(props.pages))}</ul>
        </Container>
    )
}
