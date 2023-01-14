import React from 'react'
import { ContactForm } from './contact-form'
import { Message } from './message'
import { UserPanel } from './user-panel'


export class App extends React.Component{

    CONTACT_FORM_DEFAULTS = {
        name: '',
        email: '',
        option:'A',
        select: 1,
        type:'',
        message:''
    }
    constructor(props){
        super(props)
        this.state = {
            contact: {...this.CONTACT_FORM_DEFAULTS},
            sent: false,
            currentUser: null
        }
        console.log(this.state.currentUser);
    }

    contactChanged=(contact)=>{
        this.setState({
            contact
        })
    }

    sendContact=(contact)=>{
        // For now just mark it as `sent`
        this.setState({
            sent:true
        });
        console.log(contact);
    }
    
    logIn = () => {
        this.setState({
            currentUser:{
                name:'Test User',
                email:'user@example.com'
            },
            contact: {
                ...this.state.contact,
                name: 'Test User',
                email: 'user@example.com'
            }
        })
        console.log(this.setState.currentUser)
    }



    render(){
        
        return <div className="container">
            <div>
                {this.state.currentUser  && <UserPanel user={this.state.currentUser} />}
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="pull-right">
                        <button className="btn btn-default" onClick={this.logIn}>
                            <i className="glyphicon glyphicon-user"></i> Log In
                        </button>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <h2>Contact us</h2>
                    <p>Please fill in form on the right to get fast reply</p>
                    <img style={{width:'100%'}} src="http://via.placeholder.com/300x200" alt='' />
                </div>
                <div className="col-md-8">
                    {this.state.sent === false ? <ContactForm data={this.state.contact} onChange={this.contactChanged} onSubmit={this.sendContact}/> : null}
                </div>
                {this.state.sent === true ? <Message /> : null }
            </div> 
        </div>
    }
}

// export class App extends React.Component{

//     CONTACT_FORM_DEFAULTS = {
//         name: '',
//         email: '',
//         option:'A',
//         select: 1,
//         type:'',
//         message:''
//     }
//     constructor(props){
//         super(props)
//         this.state = {
//             contact: {...this.CONTACT_FORM_DEFAULTS},
//             sent: false,
//             currentUser: null
//         }
//     }

//     contactChanged(contact){
//         this.setState({
//             contact
//         })
//     }

//     sendContact(contact){
//         // For now just mark it as `sent`
//         this.setState({
//             sent:true
//         });
//         console.log(contact);
//     }

//     logIn = () => {
//         this.setState({
//             currentUser:{
//                 name:'Test User',
//                 email:'user@example.com'
//             }
//         })
//     }


//     render(){
//         return <div className="container">
//             <div className="row">
//                 <div className="col-md-12">
//                     <div className="pull-right">
//                         <button class="btn btn-default">
//                             <i className="glyphicon glyphicon-user"></i> Log In
//                         </button>
//                     </div>
//                 </div>
//             </div>
//             <div className="row">
//                 <div className="col-md-4">
//                     <h2>Contact us</h2>
//                     <p>Please fill in form on the right to get fast reply</p>
//                     <img style={{width:'100%'}} src="http://via.placeholder.com/300x200"/>
//                 </div>
//                 <div className="col-md-8">
//                     <ContactForm data={this.state.contact} onChange={this.contactChanged} onSubmit={this.sendContact}/>
//                 </div>
//             </div>
//         </div>
//     }
// }

