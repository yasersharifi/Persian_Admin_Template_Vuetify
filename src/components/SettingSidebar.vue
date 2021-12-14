<template>
    <div class="text-center settingSidebar">
        <v-menu
            v-model="menu"
            :close-on-content-click="false"
            :nudge-width="200"
            offset-x
        >
            <template v-slot:activator="{ on, attrs }">
                <v-btn elevation="0" width="50" height="50"
                       v-bind="attrs"
                       v-on="on">
                    <v-icon class="rotating">mdi-cog-outline</v-icon>
                </v-btn>
            </template>

            <v-card>
                <v-list>
                    <v-list-item>
                        <v-list-item-title>تنظیمات سایت</v-list-item-title>
                    </v-list-item>
                </v-list>

                <v-divider></v-divider>

                <v-list>
                    <v-list-item>
                        <v-list-item-action>
                            <v-switch
                                @click="$emit('convertToDarkTheme')"
                                color="purple"
                            ></v-switch>
                        </v-list-item-action>
                        <v-list-item-title>قالب تیره</v-list-item-title>
                    </v-list-item>
                </v-list>
                <v-list>
                    <v-list-item>
                        <v-list-item-title>هدر سایت</v-list-item-title>
                    </v-list-item>
                    <v-divider></v-divider>
                    <v-list-item>
                        <v-icon color="black" @click="headerColor('black', true)">mdi-circle</v-icon>
                        <v-icon color="red" @click="headerColor('red', true)">mdi-circle</v-icon>
                        <v-icon color="blue" @click="headerColor('blue', true)">mdi-circle</v-icon>
                        <v-icon color="purple" @click="headerColor('purple', true)">mdi-circle</v-icon>
                        <v-icon color="white" @click="headerColor('white', false)">mdi-circle</v-icon>
                    </v-list-item>
                </v-list>

                <v-list>
                    <v-list-item>
                        <v-list-item-title>ساید بار</v-list-item-title>
                    </v-list-item>
                    <v-divider></v-divider>
                    <v-list-item>
                        <v-icon color="black" @click="sidebarColor('black', true)">mdi-circle</v-icon>
                        <v-icon color="red" @click="sidebarColor('red', true)">mdi-circle</v-icon>
                        <v-icon color="blue" @click="sidebarColor('blue', true)">mdi-circle</v-icon>
                        <v-icon color="purple" @click="sidebarColor('purple', true)">mdi-circle</v-icon>
                        <v-icon color="white" @click="sidebarColor('white', false)">mdi-circle</v-icon>
                    </v-list-item>
                </v-list>

                <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn text @click="menu">
                        Cancel
                    </v-btn>
                    <v-btn color="primary" text>
                        Save
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-menu>
    </div>
</template>

<script>
import {mapState} from "vuex";

export default {
    name: "SettingSidebar",
    data: function () {
        return {
            menu: false,
        }
    },
    methods: {
        headerColor: function (color, dark) {
            this.$store.commit('changeHeaderStyle', [color, dark]);
        },
        sidebarColor: function (color, dark) {
            this.$store.commit('changeSideBarStyle', [color, dark]);
        }
    },
    computed: mapState({

    }),
}
</script>

<style scoped>
.settingSidebar {
    position: fixed;
    top: 5%;
    left: 0;
    z-index: 999;
}
@-webkit-keyframes rotating /* Safari and Chrome */ {
    from {
        -webkit-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    to {
        -webkit-transform: rotate(360deg);
        -o-transform: rotate(360deg);
        transform: rotate(360deg);
    }
}
@keyframes rotating {
    from {
        -ms-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -webkit-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    to {
        -ms-transform: rotate(360deg);
        -moz-transform: rotate(360deg);
        -webkit-transform: rotate(360deg);
        -o-transform: rotate(360deg);
        transform: rotate(360deg);
    }
}
.rotating {
    -webkit-animation: rotating 2s linear infinite;
    -moz-animation: rotating 2s linear infinite;
    -ms-animation: rotating 2s linear infinite;
    -o-animation: rotating 2s linear infinite;
    animation: rotating 2s linear infinite;
}
</style>