

import { styled } from "styled-components";

const FigureEstilizada = styled.figure`
  background-image: ${props => `url(${props.$backgroundImage})`};
  flex-grow: 1;
  opacity: 50%;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  min-height: 832px;
  margin: 0;
  border-radius: 20px;
  max-width: 100%;
  background-size: cover;
`;


const Banner = ({ backgroundImage }) => {
    return (
        <FigureEstilizada $backgroundImage={backgroundImage}>
            
        </FigureEstilizada>
    );
};

export default Banner;
