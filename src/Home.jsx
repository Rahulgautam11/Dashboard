import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    justify-content: center;
    gap: 30px;
    flex-direction: column;
`

const Home = () => {



    return (
        <Container>
            <Link to={'/image-canvas'}>Canvas</Link>

        </Container>

    );
}
export default Home
