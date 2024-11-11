import React from 'react'
import "./register.css";

const Register = () => {
    return (
        <>
            <div className=''><h2 className='text-center mt-3 registerTrust'>Register Trust</h2>
   <div className='card p-5 mx-5 mt-5'>
    <div className='row'>
       
        <div className='col d-flex flex-column'>
            <label htmlFor="Name" className="form-label">Name:</label>
            <input 
                type="text" 
                className="form-control form-control-lg" 
                id="Name" 
                placeholder="Enter Name" 
                name="Name" 
            />

            <label htmlFor="address1" className='form-label mt-3'>Address</label>
            <textarea 
                className="form-control form-control-lg mt-2" 
                id="address1"
                placeholder="Address Line 1"
                name="address1"
            ></textarea>

            <label htmlFor="city" className='form-label mt-3'>City</label>
            <select
                name="City"
                id="city"
                className="form-select form-control-lg mt-2 select-light"
            >
                <option value="">Select City</option>
                <option value="Thanjaur">Thanjaur</option>
            </select>

            <label htmlFor="country" className='form-label mt-3'>Country</label>
            <select
                name="country"
                id="country"
                className="form-select form-control-lg mt-2 select-light"
            >
                <option value="">Select Country</option>
                <option value="India">India</option>
            </select>
        </div>

       
        <div className='col d-flex flex-column mx-4'>
            <label htmlFor="ShortName" className='form-label'>Short Name</label>
            <input 
                type="text" 
                className='form-control form-control-lg' 
                name='ShortName' 
                id='ShortName' 
                placeholder="Enter Short Name"
            />

            <label htmlFor="address2" className='form-label mt-3'>Address</label>
            <textarea 
                className='form-control form-control-lg mt-2' 
                id="address2"
                placeholder='Address Line 2' 
                name='address2' 
            />

            <label htmlFor="state" className='form-label mt-3'>State</label>
            <select
                name="State"
                id="state"
                className="form-select form-control-lg mt-2 select-light"
            >
                <option value="">Select State</option>
                <option value="TamilNadu">Tamil Nadu</option>
            </select>

            <label htmlFor="postalCode" className='form-label mt-3'>Postal Code</label>
            <input 
                type="number" 
                className='form-control form-control-lg mt-2' 
                id="postalCode"
                placeholder='Postal Code' 
                name="postalCode" 
            />
        </div>
    </div>
</div>

                <div className='card registerDetails p-5 mx-5  mt-5 '>
                    <h3 className='registerDetailh3'>Register Details</h3>
                    <div className='row'>
                        <div className='col d-flex' style={{ flexDirection: "column" }}>
                        <label htmlFor="FirstName" className="form-label">Name:</label>
                        <input type="text" className=" form-control form-control-lg" id="FirstName" placeholder="Enter Name" name="FirstName" />
                        <label htmlFor="email" className=" form-label mt-3">Email:</label>
                        <input type="email" className=" form-control form-control-lg mt-2" id="email" placeholder="Enter email" name="email" />
                        </div>
                      <div className='col d-flex mx-4' style={{ flexDirection: "column" }}>
                    <label htmlFor="number" className="form-label">Number:</label>
                    <input type="number" className="form-control form-control-lg" id="number" placeholder="Enter Number" name="number" />
                    <label htmlFor="Number" className="form-label mt-3">Role of Register</label>
                    <input type="number" className="form-control form-control-lg mt-2" id="Number" placeholder="Enter Role Register" name="Number" />
                   </div>
                    </div>
                     </div>

                     {/* <div className='container mt-5 border '>
                        <h3 className='mt-4 text-center'>Trusted Details</h3>
                        <table className='table mb-5'>
                            <thead className='table-info'>
                                <tr>
                                    <th>S.no</th>
                                    <th>Name</th>
                                    <th>Mobile No</th>
                                    <th>Note</th>
                                  </tr>
                                  
                            </thead>
                            <tbody>
                                <tr>
                                    <th>1</th>
                                    <th>Rukmani</th>
                                    <th>9176253412</th>
                                    <th>Any one text</th>
                                  </tr>
                            </tbody>
                        </table>
                     </div> */}
                      <div className='trusted_Details mx-5 mt-5 '>
         <div className='d-flex mt-5 mx-5 trustedDetails_Headerbutton'>
         <h3 className='trustedDetail'>Trusted Details</h3>
          
         </div>
         <div className='table-responsive mt-3 mx-3'>
        <table className='table mb-5'>
            <thead className='table-info'>
                <tr>
                    <th>S.No</th>
                    <th>Name</th>
                    <th>Mobile No</th>
                    <th>Note</th>
                    <th>
          <button type="button" className=' btn btn-success  py-1' >+</button>

                    </th>
                   </tr>
            </thead>
            <tbody>
            <tr>
                <td>1</td>
                <td>rukkkkuuu</td>
                <td>3784562214</td>
                <td>Any text</td>
                <td></td>
                </tr>
            </tbody> 
            </table>
    </div>
    
   </div>
   <div className='float-end mx-5 mt-4 mb-5'>
   <button className='mx-3 btn btn-success'>Register</button>
    <button className='btn btn-primary'>Reset</button>
    </div>
    </div>
 </>
    )
}

export default Register