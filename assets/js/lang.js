import app from "~/config/app";

export default function langs(){
    
    const langs ={
        pt_lang: {
            menus:{
                plataformas_elearning: "Plataformas eLearning"
            },
            "index":{
                "banner":{
                    title:"Nós acreditamos que a aprendizagem nunca acaba",
                    
                    text: "Na EDUdigital sabemos que a aprendizagem liberta o potencial de cada pessoa e de cada organização. É por isso que implementamos plataformas online e desenvolvemos conteúdos" 
                    +"digitais para melhorar a igualdade entre as pessoas, favorecer o acesso a formação de qualidade e promover a aprendizagem ao longo da vida.",
                    
                    buttonActionText:"Fale Connosco"
                }
            }
        },
        
        en_lang: {
            menus:{
                plataformas_elearning: "eLearning Platforms"
            },
            "index":{
                "banner":{
                    title:"We believe that learning never ends.",
                    
                    text: "At EDUdigital we know that training unlocks the potential of each person and each company."
                    +"This is why we develop digital content to increase the equity between individuals, giving access to quality training and promote lifelong training.",
                    
                    buttonActionText:"Talk to Us"
                }
            }
        },
        
        
        pt_first_lang: {
            
        }

    }


    return langs[app().lang];
}
