import React from "react";
import '../components/footer.css';



function Footer() {
    return (
        <footer>
            <><><div className="container_footer">
                
                <div className="box__footer">
                    <h2>Redes Sociales</h2>
                    <a href="https://www.instagram.com" target="_blank" rel="noreferrer"><i className="bi bi-instagram"></i>Instagram</a>
                    <a href="https://facebook.com/" target="_blank" rel="noreferrer"><i className="bi bi-facebook"></i>Facebook</a>

                </div>
                <div className="box__footer">
                    <h2>Contacto</h2>
                    <a href="/"><i className="bi bi-compass-fill"></i>Dirección: Av. Cabildo 3890 - CABA <br />
                        República Argentina </a>
                    <a href="/"><i className="bi bi-telephone-fill"></i>(+54 11) 47525780
                    </a>

                </div>
            </div>
            </><div className="box__copyright">
                    <hr />
                    <p><b>Copyright © 2023 - Todos los Derechos Reservados</b></p>
                </div></>
        </footer >
    );

}


export default Footer 