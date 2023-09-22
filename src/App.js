// import ImplementList from "./components/ListItemPattern/implementList";
import ImplementSplite from "./components/splitScreen/implementSplite";
import ImplementModal from  "./components/modalPattern/implementModal"
import ContainerComponent from "./components/ContainerComponent/ImContainerComponent";
import ImplementForm from "./components/FormPattern/ImplementForm";
import styled from "styled-components";
// import ImplementList from "./components/ListItemPattern/implementList";
const PatternSection = styled.div`
    background-color: ${(props)=> props.color};
`
function App() {
  return (
    <div className="App">
        <div>
            screen splite  Pattern
            <ImplementSplite />
        </div>
        <PatternSection color="yellow">
            <ImplementForm/>
            //this is splite  screen pattern
        </PatternSection>




        <PatternSection color="red">
             List and item Pattern

            {/*<ImplementList />*/}
        </PatternSection>

        <PatternSection color="blue">
            Modal Pattern :
            <ImplementModal/>
        </PatternSection>


        <PatternSection color="pink">
            ContainerComponent
            <ContainerComponent/>
        </PatternSection>



    </div>
  );
}

export default App;
