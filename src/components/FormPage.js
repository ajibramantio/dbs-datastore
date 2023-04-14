import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import Alert from 'react-bootstrap/Alert';
import { IoTrashOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

const FormPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isShowingAlert, setIsShowingAlert] = useState(false);
  const [data, setData] = useState({
    name: '',
    nik: '',
    address: '',
    job: '',
    dob: 'mm/dd/yyyy',
    phone: null,
    secondPhone: null
  });
  const [secondaryFields] = useState([
    {
      value: true,
      field: (
        <tr>
          <td aria-colspan={2} style={{right: '0'}}>
            <button className='minimalist-button' onClick={() => handleSecondaryNumber(false)}>Add Secondary Phonenumber</button>
          </td>
        </tr>
      )
    },
    {
      value: false,
      field: (
        <tr>
          <td className='width-20'>
            Secondary Phone Number:
          </td>
          <td className='width-50'>
            <input type="number" value={data.secondPhone} onChange={(e) =>  handleChange(e,'secondPhone')} placeholder='081XXXXXXXXX' /><button className='delete-button' onClick={() => handleSecondaryNumber(true)}><IoTrashOutline/></button>
          </td>
        </tr>
      )
    }
  ]);
  const [secondaryField, setSecondaryField] = useState(secondaryFields[0].field);

  const handleSecondaryNumber = (show) => {
    const secondField = secondaryFields.find((field) => field.value === show);
    if (secondField.field) {
      setSecondaryField(secondField.field);
    }
  };

  const handleClickShowAlert = () => {
    setIsShowingAlert(true);
    
    setTimeout(() => {
      setIsShowingAlert(false);
    }, 2000);
  }

  const handleSubmit = (data) => {
    console.log(data);
    const newId = uuidv4();
    const newData = {
      id: newId, name: data.name, nik: data.nik, address: data.address ?? null, job: data.job ?? null, dob: data.dob ?? null, phone: data.phone ?? null, secondPhone: data.secondPhone ?? null
    };
    dispatch({type: 'newData', payload: newData});
    navigate('/');
  };

  const handleChange = (e, name)=>{
    setData((prev)=>({...prev, [name]:e.target.value}));
  }

  return (
    <div>
        <Alert variant='success' className={`${isShowingAlert ? 'alert-shown' : 'alert-hidden'}`}>
          Your data is successfully stored!
        </Alert>
        <h1>Form Page</h1>
        <form onSubmit={() => handleSubmit(data)}>
          <table className='no-border'>
            {/* <tbody> */}
              <tr>
                <td className='width-20'>Fullname</td>
                <td className='width-50'>
                  <input type="text" value={data.name} onChange={(e) => handleChange(e,'name')} placeholder='Please fill with your Fullname...' required/>
                </td>
              </tr>
              <tr>
                <td className='width-20'>E-KTP Number</td>
                <td className='width-50'>
                <input type="text" value={data.nik} onChange={(e) =>  handleChange(e,'nik')} placeholder='Please fill with your E-KTP number...' required/>
                </td>
              </tr>
              <tr>
                <td className='width-20'>Address</td>
                <td className='width-50'>
                <input type="textarea" value={data.address} onChange={(e) =>  handleChange(e,'address')} placeholder='Please fill with your home address...' />
                </td>
              </tr>
              <tr>
                <td className='width-20'>Job Title</td>
                <td className='width-50'>
                <input type="text" value={data.job} onChange={(e) =>  handleChange(e,'job')} placeholder='Frontend Engineer, Backend Engineer, etc' />
                </td>
              </tr>
              <tr>
                <td className='width-20'>Date of Birth</td>
                <td className='width-50'>
                  <input type="date" value={data.dob} onChange={(e) => handleChange(e,'dob')} placeholder='DD MMMM YYYY' />
                </td>
              </tr>
              <tr>
                <td className='width-20'>Phonenumber</td>
                <td className='width-50'>
                <input type="number" value={data.phone} onChange={(e) =>  handleChange(e,'phone')} placeholder='081XXXXXXXXX' />
                </td>
              </tr>
              {secondaryField}
              <tr>
                <td className='width-20'></td>
                <td className='width-50' style={{display: 'flex', justifyContent: 'flex-end'}}>
                  <button className='submit-button' type="submit">Submit</button>
                </td>
              </tr>
            {/* </tbody> */}
          </table>
      </form>
    </div>
  );
};

export default FormPage;