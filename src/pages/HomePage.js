import React from 'react';

const HomePage = () => (
    <div>
      <header>
        <h1>Welcome to My App!</h1>
      </header>
      <main>
        <section>
          <h2>About Us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            accumsan, dolor sit amet condimentum aliquam, erat sem hendrerit
            justo, vel facilisis nisl turpis ac libero.
          </p>
        </section>
        <section>
          <h2>Our Services</h2>
          <ul>
            <li>Service 1</li>
            <li>Service 2</li>
            <li>Service 3</li>
          </ul>
        </section>
        <section>
          <h2>Contact Us</h2>
          <button>Contact</button>
        </section>
      </main>
      <footer>
        <p>&copy; 2023 My App. All rights reserved.</p>
      </footer>
    </div>
);

export default HomePage;
