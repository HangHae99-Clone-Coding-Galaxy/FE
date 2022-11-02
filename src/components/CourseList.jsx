import React from 'react'
import  {useSelector} from 'react-redux'

const CourseList = () => {
    const courseList = useSelector((state)=>state?.addCreateSlice?.courses);
  return (
    <div>
        {
            courseList.map(course)
        }
      
    </div>
  )
}

export default CourseList;
