let alan = 'Alan Barboza';
let avery = 'Avery Poling';
let inca = 'Inca Barboza';
const element = /*#__PURE__*/React.createElement("ul", {
  style: {
    'color': 'blue',
    'fontSize': '24px'
  }
}, /*#__PURE__*/React.createElement("li", null, alan), /*#__PURE__*/React.createElement("li", null, avery), /*#__PURE__*/React.createElement("li", null, inca));
ReactDOM.render(element, document.getElementById('content'));