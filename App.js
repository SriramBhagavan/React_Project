  //  const heading=React.createElement('h1',{id:'heading'},'hi heading');
//  const root=ReactDOM.createRoot(document.getElementById('root'));
//   root.render(heading);
//  console.log(heading);
 
const parent=React.createElement(
    'div', {id:'parent'},
    [React.createElement('div',{id:'child1'},
    [React.createElement('h1', {}, 'hiiii'),
    React.createElement('h1', {}, 'byee')
    ]),
React.createElement('div',{id:'child2'},
    [React.createElement('h1', {}, 'hiiii'),
    React.createElement('h1', {}, 'byee')
    ])]
    
);
console.log(parent);
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);