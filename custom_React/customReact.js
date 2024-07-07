function customRender(reactElement, mainContainer){
    /* Problem here is if there are different number of elements than mentioned 

    const domElement = document.createElement('reactElement.type')
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href',reactElement.props.href)
    domElement.setAttribute('target',reactElement.props.target)
    mainContainer.append(domElement)

    */

    // writing modular code
    const domElement = document.createElement('reactElement.type')
    domElement.innerHTML = reactElement.children
    for (const key in reactElement.props) {
        if(key === 'children')
            continue;

        domElement.setAttribute(key, reactElement.props[key])
    }
    mainContainer.append(domElement)
}

const reactElement = {
    type : 'a',
    props: {
        href : 'https://google.com',
        target : '_blank'
    },
    children : "click me to visit google"
}

const mainContainer = document.getElementById('root')

customRender(reactElement, mainContainer)