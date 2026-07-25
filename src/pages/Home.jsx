import Navbar from "../components/Navbar";

function Home() {
  return (
    <>
        <Navbar />
        <main className="home">
              <h1>Welcome to Manziz Cafe</h1>
              <p>Fresh coffee,delicious meals,and easy reservations!</p>
              <button>Reserve a Table</button>
        </main>
    </>
  );
}

export default Home;