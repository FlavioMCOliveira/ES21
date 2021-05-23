class ListPeople extends React.Component {
    constructor(props) {
        super(props)
        this.state = {persons : [],personsAdded : [] };
    }

    getData(){
        var theobject = this
        fetch(this.props.theserver).then(function(data){
            return data.json();
        }).then(function(json){
            //var arr = json.map((obj) => (obj.name))
            //console.log(json[0].name)
            theobject.setState({ persons : json });
        })       
        console.log(this.state.persons)
    }

    //WARNING! To be deprecated in React v17. Use componentDidMount instead.
    componentWillMount() {
        this.getData()
    }

    componentDidMount() {
        this.timer = setInterval(this.timeout.bind(this),5000)
    }

    timeout(){
        this.getData()
    }

    add_event(){
        var e = document.getElementById("listOfPeople");
        console.log(e.value)
        if (e.value !== "") {
            this.state.personsAdded.push(e.value);
            this.setState({personsAdded: this.state.personsAdded});
            console.log(this.state.personsAdded)
        }
    }

    remove_event(){
        var e = document.getElementById("listOfPeople2");
        console.log(e.value)
        let index = this.state.personsAdded.indexOf(e.value)
        if (index !== -1) {
            this.state.personsAdded.splice(index, 1);
            this.setState({personsAdded: this.state.personsAdded});
          }
    }

    render() {
        var options = []
        var options2 = []
        var i = 0
        var lista2 = this.state.personsAdded
        //console.log("lista2:")
        //console.log(lista2)
        this.state.persons.forEach(function(element){
            var pessoa_c_idade = element.name + " " + element.age
            //console.log(element)
            //console.log(element.name)
            if (lista2.includes(pessoa_c_idade))
                options2.push(<option key={i}>{pessoa_c_idade}</option>)
            else
                options.push(<option key={i}>{pessoa_c_idade}</option>)
            i++;
        });
        var arrow_right = "-->"
        var arrow_left = "<--"
       // if (options2 == []) then
       //     options2.push(<option key={-1}>lista vazia</option>)

        return (
                <div>
                    <div style={{'display': 'inline-block'}}>
                        <select id="listOfPeople" name="listOfPeople" size = "5" style={{'minWidth': '100px'}}>
                            {options}
                        </select>
                    </div>
                    <div style={{'display': 'inline-block','verticalAlign':'top'}}>
                        <ul style={{'listStyleType': 'none',"padding" : 0,"marginLeft" : 1 + "rem","marginRight" : 1 + "rem"}}>
                            <li style={{'marginBottom': '0.5rem'}}>
                                <button id="bt_adicionar" onClick={this.add_event.bind(this)}>{arrow_right}</button>
                            </li>
                            <li>
                                <button id="bt_apagar" onClick={this.remove_event.bind(this)}>{arrow_left}</button>
                            </li>
                        </ul>
                    </div>
                    <div style={{'display': 'inline-block'}}>
                        <select id="listOfPeople2" name="listOfPeople2" size = "5" style={{'minWidth': '100px'}}>
                            {options2}
                        </select>
                    </div>
                </div>
        )
    }
}


ReactDOM.render(<ListPeople theserver="https://2n6zj9jkb9.execute-api.us-east-1.amazonaws.com/Tutorial/lerficheiro/"/>, reacthere);