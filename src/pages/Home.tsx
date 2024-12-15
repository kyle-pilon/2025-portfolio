import "../styles/Home.css"; // We'll style this later

const Home = () => {
  return (
    <div className="home">
      <header className="home-header">
        <h1>Hi, I'm Kyle Pilon</h1>
        <p>Aspiring Software Engineer | Product Manager</p>
        <a href="/projects" className="btn">View My Work</a>
      </header>
      <img
        src="your-photo-url.jpg" // Replace with a URL or import an image
        alt="Kyle Pilon"
        className="home-image"
      />
    </div>
  );
};

export default Home;