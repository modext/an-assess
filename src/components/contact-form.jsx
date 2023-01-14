import React from "react";
import { object, func } from "prop-types";

// THE INITIAL CODE BEFORE I REFACTORED IS COMMENTED OUT BELOW  

export class ContactForm extends React.Component {
  static defaultProps = {
    data: {
      name: "",
      email: "",
      option: "",
      select: "",
      message: "",
      terms: false,
    },
  };

  static propTypes = {
    onChange: func.isRequired,
    onSubmit: func.isRequired,
    data: object.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      ...props.data,
      ...this.options,
    };
    console.log(props.data);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fieldChange = this.fieldChange.bind(this);
  }

  /**
   * When form is submitted forward contact data to parent
   * @param {event} DOMEvent
   */
  handleSubmit(event) {
    event.preventDefault();
    console.log(this.props.data);
    this.props.onSubmit(this.props.data);
  }

fieldChange=(event)=>{
    let target = event.target;
    let value = target.type ==='checkbox' ? target.checked : target.value;
    this.setState({
        [target.name]: value
    }, ()=>{
        if (this.props.onChange){
            this.props.onChange(this.state)
        }
    },)
    console.log(this.state)
}

  isSelected(key, option) {
    return this.state[key] === option;
  }

  options = [
    { id: 1, label: "I have question about my membership" },
    { id: 2, label: "I have technical question" },
    { id: 3, label: "I would like to change membership" },
    { id: 4, label: "Other question" },
  ];

  render() {
    let data = this.props.data;
    const { name, email, option, select, message, terms } = data;
    // console.log(option);
    // console.log(select);
    // console.log(this.state.select);
    // console.log(this.state.option);

    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Contact Form</h3>

        <div class="form-group">
            <label className="form-label">Your Name:</label>
            {/* <input name="name" onChange={e=> this.props.data.name = e.target.value} className="form-control" /> */}
            <input name="name" value={name} onChange={this.fieldChange} className="form-control" />
        </div>

        <div className="form-group">
          <label className="form-label">Your Best Email:</label>
          <input
            name="email"
            value={email}
            onChange={this.fieldChange}
            className="form-control"
          />
        </div>

        <label className="form-label">Select your membership option:</label>
        <div class="form-group row">
          <label className="form-label col-xs-4">
            <input
              type="radio"
              key={option}
              onChange={this.fieldChange}
              name="option"
              value="Option A"
            />{" "}
            Option A
          </label>
          <label className="form-label col-xs-4">
            <input
              type="radio"
              key={option}
              onChange={this.fieldChange}
              name="option"
              value="Option B"
            />{" "}
            Option B
          </label>
          <label className="form-label col-xs-4">
            <input
              type="radio"
              key={option}
              onChange={this.fieldChange}
              name="option"
              value="Option C"
            />{" "}
            Option C
          </label>
        </div>

        <hr />

        <div className="form-group">
          <label className="form-label">What can we help you with:</label>
          <select
            className="form-control"
            name="select"
            id="select"
            value={this.state.select}
            onClick={console.log(this.state.select)}
            onChange={this.fieldChange}
          >
            {this.options.map((option) => (
              <option value={option.label} key={option.id} >
                {option.label}
              </option>
              
            )) }
          </select>
        </div>

        <div className="form-group">
          <label className="form-label">Message:</label>
          <textarea
            name="message"
            value={message}
            onChange={this.fieldChange}
            rows="10"
            placeholder="Please type your question here"
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label className="form-label">
            {" "}
            <input
              type="checkbox"
              onChange={this.fieldChange}
              value={terms}
              name="terms"
            />{" "}
            I agree to terms and conditions{" "}
          </label>
        </div>

        <input
          type="submit"
          value="Send"
          onSubmit={this.handleSubmit}
          className="contactform-submit"
        />
      </form>
    );
  }
}



// import React from 'react';
// import { object,func } from 'prop-types';

// export class ContactForm extends React.Component{

//     static defaultProps = {
//         data:{
//             name:'',
//             email:'',
//             option:'',
//             select: '',
//             message:'',
//             terms:false
//         }
//     }

//     static propTypes = {
//         onChange: func.isRequired,
//         onSubmit: func.isRequired,
//         data: object.isRequired
//     }

//     constructor(props){
//         super(props)
//     }

//     /**
//      * When form is submitted forward contact data to parent
//      * @param {event} DOMEvent
//      */
//     handleSubmit(event){
//         event.preventDefault();

//         console.log(this.props.data);
//         this.props.onSubmit(this.props.data)
//     }

//     fieldChange(event){
//         let target = event.target;
//         let value = target.type ==='checkbox' ? target.checked : target.value;
//     }

//     isSelected(key, option){
//         return this.props.data[key] == option
//     }

//     options = [
//         {id:1, label:'I have question about my membership'},
//         {id:2, label:'I have technical question'},
//         {id:3, label:'I would like to change membership'},
//         {id:4, label:'Other question'},
//     ]

//     render(){
//         let data = this.props.data;

//         return <form>

//         <h3>Contact Form</h3>

//         <div class="form-group">
//             <label className="form-label">Your Name:</label>
//             <input name="name" onChange={e=> this.props.data.name = e.target.value} className="form-control" />
//         </div>

//         <div class="form-group">
//             <label className="form-label">Your Best Email:</label>
//             <input name="email" className="form-control" />
//         </div>

//         <label className="form-label">Select your membership option:</label>
//         <div class="form-group row">
//             <label className="form-label col-xs-4">
//             <input type="radio" name="option" value="A"/> Option A</label>
//             <label className="form-label col-xs-4">
//             <input type="radio" name="option" value="B"/> Option B</label>
//             <label className="form-label col-xs-4">
//             <input type="radio" name="option" value="C"/> Option C</label>
//         </div>

//         <hr/>

//         <div class="form-group">
//             <label className="form-label">What can we help you with:</label>
//             <select  className="form-control" name="select">
//                 <option value="1">I have question about my membership</option>
//             </select>
//         </div>

//         <div class="form-group">
//             <label className="form-label">Message:</label>
//             <textarea name="message" rows="10" placeholder="Please type your question here"  className="form-control"/>
//         </div>

//         <div class="form-group">
//             <label className="form-label"> <input type="checkbox" checked={selectedValue === choice.value}
//                 onChange={(e) => onChange(e.target.value)} name="terms" /> I agree to terms and conditions </label>

//         </div>

//             <input type="submit" onSubmit={this.handleSubmit} value="Send" className="contactform-submit" />
//         </form>
//     }
// }
