import React from 'react'

function GradeDetails(props) {
    const {grades} = props
    return (
        <div>
            {grades.map((grade,i)=>{
                return(
                 <div key ={i}>
                    Test {i+1} : {parseInt(grade).toFixed(2)}%
                </div>)
            })}
           
        </div>
    )
}

export default GradeDetails
