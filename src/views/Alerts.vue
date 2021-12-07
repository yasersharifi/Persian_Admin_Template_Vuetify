<template>
    <v-row>
        <v-col cols="6">
            <v-card>
                <v-card-title>پیام های هشدار</v-card-title>
                <v-divider></v-divider>
                <v-card-text>
                    <v-alert type="success">این یک پیام موفقیت است.</v-alert>
                    <v-alert type="warning">این یک پیام هشدار است.</v-alert>
                    <v-alert type="info">این یک پیام اطلاع است.</v-alert>
                    <v-alert type="error">این یک پیام خطا است.</v-alert>
                </v-card-text>
            </v-card>
        </v-col>

        <v-col cols="6">
            <v-card>
                <v-card-title>پیام های هشدار با آیکون متفاوت</v-card-title>
                <v-divider></v-divider>
                <v-card-text>
                    <v-alert type="success" icon="mdi-chat-alert">این یک پیام موفقیت است.</v-alert>
                    <v-alert type="warning" icon="mdi-alert-octagon">این یک پیام هشدار است.</v-alert>
                    <v-alert type="info" icon="mdi-heart">این یک پیام اطلاع است.</v-alert>
                    <v-alert type="error" icon="mdi-account">این یک پیام خطا است.</v-alert>
                </v-card-text>
            </v-card>
        </v-col>

        <v-col cols="6">
            <v-card>
                <v-card-title>پیام های هشدار با حاشیه بیرونی</v-card-title>
                <v-divider></v-divider>
                <v-card-text>
                    <v-alert type="success" outlined>این یک پیام موفقیت است.</v-alert>
                    <v-alert type="warning" outlined>این یک پیام هشدار است.</v-alert>
                    <v-alert type="info" outlined>این یک پیام اطلاع است.</v-alert>
                    <v-alert type="error" outlined>این یک پیام خطا است.</v-alert>
                </v-card-text>
            </v-card>
        </v-col>

        <v-col cols="6">
            <v-card>
                <v-card-title> پیام های هشدار با حاشیه</v-card-title>
                <v-divider></v-divider>
                <v-card-text>
                    <v-alert type="success" border="top">این یک پیام موفقیت است.</v-alert>
                    <v-alert type="warning" border="left">این یک پیام هشدار است.</v-alert>
                    <v-alert type="info" border="right">این یک پیام اطلاع است.</v-alert>
                    <v-alert type="error" border="bottom">این یک پیام خطا است.</v-alert>
                </v-card-text>
            </v-card>
        </v-col>

        <v-col cols="6">
            <v-card>
                <v-card-title>پیام های هشدار متنی</v-card-title>
                <v-divider></v-divider>
                <v-card-text>
                    <v-alert type="success" text>این یک پیام موفقیت است.</v-alert>
                    <v-alert type="warning" text>این یک پیام هشدار است.</v-alert>
                    <v-alert type="info" text>این یک پیام اطلاع است.</v-alert>
                    <v-alert type="error" text>این یک پیام خطا است.</v-alert>
                </v-card-text>
            </v-card>
        </v-col>

        <v-col cols="6">
            <v-card>
                <v-card-title>پیام های هشدار با ارتفاع کم</v-card-title>
                <v-divider></v-divider>
                <v-card-text>
                    <v-alert type="success" dense>این یک پیام موفقیت است.</v-alert>
                    <v-alert type="warning" dense>این یک پیام هشدار است.</v-alert>
                    <v-alert type="info" dense> این یک پیام اطلاع است.</v-alert>
                    <v-alert type="error" dense>این یک پیام خطا است.</v-alert>
                </v-card-text>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
export default {
    name: "Alerts"
}
</script>

<style scoped>

</style>