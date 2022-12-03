import React from 'react'
import Card from 'react-bootstrap/Card';

function BgColorExample() {
  return (
    <div id="about" >
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
          <Card.Header><h1>ABOUT ME</h1></Card.Header>
          <Card.Body>
            <Card.Title><br></br>"NAMA SAYA JANNA DONNA RACHEL MESAK <br></br>
            <br></br>DAN SAYA ADALAH MAHASISWA FAKULTAS ILMU KOMPUTER JURUSAN SISTEM INFORMASI SEMESTER 5.<br></br><br></br>
            SAYA MENYUKAI TEKNOLOGI KARENA ITU MERUPKAN SESUATU YANG MENARIK BAGI SAYA" </Card.Title>
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

export default BgColorExample;




