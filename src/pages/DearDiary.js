import React from "react";
import Input from "../myself/input";
import 'bootstrap/dist/css/bootstrap.css';



function DearDiary(){
    return(
        <div className="container-fluid">
            <h1>Dear Diary</h1>
            <br/>
            <Input 
            title="Inicio del diario" 
            data="23/11/2023" 
            content="Hoy siento tristeza y soledad. Estoy en una situación que me puede, donde tengo muchos factores que dependen de mi. 
            El primero y que más me preocupa es mi casa, mi padre no atiende a mi hermana, no hace nada y se va cada fin de semana. Mi hermano acaba de volver de su viaje de un año a asia, 
            y para el las cosas siguen igual, no quiere trabajar y planea irse de nuevo porque aqui no esta agusto(normal). Por otro lado tengo a mi hermana, que crece dia a dia mientras
            se enfrenta a la etapa, que para mí, es decisiva y la está afrontando de la mejor manera posible. Se hace mayor a una velocidad increible. Por último mi novia, una persona 
            que me encanta y me apasiona pero que me aterra que se marche. Sigo queriendo conocerla más y más, pero eso me preocupa por el daño que me puede llegar a hacer." 
            happiest="4/10"/>
            <br/>
            <Input 
            title="Jefe quiero un aumento"
            data="28/11/2023" 
            content="Estoy agobiado con el trabajo. No avanzo en ningún aspecto."
            happiest="7/10"/>
            
            <br/>
            <Input 
            title="Médico no me asustes" 
            data="30/11/2023" 
            content="He ido al médico, que tenía la tensión alta, pero todo ha salido perfecto. Hace dos días estuve malo de la barriga y también estoy bien. Hoy ha sido un buen día, me ha faltado ir a correr pero no me ha dado tiempo."
            happiest="7/10"/>
            <br/>
            <Input  
            title=" Meeting myself" 
            data="09/12/2023"
            content="This week has been great. I have felt a bit hungry with my favorite person because we didn't get to meet all 
            the week, and also we didn't have much time to talk. However, this weekend has been perfect with him. We went to 
            meet my aunts and today I'm going to dinner with his basketball friends. \n\n
            Its only eleven days to sign my house. I'm nervous about and it's very exiting.
            I want to learn to be alone, and not depend on nothing more than myself. \n\n
            I want to open my circle and to join other people as our classmates. \n\n
            "
            happiest="8/10"/>
        </div>
    );
}

export default DearDiary;