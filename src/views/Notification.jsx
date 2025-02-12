import React from "react";
import NavBar from "../components/Nav-bar";

function Notifications() {
  return (
    <>
      <NavBar />
      <main>
        <div>
          <section>
            <div>No leídas</div>
            <div>Leídas</div>
          </section>
          <section></section>
        </div>
      </main>
    </>
  );
}

export default Notifications;
