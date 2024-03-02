import "./Birds.scss";
import BirdUrl from "../../../assets/Bird.svg";
import styled from "styled-components";

const Bird = styled.div`
  background-image: url("${props => props.$img}");
  margin-top: 50px;
`;

export default function Birds() {
    return (
        <>
            <div className="bird-container bird-container--one">
                <Bird $img={BirdUrl} className="bird bird--one"></Bird>
            </div>

            <div className="bird-container bird-container--two">
                <Bird $img={BirdUrl} className="bird bird--two"></Bird>
            </div>

            <div className="bird-container bird-container--three">
                <Bird $img={BirdUrl} className="bird bird--three"></Bird>
            </div>

            <div className="bird-container bird-container--four">
                <Bird $img={BirdUrl} className="bird bird--four"></Bird>
            </div>
        </>
    )
}
