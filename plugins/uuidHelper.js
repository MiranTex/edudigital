import {v4 as uidv4} from "uuid";
import {id} from '~/helpers/helpers';

export default ({app},inject)=>{
    inject("id",()=>{

        return id();
    })
}