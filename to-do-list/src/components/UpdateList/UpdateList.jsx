import React, { Component } from 'react';
import '../../App.css';

class UpdateList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      form: {
        title: "",
        text: "",
      }
    }
  }

  addNew = (title, text) => {
    // document.getElementById(".myForm").reset()
    this.props.addToDo(title, text)

    // needed alongside the form REF to reset the value inputs for text and title.
    this.form.title.value = ""
    this.form.text.value = ""
  }

  contentUpdater = (event) => {
    event.preventDefault()
    let { form } = this.state
    //Jonathan's wizardry, basically converting the HTML vaariable types into JS (.value is the user input)
    form[event.target.name] = event.target.value
    this.setState({
      form
    })
  }

  render() {
    return (
      <div className="col-xs-6 col-md-4 col-lg-3" >
        <h3> New Task </h3>
        {/* REF below is used to create an temporary form within the React DOM, so that we can reset it after posting. Seems wierd, and using an input rather than a form should be workable wiht setState but this simply didnt. Ask big J about it. */}
        <form ref={self => this.form = self}>
          <input type="text"
            name="title"
            placeholder="title"
            onKeyUp={this.contentUpdater}
          />
          <br />
          <textarea type="textbox"
            name="text"
            placeholder="task"
            onKeyUp={this.contentUpdater}
          />
          <br />
          <input type="button"
            value="Submit"
            onClick={
              () => {
                this.addNew(this.state.form.title,
                  this.state.form.text,
                )
              }
            } />
        </form>
      </div>
    )
  }
}


export default UpdateList;
