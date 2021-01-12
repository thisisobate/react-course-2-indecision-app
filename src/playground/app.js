// const obj = {
//     name: 'vikke',
//     getName() {
//         return this.name;
//     }
// };

// const getName = obj.getName.bind(obj);
// console.log(getName());

class IndecisionApp extends React.Component {
    constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            options: []
        };
    }
    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);

            if (options) {
                this.setState(() => ({ options }));
            }
        } catch (e) {
            //do nothing
        }
        
    }    
    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('optionss', json);
        }
    }
    componentWillUnmount() {
        console.log('component will unmount');
    }
    handleDeleteOptions(){
        this.setState(() => ({ options: [] }));
    }
    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }));
    }
    handlePick(){
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum]
        alert(option);
    }
    handleAddOption(option) {
        if (!option) {
            return 'Enter valid value to add item';
        } else if (this.state.options.indexOf(option) > -1){
            return 'This option already exists';  
        }
        this.setState((prevState) => ({
            options: prevState.options.concat([option])
        }));
    }
    render (){
        return (
            <div>
                <Header/>
                <Action 
                hasOption={this.state.options.length > 0}
                handlePick={this.handlePick} 
                />
                <Options 
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption
                    handleAddOption={this.handleAddOption}
                 />
            </div>
        );
    }
}

// IndecisionApp.defaultProps = {
//     options: []
// };

// class Header extends React.Component {
//     render (){
//         console.log(this.props);
//         return <p>{this.props.title}</p>
//     }
// }

const Header = (props) => {
    return (
        <div>
         <h1>{props.title}</h1>
        </div>
    );
};

Header.defaultProps = {
    title: 'Indecision'
}

const Action = (props) => {
    return (
        <div>
            <button 
            onClick={props.handlePick}
            disabled={!props.hasOption}
            >What should I do?</button>
        </div>
    );
};

// class Action extends React.Component {
//     render (){
//         return (
//             <div>
//                 <button 
//                 onClick={this.props.handlePick}
//                 disabled={!this.props.hasOption}
//                 >What should I do?</button>
//             </div>
//         );
//     }
// }

const Options = (props) =>  {
    // constructor (props) {
    //     super(props);
    //     this.handleRemoveAll = this.handleRemoveAll.bind(this);
    // }
    // handleRemoveAll(){
    //     alert('remove all');
    // }
        return (
            <div>
                <button onClick={props.handleDeleteOptions}>Remove All</button>
                {props.options.length === 0 && <p>Please add an option to get started</p>}
                {props.options.map((option) => (
                    <Option 
                    key={option} 
                    optionText={option}
                    handleDeleteOption={props.handleDeleteOption}
                    />
                    ))}
            </div>
        );
}

const Option = (props) => {
        return (
            <div>
                {props.optionText}
                <button 
                onClick={(e) => (
                    props.handleDeleteOption(props.optionText)
                )}>
                remove
                </button>
            </div>
        );
}

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        };
    }
    handleAddOption(e){
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);
        // option && alert('option received successfully!');
        // e.target.elements.option.value = '';
        
        this.setState(() => ({ error }));
        
        if (!error) {
            e.target.elements.option.value = '';
        }
    }
    render (){
        return (
            <div>
            {this.state.error && <p>{this.state.error}</p>}
            <form onSubmit={this.handleAddOption}>
                <input type="text" name="option" />
                <button>Add option</button>
            </form>
            </div>
        );
    }
}

// const jsx = (
//     <div>
//         <h1>Title</h1>
//         <Header />
        
//     </div>
// )

// const User = (props) => {
//     return (
//         <div>
//             <p>Name: {props.name}</p>
//             <p>Age: {props.age} </p>
//         </div>
//     )
// }

ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));