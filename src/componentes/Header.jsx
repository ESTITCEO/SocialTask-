    import React from "react";
    import "../estilos/Header.css";
    import { FiCheckCircle } from "react-icons/fi";
    function Header() {
        return (
            <header className="header">
            <div className="logo">
        <FiCheckCircle size={28} />
        <h1>SocialTask</h1>
        <h2>Organiza tus tareas y comparte ideas con amigos.</h2>
            </div>

            </header>
        )
    }
    export default  Header;