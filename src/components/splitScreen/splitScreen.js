import styled from "styled-components";
const Container = styled.div`
  display: flex;
`;
const Pos = styled.div`
  flex: ${(props) => props.weight};
`;
const SplitScreen = ({ children, rightWeight = 1, leftWeight = 1 }) => {
  const [Left, Right] = children;
  return (
    <Container>
      <Pos weight={leftWeight}>{Left}</Pos>
      <Pos weight={rightWeight}>{Right}</Pos>
    </Container>
  );
};

export default SplitScreen;
