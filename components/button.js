import styled from "styled-components";
import Link from "next/link";

const Button = styled.a`
  padding: 0 50px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  border-radius: 30px;
  font-size: 14px;
  background: ${props =>
    props.isWhite
      ? "#fff"
      : "linear-gradient(135deg, #56ccf2 0%, #2f80ed 100%)"};
  color: ${props => (props.isWhite ? "#2F80ED" : "#fff")};
  cursor: pointer;
`;

const CButton = props => (
  <Link href={props.url}>
    <Button isWhite={props.isWhite}>{props.children}</Button>
  </Link>
);

export default CButton;
