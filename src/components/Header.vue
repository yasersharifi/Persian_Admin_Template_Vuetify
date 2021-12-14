<template>
    <v-app-bar
        app
        :color="$store.state.header.color"
        :dark="$store.state.header.dark"
        elevation="1"
    >
        <v-app-bar-nav-icon @click="$emit('handleDrawer')"></v-app-bar-nav-icon>

        <v-toolbar-title>عنوان</v-toolbar-title>

        <v-spacer>
            <v-col cols="12" lg="6">
                <v-form class="mt-6">
                    <v-text-field rounded outlined dense placeholder="جستجو کنید"
                                  append-icon="mdi-magnify"></v-text-field>
                </v-form>
            </v-col>
        </v-spacer>

        <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
               <span v-bind="attrs" v-on="on" style="cursor: pointer" class="mx-5 mr-10">
                   <v-badge offset-x="10" offset-y="10" color="red" content="5">
                       <v-icon>mdi-bell</v-icon>
                   </v-badge>
               </span>
            </template>
            <v-list three-line width="250">
                <template v-for="(item, index) in items">
                    <v-subheader
                        v-if="item.header"
                        :key="item.header"
                        v-text="item.header"
                    ></v-subheader>

                    <v-divider
                        v-else-if="item.divider"
                        :key="index"
                        :inset="item.inset"
                    ></v-divider>

                    <v-list-item
                        v-else
                        :key="item.title"
                    >
                        <v-list-item-avatar>
                            <v-img :src="item.avatar"></v-img>
                        </v-list-item-avatar>

                        <v-list-item-content>
                            <v-list-item-title v-html="item.title"></v-list-item-title>
                            <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </template>
            </v-list>
        </v-menu>

        <v-menu offset-y>
            <template v-slot:activator="{ attrs, on }">
        <span style="cursor: pointer" v-bind="attrs" v-on="on">
          <v-chip link>
            <v-badge dot bottom color="green" offset-y="10" offset-x="10">
              <v-avatar size="40">
                <v-img :src="require('./../assets/yaser.jpg')"/>
              </v-avatar>
            </v-badge>
            <span class="mr-3">یاسر شریفی</span>
          </v-chip>
        </span>
            </template>
            <v-list width="250" class="py-0">
                <v-list-item two-line>
                    <v-list-item-avatar>
                        <v-img :src="require('./../assets/yaser.jpg')"/>
                    </v-list-item-avatar>

                    <v-list-item-content>
                        <v-list-item-title>یاسر شریفی</v-list-item-title>
                        <v-list-item-subtitle>ورود</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
                <v-divider/>
                <v-list-item link v-for="(menu, i) in menus" :key="i">
                    <v-list-item-icon>
                        <v-icon>{{ menu.icon }}</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>
                        {{ menu.title }}
                    </v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>

        <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-btn icon>
            <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-btn icon>
            <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
    </v-app-bar>
</template>

<script>
export default {
    name: "Header",
    data: function () {
        return {
            menus: [
                {title: "پروفایل", icon: "mdi-account"},
                {title: "تغییر رمز عبور", icon: "mdi-key"},
                {title: "تنظیمات", icon: "mdi-cog"},
                {title: "خروج", icon: "mdi-logout"},
            ],
            items: [
                {header: 'امروز'},
                {
                    avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
                    title: 'آیا ویوجی اس آسان است؟',
                    subtitle: `<span class="text--primary">علی احمدی</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
                },
                {divider: true, inset: true},
                {
                    avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
                    title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
                    subtitle: `<span class="text--primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`,
                },
                {divider: true, inset: true},
                {
                    avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
                    title: 'Oui oui',
                    subtitle: '<span class="text--primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
                },
                {divider: true, inset: true},
                {
                    avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
                    title: 'Birthday gift',
                    subtitle: '<span class="text--primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?',
                },
                {divider: true, inset: true},
                {
                    avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
                    title: 'Recipe to try',
                    subtitle: '<span class="text--primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
                },
            ],
        }
    }
}
</script>

<style scoped>

</style>