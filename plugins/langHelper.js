import langs from "~/assets/js/lang"

export default ({app},inject)=>{
    inject("translate",()=>{
        return langs()
    })
}