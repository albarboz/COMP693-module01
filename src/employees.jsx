let alan = 'Alan Barboza'
let avery = 'Avery Poling'
let inca = 'Inca Barboza'

const element = (
    <ul style={{ 'color': 'blue', 'fontSize': '24px' }}>
        <li>{alan}</li>
        <li>{avery}</li>
        <li>{inca}</li>
    </ul>
)
ReactDOM.render(element, document.getElementById('content'))

