function customREnder(Container,reactELement){
//   const DomElement=document.createElement(reactELement.type)
//        DomElement.innerHTML=reactELement.children;
//        DomElement.setAttribute('href',reactELement.props.href)
//        DomElement.setAttribute('target',reactELement.props.children)
    
//        Container.appendChild(DomElement);
 
const DomElement=document.createElement(reactELement.type);
DomElement.innerHTML=reactELement.children;

for (const Prop in reactELement.props){
    if(Prop === 'children')continue
      DomElement.setAttribute(Prop,reactELement.props[Prop])
}
      Container.appendChild(DomElement);
    
}
const Container=document.querySelector('#root')

const reactELement={
    type:'a',
    props:{
        href:'http://google.com',
        target:'_blank'
    },
    children:"Click me to visit Google"
}

customREnder(Container,reactELement)