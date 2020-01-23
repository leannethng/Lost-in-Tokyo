const Title = props => (
  <h1 className="tc f1 blue pa3">
    {props.title}
  </h1>
)

const Banner = props =>( 
  <h1 className="tc f1 yellow pa3">
    Hello {props.firstName} {props.surname} 
  </h1>
);


const App = () => (
  <div>
    <Title title="Welcome to this Site" />
    <Banner firstName="Leanne" surname="T" />
  </div>
)

ReactDOM.render(<App />, document.getElementById('root'));
