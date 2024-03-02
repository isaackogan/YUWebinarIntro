import {Component} from "react";
import i1 from "../../assets/slides/img1.png";
import i2 from "../../assets/slides/img2.png";
import i3 from "../../assets/slides/img3.png";
import i4 from "../../assets/slides/img4.png";
import i5 from "../../assets/slides/img5.png";
import i6 from "../../assets/slides/img6.png";
import i7 from "../../assets/slides/img7.png";
import i8 from "../../assets/slides/img8.png";
import i9 from "../../assets/slides/img9.png";
import i10 from "../../assets/slides/img10.png";
import i11 from "../../assets/slides/img11.png";
import i12 from "../../assets/slides/img12.png";
import i13 from "../../assets/slides/img13.png";
import i14 from "../../assets/slides/img14.png";
import styled from "styled-components";
import Birds from "./Birds/Birds";

const Frame = styled.div`
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  width: 100vw;
  height: 100vh;
  border: solid var(--york-red);
  box-shadow: 0 0 15px 5px inset rgba(0, 0, 0, 0.22);
  z-index: 1;
  position: fixed;
`;

const FrameImage = styled("div")<{$url: string}>`
  background-size: 100% 100%;
  background: center url("${props => props.$url}");
  width: 100%;
  height: 100%;
  transition: background-image 1s ease-in-out;
  animation: 15000ms zoom infinite, 10000ms outline ease-in-out infinite;
  z-index: -1;
  
  outline: solid white;
  
  @keyframes outline {
    0%, 35% {
      outline-width: 0;
    }
    50% {
      outline: 15px solid white;
    }
    75% {
      outline-width: 0.5px;
    }
    75.1%, 100% {
      outline-width: 0;
    }
   
  }
  
  @keyframes zoom {
    0%, 100% {
      background-size: 100% 100%;
    }
    50%, 60% {
      background-size: 105% 105%;
    }
  }
  
`;

type IProps = {borderWidth: string};
type IState = {idx: number};

export default class Slides extends Component<IProps, IState> {

    state: IState = {idx: 0};

    private interval?: number;
    private slides = [i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11, i12, i13, i14];

    componentDidMount() {
        clearInterval(this.interval);
        this.interval = setInterval(this.updateSlide.bind(this), 5000);
    }

    updateSlide() {
        console.log("[DEBUG] Updating slide...")

        if (this.state.idx + 1 === this.slides.length) {
            this.setState({idx: 0});
        } else {
            this.setState({idx: this.state.idx + 1});
        }

    }

    getPreloaded() {
        const images = [];
        let i=0;

        for (let url of this.slides) {
            images.push(
                <link key={'im-' + i} rel="preload" as="image" href={url}  />
            )
            i++;
        }
        return images;
    }

    render() {

        return (
            <Frame style={{borderWidth: this.props.borderWidth}}>
                {this.getPreloaded()}
                <FrameImage $url={this.slides[this.state.idx]}>
                    <Birds />
                </FrameImage>
            </Frame>
        )
    }

}
