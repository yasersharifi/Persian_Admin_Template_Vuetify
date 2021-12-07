<template>
    <v-card flat class="pa-5">
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
</template>

<script>
export default {
    name: "ProfileOrders",
    data: function () {
        return {
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
    }
}
</script>

<style scoped>

</style>