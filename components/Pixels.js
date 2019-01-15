import styled from "styled-components";

const Pixels = styled.div.attrs(props => ({
  className: `kirby--col-sm-${props.cols}`
}))`
  background: ${props => props.color || "none"};

  :after {
    content: "";
    display: block;
    padding-bottom: ${props => 100 / props.cols}%;
  }
`;

export default Pixels;
