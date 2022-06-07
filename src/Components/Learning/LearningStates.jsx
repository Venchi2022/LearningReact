import React ,{useState} from 'react'

const LearningStates = (props) => {

const [count,setCount] = useState(1)
// let count  = 0;


const add=() =>{
  setCount(count+1)
 // count = count +1
  console.log("The value of count is = " , count)
}
  return (
    <div>
        <div style={{fontSize:"200px"}}>{count}</div>
        <button onClick = {add} >Add more numbers</button>
    </div>
  )
}

export default LearningStates