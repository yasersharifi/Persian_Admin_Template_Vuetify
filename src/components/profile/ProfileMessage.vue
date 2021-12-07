<template>
    <v-card
        class="mx-auto"
        elevation="0"
    >
        <v-list two-line>
            <v-list-item-group
                v-model="selected"
                active-class="pink--text"
                multiple
            >
                <template v-for="(item, index) in items">
                    <v-list-item :key="item.title">
                        <template v-slot:default="{ active }">
                            <v-list-item-content>
                                <v-list-item-title v-text="item.title"></v-list-item-title>

                                <v-list-item-action-text
                                    class="text--primary my-3"
                                    v-text="item.headline"
                                ></v-list-item-action-text>

                                <v-list-item-action-text v-text="item.subtitle"></v-list-item-action-text>
                            </v-list-item-content>

                            <v-list-item-action>
                                <v-list-item-action-text v-text="item.action" style="font-size: 10px"></v-list-item-action-text>

                                <v-icon
                                    v-if="!active"
                                    color="grey lighten-1"
                                >
                                    mdi-star-outline
                                </v-icon>

                                <v-icon
                                    v-else
                                    color="yellow darken-3"
                                >
                                    mdi-star
                                </v-icon>
                            </v-list-item-action>
                        </template>
                    </v-list-item>

                    <v-divider
                        v-if="index < items.length - 1"
                        :key="index"
                    ></v-divider>
                </template>
            </v-list-item-group>
        </v-list>
    </v-card>
</template>

<script>
export default {
    name: "ProfileMessage",
    data: () => ({
        selected: [2],
        items: [
            {
                action: '۱۵ دقیقه قبل',
                headline: 'قرار ملاقات آخر هفته',
                subtitle: `نظر چیه این آخر هفته بریم سمت آبشار مارگون؟`,
                title: 'یاسر شریفی',
            },
            {
                action: '۲ ساعت قبل',
                headline: 'شغل های پردرآمد',
                subtitle: `لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.`,
                title: 'محمد بالابومه',
            },
            {
                action: '۱ روز پیش',
                headline: 'آموزش جاوااسکریپت',
                subtitle: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.',
                title: 'حمید جهانگیری',
            },
            {
                action: '۳ روز پیش',
                headline: 'تولد داریم',
                subtitle: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.',
                title: 'حسن داوودی',
            },
            {
                action: '۲ روز پیش  ',
                headline: 'فوتبال آخر هفته',
                subtitle: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.',
                title: 'شادمهر عقیلی',
            },
        ],
    }),
}
</script>

<style scoped>

</style>