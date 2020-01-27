// We can grab only the properties we want through ie ({className, href, children}) instead of having (props) this means we dont need ot add props to begining of every item in the jsx below ie props.children etc. 
const NavItem = ({className, href, children}) => (
  <li className={`mh2-ns f6 f4-1 tc ${className}`}>
    <a className='white no-underline' href={href}>
      {children}
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

const App = () => (
  <div>
    <div className="min-vh-100 ph4 flex flex-column">
      <Nav />
      <Intro />
      {/* Navigation component  */}
      {/* Intro text component */}
    </div>
    <div className="flex flex-wrap container">
      {/* Attraction list component */}
    

    </div>
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
