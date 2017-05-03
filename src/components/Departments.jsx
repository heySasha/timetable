import React from 'react';
import axios from 'axios';

class Departments extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            departments: [],
            link: 1
        };


    }

    componentDidMount() {
        axios.get('/api/db')
            .then(response => response.data)
            .then(departments => this.setState({ departments }))
            .catch(Departments.handleError);

    }



    static handleError(error) {
        console.error(error);
    }

    render() {

        return (
            <section>
                <h1>Departments</h1>
                <select id="dep"
                        onChange={()=>{
                            this.state.link = +document.getElementById("dep").value;

                            //console.log(this.state.link);
                            console.log(this.state.departments.filter(item => item.link === this.state.link).map((item) => <li key={item.id}>{item.value}</li>));

                            let t =  this.state.departments.filter(item => item.link === this.state.link);

                            let html = t.map((item)=> `<li>${item.value}<li>`);

                            console.log(html.join());

                            document.getElementById('ulDep').innerHTML = html.join();
                        }}
                >
                    {this.state.departments.filter(item => !item.link).map((item) => <option key={item.id} value={item.id}>{item.value}</option>)}
                </select>
                <ul id="ulDep">
                    {this.state.departments.filter(item => item.link === 1).map((item) => <li key={item.id}>{item.value}</li>)}
                </ul>
            </section>
        );
    }
}

export default Departments;