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
        width: 40vw;
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
`

export const NavbarItems = styled(DefaultContent)`
    display: flex;
    justify-content: space-between;
    color: white;

    .navbar-item {
        cursor: pointer;
    }
`