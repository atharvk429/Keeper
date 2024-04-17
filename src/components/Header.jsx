import React, {useState} from "react";
import HighlightIcon from '@mui/icons-material/Highlight';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Fab from '@mui/material/Fab';

function Header() {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        document.body.classList.toggle("dark-mode");
    };

    return (
        <header>
            <h1>
                <HighlightIcon />
                Keeper
            </h1>
            <div className="dark-mode-toggle">
                <Fab onClick={toggleDarkMode}>
                    {darkMode ? <LightModeIcon/> : <DarkModeIcon />}
                </Fab>
            </div>
        </header>
    );
}

export default Header;