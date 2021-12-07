<template>
    <v-row>
        <v-col>
            <v-card>
                <v-toolbar
                    flat
                    color="deep-orange accent-3"
                    dark
                >
                    <v-toolbar-title>حساب کاربری</v-toolbar-title>
                </v-toolbar>
                <v-tabs vertical>
                    <v-sheet height="100%" style="border-left: 1px solid rgba(225,225,225,0.74)">
                        <v-tab v-for="(item, index) in profileSidebar" :key="index" class="d-flex justify-start align-center mt-3">
                            <v-icon left class="ml-3">
                                {{ item.icon }}
                            </v-icon>
                            {{ item.text }}
                        </v-tab>
                    </v-sheet>

                    <v-tab-item>
                        <ProfileDashboard />
                    </v-tab-item>

                    <v-tab-item>
                      <ProfileDetails />
                    </v-tab-item>

                    <v-tab-item>
                        <ProfileAddress />
                    </v-tab-item>

                    <v-tab-item>

                    </v-tab-item>

                    <v-tab-item>
                        <ProfileMessage />
                    </v-tab-item>

                    <v-tab-item>
                        <ProfileOrders />
                    </v-tab-item>
                </v-tabs>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
import ProfileDashboard from "../components/profile/ProfileDashboard";
import ProfileDetails from "../components/profile/ProfileDetails";
import ProfileAddress from "../components/profile/ProfileAddress";
import ProfileOrders from "../components/profile/ProfileOrders";
import ProfileMessage from "../components/profile/ProfileMessage";
export default {
    name: "Profile",
    components: {ProfileMessage, ProfileOrders, ProfileAddress, ProfileDetails, ProfileDashboard},
    data: function () {
        return {
            selectedItem: 0,
            profileSidebar: [
                { text: 'داشبورد', icon: 'mdi-microsoft-windows' },
                { text: 'جزئیات حساب', icon: 'mdi-account-outline' },
                { text: 'آدرس ها', icon: 'mdi-map-marker-outline' },
                { text: 'تغییر رمز عبور', icon: 'mdi-history' },
                { text: 'پیام ها', icon: 'mdi-message-outline' },
                { text: 'سفارشات', icon: 'mdi-cart-outline' },
                { text: 'خروج', icon: 'mdi-cloud-upload' },
            ],
            tab: 0,
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        }
    }
}
</script>

<style scoped>

</style>