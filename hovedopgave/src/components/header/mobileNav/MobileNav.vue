<script>

export default {
    data() {
        return {
            navOpen: false,
        }
    }
}

</script>

<template>

    <div class="mobile-header">
        <div class="logo-container">
            <img class="img-fluid" src="../../../assets/img/logo_2022_geodata_orange.svg" alt="logo">
        </div>
        <div id="sidemenu">
            <button class="sidemenu__btn" v-on:click="navOpen=!navOpen" v-bind:class="{active:navOpen}">
                <span class="top"></span>
                <span class="mid"></span>
                <span class="bottom"></span>
            </button>
            <transition name="translateX">
                <nav v-show="navOpen">
                    <div class="sidemenu__wrapper">
                        <ul class="sidemenu__list">
                            <li class="sidemenu__item"><a href="">Ydelser</a></li>
                            <li class="sidemenu__item"><a href="/faggrupper/kommuner">Faggrupper</a></li>
                            <li class="sidemenu__item"><a href="/cases">Cases</a></li>
                            <li class="sidemenu__item"><a href="/om-os">Om Os</a></li>
                            <li class="sidemenu__item"><a href="/kontakt">Kontakt</a></li>
                        </ul>
                    </div>
                </nav>
            </transition>
        </div>
    </div>

</template>

<style lang="scss" scoped>
@import './MobileNav.scss';
</style>
