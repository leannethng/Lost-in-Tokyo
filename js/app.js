// We can grab only the properties we want through ie ({className, href, children}) instead of having (props) this means we dont need to add props to begining of every item in the jsx below ie props.children etc. 
const NavItem = ({className, href, children, logo}) => (
  <li className={`mh2-ns f6 f4-1 tc ${className}`}>
    <a className='white no-underline' href={href}>
    {/* If statement */}
    {logo ? <img src="./images/logo.svg" className="db center logo" /> : children}
    </a>
  </li>
);


const Nav = () =>(
  <nav className="pt3 pt4-ns mb4 mb0-ns">
    <ul className="list flex flex-wrap flex-nowrap-ns justify-between items-center pa0 ma0">
      {menu.map(item => (
        // Grabbing all the item variable and all the properties inside it and spreading it out so we don't have to repeat. children = {items.children} etc - ({...item} is a spread operator)
        <NavItem {...item}/>
      ))}
    </ul>
  </nav>
);


const Highlight = ({color, children}) => (
  <span className={`relative highlight highlight-${color}`}>
    <span className="relative z-2">{children}</span>
  </span>
);

const Intro = () => (
  <div className="m-auto-ns f4 f3-m f2-l tc w-80-l normal">
    {/* a div with a margin-bottom (mb3 and mb4 on non-small screens) */}
    <div className="mb3 mb4-ns">
    <Highlight color="aqua">Lost in Tokyo</Highlight> is a directory of fun places to see, play and <Highlight color="yellow">explore</Highlight> in <Highlight color="blue">Tokyo</Highlight>, Japan.
    </div>
    <div>
      From <Highlight color="blue">museums</Highlight> and <Highlight color="blue">galleries</Highlight>, to <Highlight color="pink">robot restaurants</Highlight> and <Highlight color="pink">kitten cafes</Highlight>, Tokyo is the gift that keeps on giving. <Highlight color="yellow">Dattebayo!</Highlight>
    </div>
  </div>
);

// We can also create components as classes or functional components, these open up more advanced functionality and features such as the component lifecycle as well as react's in-built state
class Attraction extends React.Component {
  // JS thing not React thing
  constructor(props){
    super(props)
    this.state = {
      fullname: ''
    }
  }

  render(){
   
    const {link, image, className, title, description} = this.props
    // the code above is shorthand for
      // const title = this.props.title 
      // const description = this.props.description etc, etc
    // This is called destructuring!
      // const {description} = this.props
  
    return (
      <div className= {`ph4 ph5-ns ph0-l mb4 mb5-ns w-100 overflow-hidden pointer attraction ${
          className
          }`}
          // Testing events in React
          // onMouseOver={() => alert('clicked')}
      >
        {/* Quick example of using state */}
        <div className="relative">
          <input 
            className="relative z-3"
            onChange={event => this.setState({
            fullname: event.target.value
          })
          } 
          
        />
         <h1>{this.state.fullname}</h1>


        <div className="absolute w-100 h-100 flex items-center pa3 pa4-ns bg-aqua overlay">
          <div>
            <h1 className="f4 f3-ns mt0 mb2 regular black normal lh-title">{title}</h1>
            <p className="lh-title lh-copy-ns mv0 black f6 measure-l">{description}</p>
          </div>
        </div>
        <a href={link}>
          <img src={`./images/${image}`} className="db" />
        </a>
      </div>
    </div>
    )
  }
}


const Attractions =  () => (
  attractions.map(items => (
    <Attraction {... items}/>   
  )));

const App = () => (
  <div>
    <div className="min-vh-100 ph4 flex flex-column">
       {/* Navigation component  */}
      <Nav />
      {/* Intro text component */}
      <Intro />
    </div>
    <div className="flex flex-wrap container">
      {/* Attraction list component */}
      <Attractions />
    </div>
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
