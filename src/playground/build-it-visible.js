// const onToggleClick = () => {
//     const btn = document.getElementById('btn');
//     const p = document.getElementById('p');
//     if (btn.innerHTML == "show details"){
//         btn.innerHTML = "Hide details"
//         p.innerHTML = "Hey. These are some details you can now see!"
//     } else {
//         btn.innerHTML = "show details"
//         p.innerHTML = " ";
//     }
// }
let Visibility = false;

const toggleVisibility = () => {
    Visibility = !Visibility;
    render();
}

const render = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggleVisibility}>
                {Visibility ? 'Hide details' : 'Show details'}
            </button>
            { Visibility && (
                <div>
                    <p>Hey. These are some details you can now see!</p>
                </div>
            )}
        </div>
    );

    ReactDOM.render(template, document.getElementById('app'));    
}

render();