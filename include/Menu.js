const MenuContent = `
        <div class="container">
          <h1 class="logo">
            <a href="#"><img src="./images/logo.png" alt="" /></a>
          </h1>
          <div class="mainMenu">
            <button class="mobileBtn"></button>
            <nav>
              <ul>
                <li><a href="#">Suppliers</a></li>
                <li><a href="#">Exhibition</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
              <div class="officeLink"><a href="#">TAITRA OVERSEA OFFICE</a></div>
            </nav>
          </div>
          <div class="topSearch">
            <div class="searchInput">
              <div class="content">
                <button type="button" class="close"></button>
                <input type="text" placeholder="Search" />
                <button class="search">Send</button>
              </div>
            </div>
            <button class="searchBtn">
              <svg><use xlink:href="#search" /></svg>
            </button>
          </div>
        </div>`;

document.write(MenuContent);
