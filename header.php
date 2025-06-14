 <?php

    $page = basename($_SERVER['PHP_SELF']);

?>
    <!-- header start-->
    <header class="header02">
      <div class="container-fluid">
        <div class="row align-items-center">
          <div class="col-lg-2 col-md-4 col-sm-5 col-8 logodesign">
              <a href="index.php" class="logo"><img src="images/logo-new1.png" alt="" width="120px"></a>
          </div>

          <div class="col-lg-10 col-md-8 col-sm-7 col-4 header-right no-padd-right">
            <nav class="nav-menu">
              <div class="mobile-menu">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <ul class="primary-menu">
               <!--  <li class="current-menu-item menu-item-has-children ">
                  <a href="index.php">Home</a>
                </li> -->
                <li><a href="index.php" class="<?php if($page == 'index.php'){ echo 'active';}?>">Home</a></li>
                <li class="menu-item-has-children">
                    <a href="#" class="<?php if($page == 'completed-project.php'||$page == 'ongoing-project.php'){ echo 'active';}?>">Project</a>
                    <ul class="sub-menu">
                      <li><a href="completed-project.php">Completed</a></li>
                      <li><a href="ongoing-project.php">Ongoing</a></li>
                      <!-- <li><a href="future-project.php">Future</a></li> -->
                    </ul>
                  </li>
                  <li class= "menu-item-has-children">
                    <a href="#" class="<?php if($page == 'companyprofile.php'||$page == 'vision&mission.php'||$page == 'promoters.php'||$page == 'subsidiaries.php'||$page == 'corporateinfo.php'){ echo 'active';}?>">About</a>
                    <ul class="sub-menu">
                      <li><a href="companyprofile.php">Company Profile</a></li>
                      <li><a href="vision-mission.php">Vision & Mission</a></li>
                      <li><a href="promoters.php">Promoters</a></li>
                      <li><a href="subsidiaries.php">Subsidiaries</a></li>
                      <li><a href="corporateinfo.php">Corporate Information</a></li>
                    </ul>
                  </li>
                <li><a href="clients.php" class="<?php if($page == 'clients.php'){ echo 'active';}?>">Clients</a></li>
                <li><a href="verticals.php" class="<?php if($page == 'verticals.php'){ echo 'active';}?>">Verticals</a></li>
                <li><a href="portfolio.php" class="<?php if($page == 'portfolio.php'){ echo 'active';}?>">Portfolio</a></li>
                <li><a href="contact.php" class="<?php if($page == 'contact.php'){ echo 'active';}?>">Contact</a></li>
                <li class="hide-in-desktop"><a href="tel:+919967092929">Call</a></li>
              </ul>              
            </nav>

            <div class="header-elems">
              <div class="quoteBtn show-in-mobile">
                  <a href="tel:02225780846" class="btn">Call</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <!-- header end-->