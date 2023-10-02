import Navbar from "../Navbar";
import { DefaultPageContainer } from "./styles";

const DefaultPageComponent = ({children}) => {
    return (
        <DefaultPageContainer>
            <Navbar />
            {children}
        </DefaultPageContainer>
    )
}

export default DefaultPageComponent;