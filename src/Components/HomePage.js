import React from 'react';
import "./HomePage.css";
import mongoose from 'mongoose';

function HomePage(){
    module.exports = {
        db: 'mongodb://localhost:3000/reactdb'
      };
    return(
        <>
        <div>
            <button className='search'>Search</button>
        </div>
        <div className='form'>
            <form>
                <h2 style={{textAlign:"center", marginLeft:"-30px", color:"#e79d6d"}}>Add Details</h2>
                <input required type="text" name="name" placeholder="Enter Name*" />
                <input required type="email" name="email" placeholder="Enter Email*" /><br/>
                <br/>
                <input required type="text" name="contact_number" placeholder='Enter phone Number*'/>
                <select required name="level" id="course">
                    <option value="UG">UG (UnderGraduate)</option>
                    <option value="PG">PG (PostGraduate)</option>
                </select><br/>
                <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Country Prefrences*<br/>
                <table>
                    <tr>
                        <input type="checkbox" id="usa" name="usa" value="usa"/>
                        <label for="usa"> USA</label>
                        <input type="checkbox" id="australia" name="australia" value="australia"/>
                        <label for="australia"> Australia</label>
                        <input type="checkbox" id="new-zealand" name="new-zealand" value="new-zealand"/>
                        <label for="new-zealand"> New Zealand </label>
                        <input type="checkbox" id="canada" name="canada" value="canada"/>
                        <label for="canada"> Canada </label>
                    </tr>
                    <tr>
                        <input type="checkbox" id="uk" name="uk" value="uk"/>
                        <label for="uk"> UK </label>
                        <input type="checkbox" id="ireland" name="ireland" value="ireland"/>
                        <label for="ireland"> Ireland </label>
                        <input type="checkbox" id="germany" name="germany" value="germany"/>
                        <label for="germany"> Germany </label>
                    </tr>
                </table>
                <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;D.O.B.*
                <input required type="date" name="dob"/>
                <br/>
                <br/>
                <input type="submit" name="submit" value="ADD DETAILS" className='submit'/>
            </form>
        </div>
        </>
    );

}

export default HomePage;