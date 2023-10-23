import styled from "styled-components";
import Title from "../../components/Title";

const Library = () => {
    return (
        <StyledLibrary>
            <header>
                <Title/>
                <div className="search-container">
                    <input
                    type="text" 
                    className="search-bar"
                    placeholder="Search for a book..."/>
                </div>
                <div className="cart-container">
                    <img src="#" alt="cart icon" className="cart-icon"/>
                </div>
            </header>
        </StyledLibrary>
    );
}

const StyledLibrary = styled.div`
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 45px 60px;
    }
`

export default Library;