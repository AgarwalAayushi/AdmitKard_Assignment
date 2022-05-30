import React from 'react';
import "./Search.css";

function Search(){
    return(
        <>
            <div className='search_form'>
                <form>
                    <input type="email" name="email" placeholder='Enter Email... ' className='search_box'/>
                    <input type="submit" name="submit" value="Search" className='submit_box'/>
                </form>
            </div>
            <div className='data'>
                <h3>Name:</h3><p>Aayushi Agarwal</p>
                <h3>Email:</h3><p>Ayushiagarwal260800@gmail.com</p><br/>
                <h3>Contact Number:</h3><p>9123248377</p>
                <h3>Course Level:</h3><p>UG (UnderGraduate)</p><br/>
                <h3>Country Prefrence:</h3><p>UK, USA, Canada</p>
                <h3>D.O.B.:</h3><p>26/08/2000</p>
            </div>
        </>
    );
}
export default Search;