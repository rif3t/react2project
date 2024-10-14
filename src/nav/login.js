import "./login.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
function Login(){
    return(
        <>
       <div className="main container-fluid">
      <div className="img-fluid">
      <Card style={{ width: '22rem' }} className="cardlo img-fluid">
        <h2 className="text-center logh2">log in our wepsite and explor our world</h2>
      <Card.Body>
        <Card.Title style={{color:"white"}}>Enter user name</Card.Title>
        <input type="text" placeholder="user name" className="user-name"/>
        <Card.Title style={{color:"white"}}>Enter password</Card.Title>
        <input type="password" placeholder="password" className="user-name"/>
        <Button onClick={()=>{window.alert("this site just a project it has no data base to log in ")}} variant="outline-primary" className="log">Log in</Button>{' '}
      </Card.Body>
    </Card>
      </div>
    <p className="para"></p>
       </div>
        </>
    )
}
export default Login