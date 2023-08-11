import logo from './logo.svg?raw';

export const headerHtml = `
<!-- ======= Header ======= -->
<header id="header" class="fixed-top d-flex align-items-center" data-aos="fade-down" data-aos-duration="300ms">
    <div class="container-fluid container-xl d-flex align-items-center justify-content-lg-between">
               
        <h1 class="logo me-auto me-lg-0">
        <a href="#" class="d-flex align-items-center justify-content-center"> 
        <span>Aurélie Millet</span>  
        <div class="small-white-logo">${logo}</div></a>
        </h1>

        <nav id="navbar" class="navbar order-last order-lg-0">
            <ul>
                <li><a class="nav-link scrollto active" href="#hero">Accueil</a></li>
                <li><a class="nav-link scrollto" href="#presentation">Présentation</a></li>
                <li><a class="nav-link scrollto" href="#accompagnements">Mes accompagnements</a></li>
                <li><a class="nav-link scrollto" href="#pourquoi">Pour quoi, pour qui</a></li>
                <li><a class="nav-link scrollto" href="#seances">Les séances</a></li>
            </ul>
            <i class="bi bi-list mobile-nav-toggle"></i>
        </nav>
        <a href="#contact" class="book-a-table-btn scrollto d-none d-lg-flex">Contact</a>
    </div>
</header>
`
