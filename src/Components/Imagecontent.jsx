const Imagecontent=(props)=>{
// const {head ,content1,content2,content3,imgsrc} =mydate;
return(
    <>
    <div className="container-fluid egcolor ">
    <div className="container">
    <div className="row ">
            <div className="col-md-7 ">
                <div className="aside ">{props.head}
                   </div>
                     <div className="aside1 ">{props.content1}<span className="sellprdt"> {props.content2}</span> {props.content3}
                     </div>
                     <div className="row">
              <div className="col-md-8 my-2">
                <input
                  type="text"
                  value="enter your mobile number"
                  size="70px"
                  className="w-100 inputsize"
                />
              </div>
              <div className="col-md-4 my-1 ">
                <button className="button">start selling</button>
              </div>
            </div>

                    
            </div>
         <div className="col-md-5 ">
         <img src={props.imgsrc} alt="shopping" className="phonewithman pt-5 "/>
        
         </div>
        </div>
    </div>
    </div>
        </>
)
}
export default Imagecontent;