import React from 'react'

const Contact = ({infos}) => {
  return (
    <div className='mt-3 mx-5 w-50'>
      <h2>Contacts</h2>
      {infos.map(info=> (
      <div key={info.id} className='form-control mb-2'>
        <div className=''>
          <h3>{info.text}</h3>
          <p>{info.relation}</p>
          <p className='text-info'>{info.tel}</p>
        </div>
      </div>
      ))}
    </div>
  )
}

export default Contact
