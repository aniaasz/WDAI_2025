document.addEventListener("DOMContentLoaded", () => {

    const isInPagesFolder = window.location.pathname.includes("/pages/");
    // jesteś w pages => dodaj "../" do ścieżek
    const prefix = isInPagesFolder ? "../" : "";

    const navbarHTML = `
      <nav class="navbar">
          <section>
              <ul class="nav-links">
                  <li><a href="${prefix}index.html">Home</a></li>
                  <li><a href="${prefix}pages/galeria.html">Frogs</a></li>
                  <li><a href="${prefix}pages/kontakt.html">Contact Us</a></li>
                  <li><a href="${prefix}pages/donate.html">Donate</a></li>
              </ul>
          </section>
        
          <section>
            <div class="clock" id="clock"></div>
          </section>
        
      </nav>
      `;

    document.getElementById("navbar-placeholder").innerHTML = navbarHTML;


    // zegarek
    function updateClock() {
        const now = new Date();

        // formatowanie czasu i daty
        const options = {
            weekday: 'short',
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        };

        document.getElementById('clock').textContent = now.toLocaleString('pl-PL', options);
    }

    updateClock();
    setInterval(updateClock, 1000);
});
