import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card , Button} from 'react-bootstrap' ;
import './App.css';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { Person :[{
      fullName:'Roua Ghanmi', bio:'21 years old, working in private company as engineer .',imgSrc:'https://media.istockphoto.com/photos/over-the-shoulder-shot-of-engineer-working-with-cad-software-on-picture-id1176842849?k=6&m=1176842849&s=612x612&w=0&h=9NAuPtvdlhvZUG8sKrL8pEIjXFYBMP-H26MhW1FQjJ0=',profession:'engineer informatique'
    }],
    isShow:'false',
    hours:0,
    minutes:0,
    secondes:0,
      
  } 
}
showProfil=()=>{
  this.setState({
    isShow:!this.state.isShow,
  })
}
    componentDidMount(){
      setInterval(() =>{
        this.setState({
          secondes:this.state.secondes+1,
          })
          if(this.state.secondes ===60){
            this.setState({
              minutes:this.state.minutes+1,
              secondes:0,
            }) 
            if(this.state.minutes ===60){
              this.setState({
                hours:this.state.hours+1,
                minutes:0,
                secondes:0,
              })
            }
          };
      },1000)
    }
  render() { 
    return ( <div className="hard">
      {this.state.Person.map((el,index)=><Card className="hard" key={index} style={{width:'18rem'}}>
        <h1 className="counter">
          <span>{this.state.hours}</span>:
          <span>{this.state.minutes}</span>:
          <span>{this.state.secondes}</span>
          
        </h1>
        {(this.state.isShow)?<div>  
    <div className='img'>
  <Card.Img  variant="top" src={el.imgSrc} style={{width:'200px',height:'200px'}} />
  </div>
  <Card.Body>
    <Card.Title>{el.fullName}</Card.Title> 
      <Card.Text>
      {el.bio}
      </Card.Text>
      <Card.Text>
      {el.profession}
      </Card.Text><h1 onClick={this.changeTitle}>{this.state.title}</h1>
      </Card.Body>
  </div>:<p>Click On Show Profil</p>}
  <Button
    variant={this.state.isShow?"warning" : "info"}
    onClick={this.showProfil}
    >
      {this.state.isShow?'Hide Profil':'Show Profil'}
      </Button>
</Card>)}

    </div> 
    );
  }
}

export default App;