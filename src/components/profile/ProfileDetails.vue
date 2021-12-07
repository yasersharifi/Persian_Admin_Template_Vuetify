<template>
    <v-card flat class="pa-6">
        <v-form
            ref="form"
            v-model="valid"
            lazy-validation
        >
            <v-text-field
                v-model="name"
                :counter="0"
                :rules="nameRules"
                label="نام و نام خانوادگی"
                required
                class="mb-3"
            ></v-text-field>

            <v-text-field
                v-model="email"
                :rules="emailRules"
                label="ایمیل"
                required
                class="mb-3"
            ></v-text-field>

            <v-select
                v-model="select"
                :items="items"
                :rules="[v => !!v || 'شغل اجباری است']"
                label="شغل"
                required
                class="mb-3"
            ></v-select>

            <v-checkbox
                v-model="checkbox"
                :rules="[v => !!v || 'برای ادامه حتما گزینه رو تیک بزنید.']"
                label="آیا موافق هستید؟"
                required
                class="mb-3"
            ></v-checkbox>

            <v-btn
                :disabled="!valid"
                color="success"
                @click="validate"
            >
                ارزیابی
            </v-btn>

            <v-btn
                color="error"
                class="mx-4"
                @click="reset"
            >
                حذف مقدار ها
            </v-btn>

            <v-btn
                color="warning"
                @click="resetValidation"
            >
                پاک کردن خطاها
            </v-btn>
        </v-form>
    </v-card>
</template>

<script>
export default {
    name: "ProfileDetails",
    data: () => ({
        valid: true,
        name: '',
        nameRules: [
            v => !!v || 'نام و نام خانوادگی اجباری است',
            v => (v && v.length >= 3) || 'نام و نام خانوادگی باید بیشتر از ۳ کاراکتر باشد.',
        ],
        email: '',
        emailRules: [
            v => !!v || 'E-mail is required',
            v => /.+@.+\..+/.test(v) || 'ایمیل را با فرمت مناسب وارد نمایید.',
        ],
        select: null,
        items: [
            'برنامه نویس',
            'طراح وب',
            'دیزاینر',
            'فرانت اند',
        ],
        checkbox: false,
    }),

    methods: {
        validate () {
            this.$refs.form.validate()
        },
        reset () {
            this.$refs.form.reset()
        },
        resetValidation () {
            this.$refs.form.resetValidation()
        },
    },
}
</script>

<style scoped>

</style>