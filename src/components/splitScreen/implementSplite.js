import SplitScreen from "./splitScreen";

const ImplementSplite = () => {
  const LeftComponent = ({ side }) => {
    return <div style={{ backgroundColor: "red" }}>{side}</div>;
  };
  const RightComponent = ({ side }) => {
    return <div style={{ backgroundColor: "green " }}>{side}</div>;
  };
  return (
    <SplitScreen leftWeight={2}>
      <LeftComponent side={"Left"} />
      <RightComponent side={"Right"} />
    </SplitScreen>
  );
};

export default ImplementSplite;
