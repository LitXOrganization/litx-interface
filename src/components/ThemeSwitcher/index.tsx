import { useState, useEffect } from "react";
import "./index.scss";
import { Moon, Sun } from "react-feather";
import { useDarkModeManager } from "state/user/hooks";

export default function ThemeSwitcher() {
    const [isDarkMode, toggle] = useDarkModeManager();

    const [isEnabled, setIsEnabled] = useState(false);

    useEffect(() => {
        const html = document.documentElement;
        if (isDarkMode) {
            html.classList.add("dark-theme");
        } else {
            html.classList.remove("dark-theme");
        }
    }, [isDarkMode]);

    const toggleState = () => {
        setIsEnabled((prevState) => !prevState);
        toggle();
    };

    return (
        <label className={"toggle-wrapper"} htmlFor="toggle">
            <div className={`toggle ${isEnabled ? "enabled" : "disabled"}`}>
                <span className="hidden">{isEnabled ? "Enable Light Mode" : "Enable Dark Mode"}</span>
                <div className="icons">
                    <Sun />
                    <Moon />
                </div>
                <input id="toggle" name="toggle" type="checkbox" checked={isEnabled} onClick={toggleState} />
            </div>
        </label>
    );
}
