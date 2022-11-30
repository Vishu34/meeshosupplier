import { useParams } from "react-router-dom";

const Useparam=()=>{
    const{id,name}=useParams();

return(
    <>
<div>
    <h1>{id}{name}</h1>
</div>
    </>
)
}
export default Useparam;