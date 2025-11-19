import './App.css';
import logo from './assets/ironhack-logo-xs.png';
import menu from './assets/menu-top-xs.png';
import illustration from './assets/landing-illustration.png';


function App() {
  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <img src={logo} alt="Ironhack Logo" className="logo" />
        <img src={menu} alt="Menu" className="menu" />
      </header>

      {/* Main landing section */}
      <main className="main-content">
        <div className="text-section">
          <h1>Say hello to ReactJS</h1>
          <p>
            You will learn how to use the most popular frontend library, and become a super Ninja developer.
          </p>
          <button>Awesome!</button>
        </div>
        <img src={illustration} alt="React Illustration" className="illustration" />
      </main>

      {/* Features section */}
      <section className="features">
        <div className="feature">
          <h3>Declarative</h3>
          <p>React makes it painless to create interactive UIs.</p>
        </div>
        <div className="feature">
          <h3>Components</h3>
          <p>Build encapsulated components that manage their state.</p>
        </div>
        <div className="feature">
          <h3>Single-Way</h3>
          <p>A set of immutable values are passed to the components.</p>
        </div>
        <div className="feature">
          <h3>JSX</h3>
          <p>Statically-typed, designed to run on modern browsers.</p>
        </div>
      </section>
    </div>
  );
}

export default App;
