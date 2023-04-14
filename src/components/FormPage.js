import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { IoTrashOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

const FormPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: '',
    nik: '',
    address: '',
    job: '',
    dob: null,
    phone: null,
    secondPhone: null,
    family: [{
      name: '',
      dob: null,
      relationship: 'none'
    }]
  });
  const [secondaryFields] = useState([
    {
      value: true,
      field: (
        <tr>
          <td colSpan={2} style={{right: '0'}}>
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

  const handleSubmit = (data) => {
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

  const handleUpdateFamily = (e, index, key) => {
    setData((prev) => {
      const newFamily = [...prev.family];
      newFamily[index] = { ...newFamily[index], [key]: e.target.value };
      return { ...prev, family: newFamily };
    });
  }

  const handleAddFamily = () => {
    setData((prev) => {
      const newFamily = [...prev.family, { name: '', dob: null, relationship: 'none' }];
      return { ...prev, family: newFamily };
    });
  }

  const handleRemoveFamily = (index) => {
    setData((prev) => {
      const newFamily = prev.family.filter((family, familyIndex) => familyIndex !== index);
      return { ...prev, family: newFamily };
    });
  }

  return (
    <div>
      <h1>Form Page</h1>
      <form onSubmit={() => handleSubmit(data)}>
        <table className='no-border'>
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
              <td className='width-50' style={{height: '100px'}}>
              <textarea
                value={data.address}
                onChange={(e) =>  handleChange(e,'address')}
                placeholder='Please fill with your home address...'
                rows={4}
                cols={50}
              />
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
                <input type="date" value={data.dob} onChange={(e) => handleChange(e,'dob')} placeholder='DD MMMM YYYY' required/>
              </td>
            </tr>
            <tr>
              <td className='width-20'>Phonenumber</td>
              <td className='width-50'>
              <input type="number" value={data.phone} onChange={(e) =>  handleChange(e,'phone')} placeholder='081XXXXXXXXX' />
              </td>
            </tr>
            {secondaryField}
        </table>
        <br/><br/>
        <table style={{width: '50%'}}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Date of Birth</th>
              <th>Relationship Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.family.map((person, idx) => (
              idx === 0 ?
              <tr key={'fam-'+idx}>
                <td>
                  <input className='width-100' type="text" value={person.name} onChange={(e) => handleUpdateFamily(e, idx, 'name')} placeholder='Please fill with your Fullname...' required/>
                </td>
                <td>
                  <input className='width-100' type="date" value={person.dob} onChange={(e) => handleUpdateFamily(e, idx, 'dob')} placeholder='DD MMMM YYYY' required/>
                </td>
                <td>
                  <select className='width-100' value={person.relationship} onChange={(e) => handleUpdateFamily(e, idx, 'relationship')}>
                    <option value="undefined">--Please choose an option--</option>
                    <option value="brother">Brother</option>
                    <option value="sister">Sister</option>
                    <option value="parent">Parent</option>
                    <option value="child">Child</option>
                  </select>
                </td>
              </tr>
              :
              <tr key={'fam-'+idx}>
                <td>
                  <input className='width-100' type="text" value={person.name} onChange={(e) => handleUpdateFamily(e, idx, 'name')} placeholder='Please fill with your Fullname...'/>
                </td>
                <td>
                  <input className='width-100' type="date" value={person.dob} onChange={(e) => handleUpdateFamily(e, idx, 'dob')} placeholder='DD MMMM YYYY'/>
                </td>
                <td>
                  <select className='width-100' value={person.relationship} onChange={(e) => handleUpdateFamily(e, idx, 'relationship')}>
                    <option value="undefined">--Please choose an option--</option>
                    <option value="brother">Brother</option>
                    <option value="sister">Sister</option>
                    <option value="parent">Parent</option>
                    <option value="child">Child</option>
                  </select>
                </td>
                <td>
                  <button className='delete-button' onClick={() => handleRemoveFamily(idx)}><IoTrashOutline/></button>
                </td>
              </tr>
            ))}
            <tr>
              <td>
                <button className='minimalist-button' onClick={() => handleAddFamily()}>Add Family Member</button>
              </td>
            </tr>
          </tbody>
        </table>
        <br/><br/>
        <button className='submit-button' type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormPage;