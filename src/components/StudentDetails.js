
import React,{useState} from 'react';
import average from '../data/function.js'
import GradeDetails from './GradeDetails'

function StudentDetails(props) {
    const {id, first_name, company, img_url, grades,skill } = props;
    const [show, setShow] = useState(false)
    
    console.log(grades)
    console.log(show)
    return (
        <div key = {id}>
      
        <img height ='100px' width ='100px' src={img_url}  alt={img_url}/>
        
        <div>
        <h2>{first_name}</h2>
        </div>
        <div >
        Company : {company}
        </div>
        <div >
        Skill : {skill}
        </div>
        <div>
        Grade : {(average(grades))} % <button onClick={()=>{setShow(!show)}}> + </button>
        {show === true && <GradeDetails
                            grades ={grades}/>}
        </div>
        <div>
    
        </div>
        <hr></hr> 
        </div>
    )
}

export default StudentDetails
