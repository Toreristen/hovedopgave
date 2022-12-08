<script setup>

</script>

<template>
 <main>
    <footer class="footer">
        <section class="footer-top">
            <div class="footer-top-section">
                <h2 class="footer-top-heading">Support</h2>
                <p class="footer-top-txt">Står du og har brug for hjælp med et af vores programmer? 
                Så kan du få hjælp og vejledning på supportsiden ved at klikke her</p>
                
                <a class="footer-btn" href="#">
                    <div class="btn-txt">Gå til support</div>
                    <img class="btn-arrow" src="../../assets/img/right_arrow_vector.svg" alt="white arrow on hover">
                </a>  
            </div>

            <div class="footer-top-section">
                <h2 class="footer-top-heading">Find os</h2>
                <p class="footer-top-txt">Du har altid mulighed for at kontakte os. Om det er stort eller småt, så står vi altid til rådighed</p>
                
            </div>

            <div class="footer-top-section">
                <h2 class="footer-top-heading">Kontakt os</h2>
                <p class="footer-top-txt">Du har altid mulighed for at kontakte os. Om det er stort eller småt, så står vi altid til rådighed </p>

            </div>

        </section>
        <section class="footer-bottom">
            <div class="footer-bottom-left">
                <p class="footer-bottom-txt">LIFA A/S</p>
                <p class="footer-bottom-txt">Lucernemarken 1 5260 Odense S</p>
                <p class="footer-bottom-txt">CVR nr. 1234567890</p>
                <p class="footer-bottom-txt">Tlf.: 12 34 12 34</p>
                <p class="footer-bottom-txt">geodata@lifa.dk</p>
            </div>

            <div class="footer-bottom-right">
                <ul class="footer-nav">
                    <a href="#" class="footer-nav-items">dokumentation</a>
                    <a href="#" class="footer-nav-items">kontakt</a>
                    <a href="#" class="footer-nav-items">support</a>
                    <a href="#" class="footer-nav-items">datamodel</a>
                </ul>
                
                <div class="footer-some">
                    <a href="#">
                        <font-awesome-icon class="footer-some-tag" icon="fa-brands fa-youtube" />
                    </a>
                    <a href="#">
                        <font-awesome-icon class="footer-some-tag" icon="fa-brands fa-linkedin" />
                    </a>
                    <a href="#">
                        <font-awesome-icon class="footer-some-tag" icon="fa-brands fa-square-facebook" />
                    </a>
                </div>
            </div>            

        </section>

    </footer>
    
  </main>
  
</template>

<style lang="scss" scoped>
@import "../footer/Footer.scss";
@import "../../assets/styling/variables/colors";

</style>