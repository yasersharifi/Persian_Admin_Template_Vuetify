<template>
    <v-navigation-drawer
        v-model="drawer"
        app
        right
        fixed
    >
        <div class="self__area pa-4" style="height: 180px">
            <ul class="self__circles">
                <li v-for="i in 10" :key="i"></li>
            </ul>
            <div class="text-center">
                <v-avatar class="mb-4 mt-3" color="grey darken-1" size="64">
                    <v-img
                        aspect-ratio="30"
                        :src="require('./../assets/yaser.jpg')"

                    />
                </v-avatar>
                <h2 class="white--text">ياسرشریفی</h2>
            </div>
        </div>


        <v-divider></v-divider>

        <v-list
            nav
        >
            <v-list-item-group v-model="selectedItem">
                <router-link v-for="(item, index) in links" :key="index" :to="{name: item.route}">
                    <v-list-item color="orange">
                        <v-list-item-icon>
                            <v-icon v-text="item.icon"></v-icon>
                        </v-list-item-icon>

                        <v-list-item-content>
                            <v-list-item-title v-text="item.title"></v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </router-link>
            </v-list-item-group>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {
    name: "Sidebar",
    props: ["drawer"],
    data: function () {
        return {
            selectedItem: 0,
            links: [
                {icon: "mdi-microsoft-windows", title: "پیشخوان", route: "Dashboard"},
                {icon: "mdi-account", title: "پروفایل", route: "Profile"},
                {icon: "mdi-clipboard-list-outline", title: "محصولات", route: "Products"},
                {icon: "mdi-card-account-details-outline", title: "سفارشات", route: "Orders"},
                {icon: "mdi-alert-box-outline", title: "پیام هشدار", route: "Alerts"},
                {icon: "mdi-table-large", title: "جدول", route: "Alerts"},
                {icon: "mdi-gesture-tap-button", title: "دکمه ها", route: "Alerts"},
                {icon: "mdi-card-outline", title: "کارت ها", route: "Alerts"},
                {icon: "mdi-play-box-outline", title: "اسلایدر", route: "Alerts"},
                {icon: "mdi-baby-face", title: "آیکون ها", route: "Alerts"},
                {icon: "mdi-baby-face", title: "وبلاگ", route: "Alerts"},
                {icon: "mdi-cog", title: "تنظیمات", route: "Setting"},
            ],
        }
    }
}
</script>

<style scoped>
a {
    text-decoration: none !important;
}

.self__area {
    background: #0f1264;
    background: -webkit-linear-gradient(to left, #272b67, #01096c);
    width: 100%;
    height: 100vh;
}

.self__circles {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
}

.self__circles li {
    position: absolute;
    display: block;
    list-style: none;
    width: 20px;
    height: 20px;
    background: rgba(252, 249, 249, 1);
    animation: animate 25s linear infinite;
    bottom: -150px;

}

.self__circles li:nth-child(1) {
    left: 25%;
    width: 50px;
    height: 50px;
    animation-delay: 0s;
}


.self__circles li:nth-child(2) {
    left: 10%;
    width: 20px;
    height: 20px;
    animation-delay: 2s;
    animation-duration: 10s;
}

.self__circles li:nth-child(3) {
    left: 70%;
    width: 20px;
    height: 20px;
    animation-delay: 3s;
}

.self__circles li:nth-child(4) {
    left: 40%;
    width: 60px;
    height: 60px;
    animation-delay: 0s;
    animation-duration: 15s;
}

.self__circles li:nth-child(5) {
    left: 65%;
    width: 20px;
    height: 20px;
    animation-delay: 0s;
}

.self__circles li:nth-child(6) {
    left: 75%;
    width: 110px;
    height: 110px;
    animation-delay: 2s;
}

.self__circles li:nth-child(7) {
    left: 35%;
    width: 130px;
    height: 130px;
    animation-delay: 6s;
}

.self__circles li:nth-child(8) {
    left: 50%;
    width: 25px;
    height: 25px;
    animation-delay: 15s;
    animation-duration: 35s;
}

.self__circles li:nth-child(9) {
    left: 20%;
    width: 15px;
    height: 15px;
    animation-delay: 2s;
    animation-duration: 25s;
}

.self__circles li:nth-child(10) {
    left: 85%;
    width: 150px;
    height: 150px;
    animation-delay: 0s;
    animation-duration: 8s;
}


@keyframes animate {
    0% {
        transform: translateY(0) rotate(0deg);
        opacity: 1;
        border-radius: 0;
    }

    100% {
        transform: translateY(-1000px) rotate(720deg);
        opacity: 0;
        border-radius: 50%;
    }

}
</style>