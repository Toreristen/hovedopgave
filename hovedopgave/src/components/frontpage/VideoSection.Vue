<script>

</script>

<template>

    <section class="video">
        <div class="video-container">
                <video muted loop autoplay oncanplay="this.muted=true" >
                    <source src="../../assets/video/background_wcolor.mp4" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
        </div>
        <div class="video-text">
            <h1 class="main-header">Geodata er med til at give indsigt</h1>
            <h2 class="heading">Leverandør indenfor GIS, OIS & CAD løsninger</h2>
            <RouterLink class="contact-btn" to="/kontakt">Kontakt os</RouterLink>
        </div>
        <div class="overlay"></div>
    </section>
</template>

<style lang="scss" scoped>
@import "../frontpage/VideoSection.scss";
@import "../../assets/styling/variables/colors";
@import "../../assets/styling/variables/fonts";
</style>