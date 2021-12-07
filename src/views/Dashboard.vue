<template>
    <div class="dashboard">
        <v-subheader class="py-0 d-flex justify-space-between rounded-lg">
            <h3>پیشخوان</h3>
            <v-btn color="success">
                مشاهده سفارشات
            </v-btn>
        </v-subheader>
        <br>
        <v-row>
            <v-col lg="7" cols="12">
                <v-alert dense text type="success">
                    ورود شما موفقیت آمیز بود <strong>یاسر شریفی زاده</strong>
                </v-alert>
                <v-row>
                    <v-col lg="6" cols="12" v-for="(item,index) in activityLog" :key="index">
                        <v-card elevation="2" class="rounded-lg">
                            <v-card-text class="d-flex justify-space-between align-center">
                                <div>
                                    <strong>{{ item.title }}</strong> <br>
                                    <span>۳ هفته گذشته</span>
                                </div>
                                <v-avatar size="60" :color="item.color" style="border: 3px solid #444">
                                    <span style="color: white">{{item.amount}} +</span>
                                </v-avatar>
                            </v-card-text>
                            <v-card-actions class="d-flex justify-space-between">


                            </v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>
            </v-col>
            <v-col cols="12" lg="5">
                <v-card>
                    <v-card-title>فعالیت ها</v-card-title>
                    <v-card-text class="py-0">
                        <v-timeline align-top dense>
                            <v-timeline-item color="indigo" small>
                                <strong>۵ دقیقه قبل</strong>
                                <div class="text-caption">
                                    شما سفارش جدیدی دارید لطفا این را بررسی کنید
                                </div>
                            </v-timeline-item>
                            <v-timeline-item color="green" small>
                                <strong>۳۵ دقیقه قبل</strong>
                                <div class="text-caption mb-2">
                                    یک محصول تحویل داده شده است!
                                </div>
                            </v-timeline-item>

                            <v-timeline-item color="indigo" small>
                                <strong>۴۴ دقیقه قبل</strong>
                                <div class="text-caption">
                                    شما سفارش جدیدی دارید لطفا این را بررسی کنید
                                </div>
                            </v-timeline-item>
                        </v-timeline>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col>
                <v-card>
                    <v-data-table
                        caption="لیست سفارش ها"
                        :headers="headers"
                        :items="desserts"
                        :items-per-page="8"
                        class="elevation-1 py-3"
                        filterable
                    >
                        <template v-slot:item.action="">
                            <v-icon class="ml-2" color="green">
                                mdi-pencil-box
                            </v-icon>
                            <v-icon color="red">
                                mdi-trash-can-outline
                            </v-icon>
                        </template>
                    </v-data-table>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    name: "Dashboard",
    data() {
        return {
            activityLog: [
                {title: 'همه محصولات', amount: 50, icon: 'mdi-account', color: 'cyan lighten-3'},
                {title: 'همه مشتری ها', amount: 3433, icon: 'mdi-account-group-outline', color: 'green darken-2'},
                {title: 'فروش', amount: 3433, icon: 'mdi-account-group-outline', color: 'blue-grey darken-1'},
                {
                    title: 'سفارشات در حال انتظار',
                    amount: 3433,
                    icon: 'mdi-account-group-outline',
                    color: 'deep-orange darken-1'
                },
            ],
            headers: [
                {
                    text: 'دسر (100g serving)',
                    align: 'start',
                    sortable: false,
                    value: 'name',
                },
                {text: 'کالری', value: 'calories'},
                {text: 'چربی (g)', value: 'fat'},
                {text: 'کربوهیدرات ها (g)', value: 'carbs'},
                {text: 'پروتئین (g)', value: 'protein'},
                {text: 'اهن (%)', value: 'iron'},
                {text: 'اقدامات', value: 'action'},
            ],
            desserts: [
                {
                    name: 'ماست منجمد',
                    calories: 159,
                    fat: 6.0,
                    carbs: 24,
                    protein: 4.0,
                    iron: '1%',
                },
                {
                    name: 'بستنی نونی',
                    calories: 237,
                    fat: 9.0,
                    carbs: 37,
                    protein: 4.3,
                    iron: '1%',
                },
                {
                    name: 'شیرینی خامه',
                    calories: 262,
                    fat: 16.0,
                    carbs: 23,
                    protein: 6.0,
                    iron: '7%',
                },
                {
                    name: 'کیک کوچک',
                    calories: 305,
                    fat: 3.7,
                    carbs: 67,
                    protein: 4.3,
                    iron: '8%',
                },
                {
                    name: 'نان زنجفیل',
                    calories: 356,
                    fat: 16.0,
                    carbs: 49,
                    protein: 3.9,
                    iron: '16%',
                },
                {
                    name: 'آب نبات',
                    calories: 375,
                    fat: 0.0,
                    carbs: 94,
                    protein: 0.0,
                    iron: '0%',
                },
                {
                    name: 'آب نبات چوبی',
                    calories: 392,
                    fat: 0.2,
                    carbs: 98,
                    protein: 0,
                    iron: '2%',
                },
                {
                    name: 'شانه عسل',
                    calories: 408,
                    fat: 3.2,
                    carbs: 87,
                    protein: 6.5,
                    iron: '45%',
                },
                {
                    name: 'دونات',
                    calories: 452,
                    fat: 25.0,
                    carbs: 51,
                    protein: 4.9,
                    iron: '22%',
                },
                {
                    name: 'کیت کت',
                    calories: 518,
                    fat: 26.0,
                    carbs: 65,
                    protein: 7,
                    iron: '6%',
                },
            ],
        }
    },
    methods: {
        onButtonClick(item) {
            console.log('click on ' + item.no)
        }
    }
}
</script>

<style scoped>
.overlap-icon {
    position: absolute;
    top: -33px;
    text-align: center;
    padding-top: 12px;
}
</style>