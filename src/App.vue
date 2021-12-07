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
    </v-app>
</template>

<script>
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
export default {
    components: {Sidebar, Header},
    data: () => ({
        cards: ['Today', 'Yesterday'],
        drawer: true,
    }),
}
</script>
