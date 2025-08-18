<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>OneMAI -Community Financing</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="/style.css" />
  <script src="https://cdn.tailwindcss.com"></script>
  <script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            brand: {
              DEFAULT: "#2585CD",
              dark: "#1f6ca3", // Darker shade for hover states
              light: "#3497df", // Lighter shade for hover states
              50: "#f0f7fc", // Very light shade
              100: "#e1eef9",
              200: "#b3d7f2",
              300: "#85c0eb",
              400: "#57a9e4",
              500: "#2585CD", //OneMAIn brand color
              600: "#1f6ca3",
              700: "#195380",
              800: "#133a5c",
              900: "#0d2138",
            },
          },
        },
      },
    };
  </script>
</head>

<body>
  <!-- Back to Top Button -->
  <button onclick="window.scrollTo({top: 0})"
    class="back-to-top fixed bottom-8 right-8 bg-brand-500 text-white p-3 rounded-full shadow-lg hover:bg-brand-600 focus:outline-none z-50"
    id="backToTop" aria-label="Back to top">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
    </svg>
  </button>

  <script>
    // Back to Top Button Functionality
    const backToTopButton = document.getElementById("backToTop");

    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        // Show button after scrolling 300px
        backToTopButton.classList.add("show");
      } else {
        backToTopButton.classList.remove("show");
      }
    });
  </script>

  <!-- Navigation -->
  <nav class="shadow-lg fixed w-full z-50 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-20">
        <!-- Logo -->
        <div class="flex items-center">
          <a href="/" class="text-2xl font-bold text-brand-600">
            <img src="./images/MAI.png" alt="MAI" class="w-10" />
          </a>
        </div>

        <!-- Primary Nav (Desktop) -->
        <div class="hidden md:flex md:items-center md:space-x-4">
          <a href="/"
            class="inline-flex items-center px-1 pt-1 text-lg font-medium text-gray-700 hover:text-brand-600 border-b-2 border-transparent hover:border-brand-600">
            Home
          </a>
          <a href="/features"
            class="inline-flex items-center px-1 pt-1 text-lg font-medium text-gray-700 hover:text-brand-600 border-b-2 border-transparent hover:border-brand-600">
            Features
          </a>
          <a href="/about"
            class="inline-flex items-center px-1 pt-1 text-lg font-medium text-gray-700 hover:text-brand-600 border-b-2 border-transparent hover:border-brand-600">
            About us</a>
          <a href="/contact"
            class="inline-flex items-center px-1 pt-1 text-lg font-medium text-gray-700 hover:text-brand-600 border-b-2 border-transparent hover:border-brand-600">
            Contact
          </a>
        </div>

        <!-- Auth Buttons (Desktop) -->
        <div class="hidden md:flex md:items-center space-x-4">
          <a  href="#"
            class="px-4 py-2 text-lg font-medium text-brand-600 hover:text-brand-700 transition duration-300 signupEarlyAccessBtn">
            Sign In
          </a>
          <a  href="#"
            class="px-6 py-2 bg-brand-600 text-white rounded-lg font-semibold hover:bg-brand-700 transition duration-300 signupEarlyAccessBtn">
            Register
          </a>
        </div>

        <!-- Hamburger Menu (Mobile) -->
        <div class="flex items-center md:hidden">
          <button id="menu-btn" class="text-gray-700 focus:outline-none">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div id="mobile-menu"
      class="hidden md:hidden bg-white shadow-lg absolute top-20 left-0 w-full border-t border-gray-200 z-40">
      <a href="/"
        class="block px-4 py-2 text-lg text-gray-700 hover:bg-gray-100 hover:text-brand-600">Home</a>
      <a href="/features"
        class="block px-4 py-2 text-lg text-gray-700 hover:bg-gray-100 hover:text-brand-600">Features</a>
      <a href="/about" class="block px-4 py-2 text-lg text-gray-700 hover:bg-gray-100 hover:text-brand-600">About
        us</a>
      <a href="/contact"
        class="block px-4 py-2 text-lg text-gray-700 hover:bg-gray-100 hover:text-brand-600">Contact</a>
      <div class="border-t border-gray-200 px-4 py-3">
        <a  href="#"
          class="block w-full text-center px-4 py-2 text-lg text-brand-600 hover:bg-gray-100 signupEarlyAccessBtn">Sign In</a>
        <a href="#"
          class="block w-full text-center mt-2 px-4 py-2 bg-brand-600 text-white rounded-lg font-semibold hover:bg-brand-700 signupEarlyAccessBtn">
          Register
        </a>
      </div>
    </div>
  </nav>

  @yield('page')

  <!-- Email Signup Popup -->
  <div id="emailSignupPopup" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center hidden">
    <div class="bg-white rounded-lg p-8 max-w-md w-full text-left">
      <h3 class="text-xl font-bold text-gray-900">Sign Up for Early Access</h3>
      <p class="mt-2 text-sm text-gray-600">
        We will only use your data to inform you about OneMAI launch, updates and early perks.*
      </p>

      <form id="emailSignupForm" class="space-y-4 mt-6">
        <!-- Name -->
        <div>
          <label for="nameInput" class="block text-sm font-medium text-gray-700">
            Name <span class="text-gray-500">(first name only is enough)</span>
          </label>
          <input type="text" id="nameInput" name="name" placeholder="First name" autocomplete="given-name"
            class="mt-1 w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-500 focus:border-transparent" />
        </div>

        <!-- Email (required) -->
        <div>
          <label for="emailInput" class="block text-sm font-medium text-gray-700">
            Email <span class="text-red-600">(required)</span>
          </label>
          <input type="email" id="emailInput" name="email" placeholder="Enter your email" autocomplete="email"
            class="mt-1 w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-500 focus:border-transparent"
            required />
        </div>

        <!-- Country (Portugal pre-selected) -->
        <div>
          <label for="countrySelect" class="block text-sm font-medium text-gray-700">Country</label>
          <select id="countrySelect" name="country"
            class="mt-1 w-full px-4 py-3 rounded-lg border border-gray-300 bg-white focus:ring-2 focus:ring-brand-500 focus:border-transparent">
            <!-- EU countries -->
            <option value="Austria">Austria</option>
            <option value="Belgium">Belgium</option>
            <option value="Bulgaria">Bulgaria</option>
            <option value="Croatia">Croatia</option>
            <option value="Cyprus">Cyprus</option>
            <option value="Czechia">Czechia (Czech Republic)</option>
            <option value="Denmark">Denmark</option>
            <option value="Estonia">Estonia</option>
            <option value="Finland">Finland</option>
            <option value="France">France</option>
            <option value="Germany">Germany</option>
            <option value="Greece">Greece</option>
            <option value="Hungary">Hungary</option>
            <option value="Ireland">Ireland</option>
            <option value="Italy">Italy</option>
            <option value="Latvia">Latvia</option>
            <option value="Lithuania">Lithuania</option>
            <option value="Luxembourg">Luxembourg</option>
            <option value="Malta">Malta</option>
            <option value="Netherlands">Netherlands</option>
            <option value="Poland">Poland</option>
            <option value="Portugal" selected>Portugal</option>
            <option value="Romania">Romania</option>
            <option value="Slovakia">Slovakia</option>
            <option value="Slovenia">Slovenia</option>
            <option value="Spain">Spain</option>
            <option value="Sweden">Sweden</option>
            <option value="__other">Other (not listed)</option>
          </select>

          <!-- Shown only if "Other" is selected -->
          <input type="text" id="countryOtherInput" name="country_other" placeholder="Type your country"
            autocomplete="country-name"
            class="mt-3 w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-500 focus:border-transparent hidden" />
          <p class="mt-1 text-xs text-gray-500">
            If your country isn’t listed, choose “Other (not listed)” and type it.
          </p>
        </div>

        <!-- Optional phone -->
        <div>
          <label for="phoneInput" class="block text-sm font-medium text-gray-700">
            Phone number <span class="text-gray-500">(Only if you’d like us to reach you by phone)</span>
          </label>
          <input type="tel" id="phoneInput" name="phone" placeholder="+351 ..." autocomplete="tel"
            class="mt-1 w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-500 focus:border-transparent" />
        </div>

        <!-- Consent checkbox (required) -->
        <label class="flex items-start space-x-3 text-sm text-gray-700">
          <input type="checkbox" id="consentEmail" name="consent_email" class="mt-1 h-4 w-4" required />
          <span>
            I agree to receive emails about OneMAI early access and perks.
            See <a href="privacy.html" class="text-blue-600 underline">Privacy Policy</a>.
          </span>
        </label>

        <!-- Submit -->
        <button type="submit"
          class="w-full bg-brand-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-brand-700 transition duration-300">
          Notify Me
        </button>

        <p id="response-message" class="mt-2 text-center"></p>
      </form>

      <button id="closeEmailPopupBtn"
        class="mt-4 w-full bg-gray-300 text-gray-700 px-6 py-2 rounded-lg font-semibold hover:bg-gray-400 transition duration-300">
        Close
      </button>
    </div>
  </div>

  <!-- Footer -->
  <footer class="bg-gray-900 text-gray-300">
    <!--OneMAIn Footer -->
    <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-12">
        <!-- Company Info -->
        <div class="col-span-1 md:col-span-2">
          <h3 class="text-2xl font-bold text-white mb-4">OneMAI</h3>
          <p class="text-gray-400 mb-4 max-w-md">
            Empowering communities through zero-interest and secured
            democratic financial solutions.
          </p>
          <!-- Social Links -->
          <div class="flex space-x-4">
            <a href="https://www.linkedin.com/company/joinonemai/"
              class="text-gray-400 hover:text-white transition-colors duration-300">
              <span class="sr-only">LinkedIn</span>
              <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a href="https://www.instagram.com/joinonemai"
              class="text-gray-400 hover:text-white transition-colors duration-300">
              <span class="sr-only">Instagram</span>
              <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a href="https://web.facebook.com/joinonemai?_rdc=1&_rdr#"
              class="text-gray-400 hover:text-white transition-colors duration-300">
              <span class="sr-only">Facebook</span>
              <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385h-3.047v-3.47h3.047v-2.642c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.514c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385c5.737-.9 10.125-5.864 10.125-11.854z" />
              </svg>
            </a>
            <a href="https://t.me/joinonemai" class="text-gray-400 hover:text-white transition-colors duration-300">
              <span class="sr-only">Telegram</span>
              <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.14-.26.26-.428.26l.204-3.05 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.87 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.57-4.458c.538-.196 1.006.128.832.941z" />
              </svg>
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="text-lg font-semibold text-white mb-4">Quick Links</h4>
          <ul class="space-y-3">
            <li>
              <a href="/about" class="text-gray-400 hover:text-white transition-colors duration-300">About</a>
            </li>
            <li>
              <a href="/how-it-works" class="text-gray-400 hover:text-white transition-colors duration-300">How It
                Works</a>
            </li>
            <li>
              <a href="/benefits" class="text-gray-400 hover:text-white transition-colors duration-300">Benefits</a>
            </li>
            <li>
              <a href="/faq" class="text-gray-400 hover:text-white transition-colors duration-300">FAQ</a>
            </li>
          </ul>
        </div>

        <!-- Legal -->
        <div>
          <h4 class="text-lg font-semibold text-white mb-4">Legal</h4>
          <ul class="space-y-3">
            <li>
              <a href="/privacy" class="text-gray-400 hover:text-white transition-colors duration-300">Privacy
                Policy</a>
            </li>
            <li>
              <a href="/terms" class="text-gray-400 hover:text-white transition-colors duration-300">Terms of
                Use</a>
            </li>
            <li>
              <a href="/cookies" class="text-gray-400 hover:text-white transition-colors duration-300">Cookie Policy</a>
            </li>
            <li>
              <a href="https://one-mai-affiliate.vercel.app/support"
                class="text-gray-400 hover:text-white transition-colors duration-300">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Newsletter -->
      <div class="mt-12 border-t border-gray-800 pt-8">
        <h4 class="text-lg font-semibold text-white mb-4">
          Subscribe to Our Newsletter
        </h4>
        <p class="text-gray-400 mb-4">
          Stay updated with the latest features and releases.
        </p>
        <form class="flex flex-col sm:flex-row gap-4 max-w-2xl">
          <input type="email" placeholder="Enter your email"
            class="flex-1 px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:ring-2 focus:ring-brand-500 focus:border-transparent" />
          <button type="submit"
            class="px-6 py-3 bg-brand-600 text-white rounded-lg font-semibold hover:bg-brand-700 transition duration-300">
            Subscribe
          </button>
        </form>
      </div>
    </div>

    <!-- Bottom Footer -->
    <div class="bg-gray-800">
      <div class="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <p class="text-gray-400 text-sm">
          ©
          <script>
            document.write(new Date().getFullYear());
          </script>
          OneMAI. All rights reserved.
        </p>
        <span class="text-gray-400 text-sm">Developed by:
          <a href="https://codedr.co" class="text-gray-400 hover:text-white transition-colors duration-300">OneMAi Engineers</a></span>
      </div>
    </div>
  </footer>

  <script>
    document.addEventListener('DOMContentLoaded', () => {
      'use strict';

      // ===== Helpers =====
      const byId = (id) => document.getElementById(id);
      const openModal = (el) => el && el.classList.remove('hidden');
      const closeModal = (el) => el && el.classList.add('hidden');
      const setMsg = (el, text, ok = true) => {
        if (!el) return;
        el.textContent = text;
        el.className = 'mt-2 text-center ' + (ok ? 'text-green-600' : 'text-red-600');
      };

      // ===== Mobile menu =====
      const menuBtn = byId('menu-btn');
      const mobileMenu = byId('mobile-menu');
      menuBtn?.addEventListener('click', () => mobileMenu?.classList.toggle('hidden'));

      // ===== Early Access popup =====
      
      const signupEarlyAccessBtn = document.getElementsByClassName('signupEarlyAccessBtn');
      const emailSignupPopup = byId('emailSignupPopup');
      const closeEmailPopupBtn = byId('closeEmailPopupBtn');
      for (let el of signupEarlyAccessBtn) {
        el.addEventListener('click', () => {
           openModal(emailSignupPopup);
          })
      }
      
      closeEmailPopupBtn?.addEventListener('click', () => closeModal(emailSignupPopup));
      window.addEventListener('click', (e) => {
        if (e.target === emailSignupPopup) closeModal(emailSignupPopup);
        if (e.target === socialMediaPopup) closeModal(socialMediaPopup);
      });
      window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          closeModal(emailSignupPopup);
          closeModal(socialMediaPopup);
        }
      });

      // ===== Country "Other" toggle =====
      const countrySelect = byId('countrySelect');
      const countryOtherInput = byId('countryOtherInput');

      function syncCountryOther() {
        if (!countrySelect || !countryOtherInput) return;
        const isOther = countrySelect.value === '__other';
        countryOtherInput.classList.toggle('hidden', !isOther);
        countryOtherInput.required = isOther;
        if (!isOther) countryOtherInput.value = '';
      }
      countrySelect?.addEventListener('change', syncCountryOther);
      syncCountryOther(); // init on load

      // ===== Early Access form submit (Apps Script) =====
      const emailSignupForm = byId('emailSignupForm');
      const responseMessage = byId('response-message');

      // Apps Script endpoint (unchanged)
      const scriptURL = 'https://script.google.com/macros/s/AKfycbyzjYnO2dy0slHRNpXQbj097OlsTqjhoJtVCPxEYCPcXUSHnqU85fFVC6zr_eKPfTff/exec';

      emailSignupForm?.addEventListener('submit', async (e) => {
        e.preventDefault();

        const name = (byId('nameInput')?.value || '').trim();
        const email = (byId('emailInput')?.value || '').trim();
        const phone = (byId('phoneInput')?.value || '').trim();
        const selected = countrySelect?.value || '';
        const finalCountry = selected === '__other' ? (countryOtherInput?.value || '').trim() : selected;
        const consent = byId('consentEmail')?.checked ? 'yes' : 'no';

        // Basic validation
        if (!email) {
          setMsg(responseMessage, 'Please enter a valid email.', false);
          return;
        }
        if (selected === '__other' && !finalCountry) {
          setMsg(responseMessage, 'Please type your country.', false);
          return;
        }
        if (consent !== 'yes') {
          setMsg(responseMessage, 'Please agree to receive emails to continue.', false);
          return;
        }

        // Build payload
        const formData = new FormData();
        formData.set('name', name);
        formData.set('email', email);
        formData.set('country', finalCountry);
        if (phone) formData.set('phone', phone);
        formData.set('consent_email', consent);

        // Pass the sheet ID so the Apps Script knows where to log (if your script supports this)
        formData.set('sheetId', '1t6Aux71X9CNrDhL_jf0Go9eTSCbTsS7BY3AGv5IzC4');

        console.log('[early-access] payload:', { name, email, country: finalCountry, phone, consent });

        try {
          const res = await fetch(scriptURL, { method: 'POST', body: formData });
          if (res.ok) {
            setMsg(responseMessage, 'Thanks! You’ll be notified at launch.', true);
            emailSignupForm.reset();
            // reset country to Portugal if present
            if (countrySelect) countrySelect.value = 'Portugal';
            syncCountryOther();
            setTimeout(() => closeModal(emailSignupPopup), 400);
          } else {
            throw new Error('Server responded with an error');
          }
        } catch (err) {
          console.error('[early-access] submit error:', err);
          setMsg(responseMessage, 'Something went wrong. Please try again.', false);
        }
      });

      // ===== Social popup =====
      const joinCommunityBtn = byId('joinCommunityBtn');
      const socialMediaPopup = byId('socialMediaPopup');
      const closePopupBtn = byId('closePopupBtn');

      joinCommunityBtn?.addEventListener('click', () => openModal(socialMediaPopup));
      closePopupBtn?.addEventListener('click', () => closeModal(socialMediaPopup));
    });
  </script>
</body>

</html>