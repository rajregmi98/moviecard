import Highlightcard from "./Highlightcard";
import Movecard from "./Movecard"


export default function mov(){
    return(
        <div>
            <h1 className="HeaderText"> Movie is loved by every one</h1>
            <h2 style={{fontStylr:"italic", margin: 40}}> Enjoy every movement of movie...</h2>
         <div style={{ display:"flex"}}>
            <Highlightcard header ="select a day">
                

            </Highlightcard>
            <Highlightcard header="Pick up movie"></Highlightcard>
            <Highlightcard header ="Let's watch movie"></Highlightcard>

         </div>
        </div>
    

    );
}