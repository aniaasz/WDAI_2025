document.addEventListener("DOMContentLoaded", () => {
    const footerHTML = `
        <div class="footer-content">
          
          <div class="footer-section">
            <h3>Stay Connected</h3>
            <p>Thank you for supporting frog conservation! Every hop counts toward a greener, safer world for all amphibians. 🌱</p>
          </div>
          
          <div class="footer-section">
            <p>
            📍 Follow our journey: <a href="#">Instagram</a> | <a href="#">YouTube</a> | <a href="#">TikTok</a> | <a href="#">Facebook</a><br><br>
            💧 Together, we can make the world a little greener — one frog at a time. 🐸<br><br>
            © 2025 Frogs Forever. All rights reserved.<br>
            Anna Sznajder
            </p>
          </div>
          
        </div>

    `;

    document.getElementById("footer-placeholder").innerHTML = footerHTML;
});
