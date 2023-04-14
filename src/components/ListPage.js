import React from 'react';
import { useSelector } from 'react-redux';

const ListPage = () => {
  const data = useSelector((state) => state.data);
  console.log(data)

  return (
    <div>
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
          {/* <th style={{borderRadius: '0 8px 0 0', borderRight: 'none'}}>Family</th> */}
        </tr>
      </thead>
      <tbody>
        {data.length > 0 ?
          data.map((item, idx) => (
            idx !== data.length-1 ?
            <tr>
              <td style={{textAlign: 'center', border: '0.5px solid black', borderTop: 'none', borderLeft: 'none', padding: '5px'}}>{idx+1}</td>
              <td style={{textAlign: 'center', border: '0.5px solid black', borderTop: 'none', borderLeft: 'none', padding: '5px'}}>{item.name}</td>
              <td style={{textAlign: 'center', border: '0.5px solid black', borderTop: 'none', borderLeft: 'none', padding: '5px'}}>{item.nik}</td>
              <td style={{textAlign: 'center', border: '0.5px solid black', borderTop: 'none', borderLeft: 'none', padding: '5px'}}>{item.address ?? "-"}</td>
              <td style={{textAlign: 'center', border: '0.5px solid black', borderTop: 'none', borderLeft: 'none', padding: '5px'}}>{item.job ?? "-"}</td>
              <td style={{textAlign: 'center', border: '0.5px solid black', borderTop: 'none', borderLeft: 'none', padding: '5px'}}>{item.dob}</td>
              <td style={{textAlign: 'center', border: '0.5px solid black', borderTop: 'none', borderLeft: 'none', borderRight: 'none', padding: '5px'}}>{item.phone}{item.secondPhone ? `, `+item.secondPhone : "" }</td>
              {/* <td style={{textAlign: 'center', border: '0.5px solid black', borderTop: 'none', borderLeft: 'none', borderRight: 'none', padding: '5px'}}><button className='customize-button' onClick={() => handleShowFamily(item.family)}>Show ({item.family.length ? item.family.length : 0})</button></td> */}
            </tr>
            :
            <tr>
              <td style={{textAlign: 'center', borderRight: '0.5px solid black', padding: '5px'}}>{idx+1}</td>
              <td style={{textAlign: 'center', borderRight: '0.5px solid black', padding: '5px'}}>{item.name}</td>
              <td style={{textAlign: 'center', borderRight: '0.5px solid black', padding: '5px'}}>{item.nik}</td>
              <td style={{textAlign: 'center', borderRight: '0.5px solid black', padding: '5px'}}>{item.address ?? "-"}</td>
              <td style={{textAlign: 'center', borderRight: '0.5px solid black', padding: '5px'}}>{item.job ?? "-"}</td>
              <td style={{textAlign: 'center', borderRight: '0.5px solid black', padding: '5px'}}>{item.dob}</td>
              <td style={{textAlign: 'center', borderRight: '0.5px solid black', padding: '5px'}}>{item.phone}{item.secondPhone ? `, `+item.secondPhone : "" }</td>
              {/* <td style={{textAlign: 'center', padding: '5px'}}><button className='customize-button' onClick={() => handleShowFamily(item.family)}>Show ({item.family.length ? item.family.length : 0})</button></td> */}
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