import React from  'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css';

function TeacherItem(){
    return(
        <article className="teacher-item">
                    <header>
                    <img src="https://avatars3.githubusercontent.com/u/47544016?s=460&u=69e67fd7d97216097262483b059694bbb34bb227&v=4" alt="Rudinei"/>
                    <div>
                        <strong>Rudinei Costa</strong>
                        <span>Química</span>
                    </div>
                    </header>

                    <p>
                        Entusiasta das melhores tecnologias de quimicas avançada
                        <br/> <br/>
                        apaixonado por explodir coisas em laboratórios e por mudar vidas de pessoas através do poder do Reino de Deus
                    </p>

                    <footer>
                        <p>
                            Preço/hora
                            <strong>R$ 50,00</strong>
                        </p>
                        <button type='button'>
                            <img src={whatsappIcon} alt="Whatsapp"/>
                            Entrar em contato 
                        </button>

                    </footer>
                </article>
    )
}
export default TeacherItem;