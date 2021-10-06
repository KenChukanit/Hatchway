import React,{useState,useEffect} from 'react';
import SearchBar from './SearchBar';
import StudentDetails from './StudentDetails'



export default function Index(props) {
    const { search } = window.location;
    const query = new URLSearchParams(search).get('s');
    const [searchQuery, setSearchQuery] = useState(query || '');
    const filterPosts = (names, query) => {
        if (!query) {
            return names;
        }
    
        return names.filter((a) => {
            const searchName = a.firstName.toLowerCase();
            return searchName.includes(query);
        });
    };
    
    const [students,setStudents] = useState([]);
    
    const getStudents = ()=>{
    fetch(`https://api.hatchways.io/assessment/students`)
    .then((res)=> res.json())
    .then((data)=> setStudents(data.students))
    .catch((err)=> console.log(err))
   
}
console.log(students)

    useEffect(()=>{
        getStudents()
        // eslint-disable-next-line react-hooks/exhaustive-deps
      },[]) 
      const filteredPosts = filterPosts(students.firstName, searchQuery);
  
    return (
        <main  >
        <SearchBar/>
  
     <div>
              {!students || students.lengths ===0 ? (<div>Failed to get the data from source</div>):
                                  (<>{students.map((student,i)=> 
              {return (<div key={i}  >
                        <StudentDetails
                        img_url = {student.pic}
                        first_name = {student.firstName}
                        company = {student.company}
                        skill = {student.skill}
                        grades = {student.grades}
                        />
                      </div>
                      
              )})}</>)}
              </div>
    </main>
    )
}
