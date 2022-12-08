import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <div className="App">
      <div className="parallax">
        <div className="heading">
          <div className="title">
            <h1>vibingcat217</h1>
            <h2>Portfolio</h2>
          </div>
        </div>
      </div>
      <div className="display">
        <img
          src={require("./assets/foxblob.gif")}
          alt="fox blob gif"
          width="320px"
        />
        <h1>My Work</h1>
        <h3>
          Click on the images to view or click on the button to read more!
        </h3>
        <div className="row">
          <Card
            title="Personas and Storyboarding"
            img={require("./assets/personas-screenshot.png")}
            caption="Investigating the CVS Self Checkout Machine user interface"
            link="https://vibingcat217.github.io/personas-and-storyboarding/"
            more="#personas"
          />
          <Card
            title="Responsive Redesign"
            img={require("./assets/redesign-screenshot.png")}
            caption="Redesigning the Johnny Burrito website utilizing low-fi and hi-fi prototypes"
            link="https://vibingcat217.github.io/responsive-redesign/"
            more="#redesign"
          />
        </div>
        <div className="row">
          <Card
            title="Iterative Design"
            img={require("./assets/iterativedesign-screenshot.png")}
            caption="Designing an interactive interface for Discz, an emerging startup from Y Combinator"
            link="https://jumpylemur431.github.io/iterative-design/"
            more="#iterative"
          />
          <Card
            title="Development"
            img={require("./assets/development-screenshot.png")}
            caption="Creating an application to allow Rainbow Six Siege players to plan their spending"
            link="https://vibingcat217.github.io/development/"
            more="#development"
          />
        </div>
      </div>
      <div id="personas" className="section">
        <h1>
          {/* <img
            src={require("./assets/foxblob.gif")}
            alt="fox blob gif"
            width="320px"
          /> */}
          Personas
        </h1>
        <h2>Context</h2>
        <p>
          The goal of this project was to observe and interview users
          interacting with an interface and use the data collected to create a
          persona. I chose the CVS Self-Checkout Machine as my interface and
          recorded my observations. I then interviewed three users and
          summarized their responses. Finally, I created two Personas and a
          Storyboard based on my findings.
        </p>
        <h2>Design</h2>
        <p>
          My website uses a menu bar on the right hand side to navigate the
          different sections of the page. For devices with a smaller screen
          size, this turns into a dropdown menu. Additionally, I made the
          margins shrink with window size to keep the text more readable.
        </p>
        <a href="https://vibingcat217.github.io/personas-and-storyboarding/">
          <button>View Website</button>
        </a>
      </div>
      <div id="redesign" className="section">
        <h1>
          {/* <img
            src={require("./assets/foxblob.gif")}
            alt="fox blob gif"
            width="320px"
          /> */}
          Redesign
        </h1>
        <h2>Context</h2>
        <p>
          I was tasked with redesigning a website, so I chose Johnny Burrito, a
          local restaurant in Charlotte. During my internship last summer, I
          frequently ordered lunch from this establishment. Unfortunately, I was
          disappointed to discover that their website looked as stale as the
          14,500 year old bread found in Jordan. Thus, I sought to redesign it
          in hopes of making it representative of their service.
        </p>
        <h2>Design</h2>
        <p>The design is very human.</p>
        <p>
          I designed the write-up to be similar to the Personas project. For the
          redesign of the website, I made a low-fi and hi-fi prototype during
          the designing process. I eliminated many of the usability and
          accessibility issues by adding alt text to images and aligning the
          content into two columns. I also expunged some of the unnecessary tabs
          and redundant links. Additionally, I created a style guide to keep my
          design consistent.
        </p>
        <a href="https://vibingcat217.github.io/responsive-redesign/">
          <button>View Website</button>
        </a>
      </div>
      <div id="iterative" className="section">
        <h1>
          {/* <img
            src={require("./assets/foxblob.gif")}
            alt="fox blob gif"
            width="320px"
          /> */}
          Iterative Design
        </h1>
        <h2>Context</h2>
        <p>
          I worked in a group to design an interactive interface for Discz, a
          music discovery social media platform. We used low-fi sketches to
          visualize our ideas and fully explore different app layouts. Then, we
          combined those ideas into one wireframe and contrived a high-fi
          mock-up in Figma. We then moved onto user-testing, where we received
          critiques on our design and assembled a list of potential changes
          based on the feedback.
        </p>
        <h2>Design</h2>
        <p>
          We designed the app keeping in mind the original goal of the startup,
          which was to find new music with the swipe of a finger and share it
          with others. We took inspriation from Tinder to build the swiping
          design and tried to have a similar user interface to other music apps.
        </p>
        <p>
          One significant change we made was the addition of multiple playlists
          and multiple discovery "radios." We made this change since users may
          be searching for different musical atmosphere based on their mood.
          Having multiple playlists would allow users to distinguish between
          these different "vibes" when discovering new music.
        </p>
        <a href="https://jumpylemur431.github.io/iterative-design/">
          <button>View Website</button>
        </a>
      </div>
      <div id="development" className="section">
        <h1>
          {/* <img
            src={require("./assets/foxblob.gif")}
            alt="fox blob gif"
            width="320px"
          /> */}
          Development
        </h1>
        <h2>Context</h2>
        <p>
          This interface allow Rainbow Six Siege players to calculate how much
          Renown (in-game currency) they need to purchase their desired
          operators. Players can optimize their Renown spending by carefully
          choosing which combination of characters they would like to purchase
          and working towards the total cost.
        </p>
        <h2>Design</h2>
        <p>
          The design mirrors a "shopping" system. Operators are listed in a grid
          with a "Add To Team" button that puts them in the "Cart." This button
          changes to "Remove from Team" if the operator has already been added.
          On the left hand side, there is a sidebar containing filtering and
          sorting options as well as a list of characters that have been added
          and their total cost. Each operator's price is also listed in the
          aggregation section.
        </p>
        <a href="https://vibingcat217.github.io/development/">
          <button>View Website</button>
        </a>
      </div>
    </div>
  );
}

export default App;
