import React, { Component } from 'react'

export default class Test extends Component {
    

    affiche=()=>{
        this.setState({
            show: !this.state.show
        })
    }
    delectClick= () =>{
        this.props.deleteClickHandler();
    }

    render() {
        return (
            <div className="container card card-body mb3 col-md-4" >
                {this.props.nom.show ? (
                        <div className="">
                            <img src={this.props.nom.photo} className="df-justify-content-md-center list-group " 
                            height="400px"  width= "465px" alt="" />
                            <h1 className='list-group-item'>{this.props.nom.nom} {this.props.nom.prenom} 
                            <br/> age: {this.props.nom.age} 
                            
                            <i onClick={this.delectClick} style={{cursor:'pointer', float:'right'}}
                            className=" fas fa-trash"></i></h1>
                            
                        </div>    
                            ) : <div>hello</div> }
                <button onClick={() => this.props.handleShow(this.props.nom.id)}> change </button>
            </div>
        )
    }
}
