<template>
    <v-app id="inspire">

        <Header @handleDrawer="drawer = ! drawer"/>
        <Sidebar :drawer="drawer"/>

        <v-main>
            <v-container
                class="py-8 px-6"
                fluid
            >
                <router-view />
            </v-container>
        </v-main>

        <SettingSidebar @convertToDarkTheme="changeTheme" />
    </v-app>
</template>

<script>
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import SettingSidebar from "./components/SettingSidebar";
export default {
    components: {SettingSidebar, Sidebar, Header},
    data: () => ({
        cards: ['Today', 'Yesterday'],
        drawer: true,
    }),
    methods: {
        changeTheme: function () {
            this.$vuetify.theme.dark = ! this.$vuetify.theme.dark;

            if (this.$store.state.header.color !== "black") {
                this.$store.state.header.color = "black";
            } else {
                this.$store.state.header.color = "white";
            }

            if (this.$store.state.sideBar.color !== "black") {
                this.$store.state.sideBar.color = "black";
            } else {
                this.$store.state.sideBar.color = "white";
            }
            this.$store.state.header.dark = ! this.$store.state.header.dark;
            this.$store.state.sideBar.dark = ! this.$store.state.sideBar.dark;
        }
    },
}
</script>
