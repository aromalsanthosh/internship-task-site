import React from 'react'
import './Filter.css'
function Filter() {
    return (
        <div className='container-fluid '>

            <div className='row'>
                <div className='filter col-lg-4 bg-light'>
                    <h5>Filter</h5>
                    <hr />
                    <h6 className='text-info'>Topic</h6>
                    {/* dropdown for course */}
                    <select className='form-control'>
                        <option>All</option>
                        <option>Web Development</option>
                        <option>Mobile Development</option>
                        <option>UI/UX</option>
                    </select>
                    <h6 className='text-info'>Level</h6>
                    {/* checkbox for level */}
                    <div className='form-check'>
                        <input className='form-check-input' type='checkbox' value='' />
                        <label className='form-check-label'>Beginner</label><br/>
                        <input className='form-check-input' type='checkbox' value='' />
                        <label className='form-check-label'>Intermediate</label><br/>
                        <input className='form-check-input' type='checkbox' value='' />
                        <label className='form-check-label'>Advanced</label><br/>
                        <input className='form-check-input' type='checkbox' value='' />
                        <label className='form-check-label'>All</label><br/>
                    </div>
                    {/* price checkbox 499-500 */}
                    <h6 className='text-info'>Price</h6>
                    <div className='form-check'>
                        <input className='form-check-input' type='checkbox' value='' />
                        <label className='form-check-label'>499-500</label><br/>
                        <input className='form-check-input' type='checkbox' value='' />
                        <label className='form-check-label'>501-600</label><br/>
                        <input className='form-check-input' type='checkbox' value='' />
                        <label className='form-check-label'>601-700</label><br/>
                        <input className='form-check-input' type='checkbox' value='' />
                        <label className='form-check-label'>701-800</label><br/>
                    </div>
                        
                    
                </div>
                
                
            </div>
        
        
        </div>
        
    )
}

export default Filter
