import styled from "styled-components";
import { DefaultContainer, DefaultContent } from "../../styles/global";

export const NavbarContainer = styled(DefaultContainer)`
    flex-direction: column;
    gap: 20px;
    background-color: var(--theme-00);
    padding-top: 20px;
    padding-bottom: 20px;
`

export const NavbarContent = styled(DefaultContent)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    font-weight: 400;

    .icon {
        cursor: pointer;
        width: 30px;
        height: 30px;
    }

    .search-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 75%;
        padding: 10px 20px;
        border-radius: 20px;
        background-color: white;
    }

    .search {
        color: black;
        width: 100%;
        font-size: var(--text-00);
    }

    .search:focus {
        outline: none;
    }

    .search-icon {
        color: var(--theme-00);
        width: 20px;
        height: 20px;
    }

    .navbar-icons {
        display: flex;
        gap: 15px;
    }

    .profile {
        width: 35px;
        height: 35px;
    }

    @media(min-width: 1200px) {
        .search-container {
            width: 40vw;
        }
    }
`

export const NavbarItems = styled(DefaultContent)`
    display: flex;
    color: white;
    overflow-x: scroll;
    overflow-y: hidden;
    gap: 10px;
    
    .navbar-item {
        cursor: pointer;
    }

    ::-webkit-scrollbar{
        display: none;
    }
    
    @media(min-width: 1200px) {
        justify-content: space-between;
        overflow-x: hidden;
    }
`