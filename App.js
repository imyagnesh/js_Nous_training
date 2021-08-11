
import React from "react"
import Child from './Child'

const App = ({name,title}) => {
    
    return <> <h1>Header</h1> <h2>{title}  {name} </h2> <input className="inputclass"  /><Child/> </>
    //return <input />
}
export default App;