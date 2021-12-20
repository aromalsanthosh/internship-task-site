import React from 'react'
import {Card} from 'react-bootstrap'
import courseimage from '../../assets/course.png'
import './Courses.css'
function Courses() {
    return (
        <div>
            <div className='container-fluid'>
                <div className='row'>
                    
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={courseimage} />
                        <Card.Body>
                            <Card.Title>UI UX Course</Card.Title>
                            
                            <h5>Rs.699</h5>
                        </Card.Body>
                    </Card>
                    
                </div>
            </div>
        </div>
    )
}

export default Courses
