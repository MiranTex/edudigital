import app from "~/config/app";
import en_GB from "./en_GB";
import pt_MZ from "./pt_MZ";
import pt_PT from "./pt_PT";

export default function langs(){
    
    const langs ={
        pt_PT: pt_PT,
        
        en_GB: en_GB,
       
        pt_MZ: pt_MZ

    }

    return langs[app().lang];
}
