import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Modal from 'react-modal';

const ListPage = () => {
  const data = useSelector((state) => state.data);
  const [showPopUp, setShowPopUp] = useState(false);
  const [familyDetails, setFamilyDetails] = useState([]);

  const handleShowFamily = (data) => {
    setFamilyDetails(data);
    setShowPopUp(true)
  }

  function handleClosePopup() {
    setShowPopUp((prev) => !prev);
  }

  return (
    <div>
      <Modal isOpen={showPopUp} onRequestClose={() => handleClosePopup()} style={{content: { position: 'absolute', top: '50%', left: '50%',backgroundColor: 'white', padding: '25px', border: '0.5px solid black', borderRadius: '8px',  transform: 'translate(-50%, -50%)'}, overlay: { backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: '1000',}}}>
      <table>
          <thead>
            <tr>
              <th style={{borderRadius: '8px 0 0 0'}}>Name</th>
              <th>Date of Birth</th>
              <th style={{borderRadius: '0 8px 0 0', borderRight: 'none'}}>Relationship</th>
            </tr>
          </thead>
          <tbody>
            {familyDetails.length > 0 ?
              familyDetails.map((item, idx) => (
                idx%2 === 1 ?
                <tr>
                  <td className='odd-row'>{item.name}</td>
                  <td className='odd-row'>{item.dob}</td>
                  <td className='odd-row' style={{textAlign: 'center', border: '0.5px solid black', borderTop: 'none', borderLeft: 'none', borderRight: 'none', padding: '5px'}}>{item.relationship}</td>
                </tr>
                :
                <tr>
                  <td className='odd-row'>{item.name}</td>
                  <td className='odd-row'>{item.dob}</td>
                  <td className='odd-row' style={{textAlign: 'center', border: '0.5px solid black', borderTop: 'none', borderLeft: 'none', borderRight: 'none', padding: '5px'}}>{item.relationship}</td>
                </tr>
              )) :
              <tr>
                <td style={{textAlign: 'center', padding: '10px 2px'}} colSpan={7}>Oh no! the data is missing.</td>
              </tr>
            }
          </tbody>
        </table>
        <br/>
        <button className='delete-button' onClick={() => handleClosePopup()}>Close</button>
      </Modal>
      <h1>Data List</h1>
      <table>
      <thead>
        <tr>
          <th style={{borderRadius: '8px 0 0 0'}}>No.</th>
          <th>Name</th>
          <th>eKTP</th>
          <th>Address</th>
          <th>Job</th>
          <th>Date of Birth</th>
          <th>Phone Number(s)</th>
          <th style={{borderRadius: '0 8px 0 0', borderRight: 'none'}}>Family</th>
        </tr>
      </thead>
      <tbody>
        {data.length > 0 ?
          data.map((item, idx) => (
            idx%2 === 1 ?
            <tr>
              <td className='odd-row'>{idx+1}</td>
              <td className='odd-row'>{item.name}</td>
              <td className='odd-row'>{item.nik}</td>
              <td className='odd-row'>{item.address ?? "-"}</td>
              <td className='odd-row'>{item.job ?? "-"}</td>
              <td className='odd-row'>{item.dob}</td>
              <td className='odd-row'>{item.phone}{item.secondPhone ? `, `+item.secondPhone : "" }</td>
              <td className='odd-row' style={{textAlign: 'center', border: '0.5px solid black', borderTop: 'none', borderLeft: 'none', borderRight: 'none', padding: '5px'}}><button className='minimalist-button' onClick={() => handleShowFamily(item.family)}>Show ({item.family ? item.family.length : 0})</button></td>
            </tr>
            :
            <tr>
              <td className='even-row'>{idx+1}</td>
              <td className='even-row'>{item.name}</td>
              <td className='even-row'>{item.nik}</td>
              <td className='even-row'>{item.address ?? "-"}</td>
              <td className='even-row'>{item.job ?? "-"}</td>
              <td className='even-row'>{item.dob}</td>
              <td className='even-row'>{item.phone}{item.secondPhone ? `, `+item.secondPhone : "" }</td>
              <td className='even-row' style={{textAlign: 'center', padding: '5px'}}><button className='minimalist-button'onClick={() => handleShowFamily(item.family)}>Show ({item.family ? item.family.length : 0})</button></td>
            </tr>
          )) :
          <tr>
            <td style={{textAlign: 'center', padding: '10px 2px'}} colSpan={7}>Oh no! We don't have any data yet.</td>
          </tr>
        }
      </tbody>
    </table>
    </div>
  );
};

export default ListPage;