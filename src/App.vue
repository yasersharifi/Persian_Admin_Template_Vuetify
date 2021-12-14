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
        }
    },
}
</script>
