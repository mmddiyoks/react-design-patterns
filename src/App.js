// import ImplementList from "./components/ListItemPattern/implementList";
import ImplementSplite from "./components/splitScreen/implementSplite";
import ImplementModal from  "./components/modalPattern/implementModal"
import ContainerComponent from "./components/ContainerComponent/ImContainerComponent";
import ImplementForm from "./components/FormPattern/ImplementForm";
import styled from "styled-components";
import OnbordingFlow from "./components/OnbordingFlow/ImplemantOnboardingFlow";
// import ImplementList from "./components/ListItemPattern/implementList";
const PatternSection = styled.div`
    background-color: ${(props)=> props.color};
`
function App() {
  return (
    <div className="App">
        <div>
           <p> screen splite  Pattern </p>
            <ImplementSplite />
        </div>
        <PatternSection color="yellow">
            <ImplementForm/>
            //this is splite  screen pattern
        </PatternSection>




        <PatternSection color="red">
             <p>
                 List and item Pattern
             </p>

            {/*<ImplementList />*/}
        </PatternSection>

        <PatternSection color="blue">
            <p>
                Modal Pattern :
            </p>

            <ImplementModal/>
        </PatternSection>


        <PatternSection color="pink">
           <p> ContainerComponent</p>
            <ContainerComponent/>
        </PatternSection>

        <PatternSection color="cyan">
            <p>OnbordingFlow Pattern</p>
            <OnbordingFlow/>
        </PatternSection>

    </div>
  );
}

export default App;
