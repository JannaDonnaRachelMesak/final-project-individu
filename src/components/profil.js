import React from 'react'
import Card from 'react-bootstrap/Card';

function Profil() {
  return (
    <div id="profil" >
      {[
        // 'Primary',
        // 'Secondary',
        // 'Success',
        // 'Danger',
        // 'Warning',
        // 'Info',
        // 'Light',
        'Dark',
      ].map((variant) => (
        <Card
          bg={variant.toLowerCase()}
          key={variant}
          text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
          style={{ width: '50.90rem' }}
          className="mb-2"
        >
          <Card.Header><h1>PROFILE</h1></Card.Header>
          <Card.Body>
            <Card.Title><br></br>NAMA SAYA : JANNA DONNA RACHEL MESAK<br></br></Card.Title>
            <Card.Title><br></br>AGE : 20<br></br></Card.Title>
            <Card.Title><br></br>PLACE OF BIRTH : TIMIKA<br></br></Card.Title>
            <Card.Title><br></br>DAY OF BIRTH : 27 JANUARI 2002<br></br></Card.Title>
            <Card.Title><br></br>ADDRES : MANADO<br></br></Card.Title>
            <Card.Title><br></br>PHONE : 08XXXXXXXXXX<br></br></Card.Title>
            {/* <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text> */}
          </Card.Body>
        </Card>
      ))}







    </div>
  );
}

export default Profil;




