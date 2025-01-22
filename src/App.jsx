
import { useContext } from "react";
import { UserContext } from "./providers/UserContext";
import RoutesMain from "./routes";
import { StyledLoading } from "./styles/Containers";
import {ImSpinner6} from "react-icons/im"


function App() {

  const {globalLoading} = useContext(UserContext)

  return (
    <div className="App">
      { globalLoading ? (
        <StyledLoading>

          <ImSpinner6 className="loading"/>
          
        </StyledLoading>
      ) : (
        
      <>
        <RoutesMain />
      </>
      )}
    </div>
  );
}

export default App;
