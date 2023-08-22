const MenuContent = `
        
        <div class="col-12">
          <div class="container">

            <div class="topSearch">
              <div class="searchInput">
                <div class="content">
                  <button type="button" class="close"></button>
                  <input type="text" placeholder="Search" />
                  <button class="search">Send</button>
                </div>
              </div>
              <button class="searchBtn"></button>
            </div>
            <h1 class="logo">
              <a href="#" class="logo_L"><img src="./tts/images/logo.png" alt="" /></a>
              <a href="#" class="logo_S"><img src="./tts/images/logo.png" alt="" /></a>
            </h1>
              <button class="mobileBtn"></button>
            <div class="mainMenu">
              <nav>
                <ul>
                  <li><a href="#">Suppliers</a></li>
                  <li>
                    <a href="#">Exhibition</a>
                    <ul>
                      <li><a href="#">Suppliers</a></li>
                      <li><a href="#">Exhibition</a></li>
                      <li><a href="#">Contact</a></li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                    <ul>
                      <li><a href="#">Suppliers</a></li>
                      <li><a href="#">Exhibition</a></li>
                      <li>
                        <a href="#">Contact</a>
                        <ul>
                          <li><a href="#">Suppliers</a></li>
                          <li><a href="#">Exhibition</a></li>
                          <li><a href="#">Contact</a></li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </nav>

          <nav class="navigation have_language">
                    <div class="language">
                        <a href="#">Language</a>
                        <ul style="display: none;">
                            <li><a href="#">繁體中文</a></li>
                            <li><a href="#">简体中文</a></li>
                            <li><a href="#">ENGLISH</a></li>
                        </ul>
                    </div>
                    <ul>
                        <li><a href="#"><img src="./tts/images/nav_img.png" alt="">首頁</a></li>
                        <li><a href="#">網站導覽</a></li>
                        <li><a href="#">聯絡我們</a></li>
                    </ul>
                    <button class="btn btn_login">登入登入登入</button>
                </nav>
            </div>
          </div>
        </div>`;

document.write(MenuContent);
