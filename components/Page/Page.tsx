import {ReactNode} from "react";
import styled from "styled-components";
import {PageConfig} from "../../main";
import logo from "../../assets/logo.png";
import Slides from "./Slides";

const Hero = styled.div`
  --height: 48%;
  --padding: 40px;
  --width: 26%;
  
  z-index: 2;
  width: var(--width);
  height: var(--height);
  padding: var(--padding);
  top: calc(((100% / 2) - (var(--height) / 2) - (var(--padding))));
  background: var(--york-red);
  position: fixed;
  right: 0;
  box-shadow: 0 0 15px 5px rgba(0, 0, 0, 0.22);
  clip-path: inset(-15px 0 -15px -15px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

let marginRight: number;
const borderWidth: number = marginRight = 50;


const HeroTitle = styled.span`
  font-size: 45px;
  font-weight: bold;
`;

const HeroSubtitle = styled.div`
  font-weight: bold;
  font-size: 25px;
`;

const YorkLogo = styled.img`
  height: 60px;
`;

const LogoContainer = styled.div`
  width: 100%;
  margin-bottom: -25px;
  display: flex;
  justify-content: right;
`;


export default function Page(props: PageConfig): ReactNode {

    return (
        <>
            <Slides borderWidth={`${borderWidth}px`} />
            <Hero style={{marginRight: `${marginRight}px`}}>
                <HeroTitle>{props.title}</HeroTitle>
                <HeroSubtitle>
                    {props.subtitle.toUpperCase()}
                    <hr style={{width: "100%"}} />
                    <LogoContainer>
                        <YorkLogo src={logo} />
                    </LogoContainer>
                </HeroSubtitle>
            </Hero>
        </>
    )

}
