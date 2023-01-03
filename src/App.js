import logo from "../src/logo.png";
import "../src/style.css";
function App() {
  return (
    <body>
      <div className="container">
        <div className="div-1">
          <img src={logo} alt="logo" />
          <span>Logo</span>
        </div>
        <input />
        <div className="div-2">
          <label>SearchButton</label>
          <button>Google Search</button>
          <button>i'm Feeling Lucky</button>
          <label>LuckyButton</label>
        </div>
        <SmallComp title={"Francais"} />
      </div>
    </body>
  );
}

function SmallComp({ title }) {
  return (
    <div className="div-3">
      <h3>Google.ca offered in: {title}</h3>
      <span>LanguageNote</span>
    </div>
  );
}

export default App;
