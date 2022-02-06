<template>
  <div id="app">
    <v-app id="inspire">
      <v-app id="inspire">
        <v-main>
          <v-container class="fill-height" fluid>
            <v-row align="center" justify="center">
              <v-col cols="12" sm="8" md="4">
                <v-card class="elevation-12">
                  <v-toolbar color="primary" dark flat>
                    <v-toolbar-title>登录系统</v-toolbar-title>
                    <v-spacer></v-spacer>
                  </v-toolbar>
                  <v-card-text>
                    <v-form>
                      <v-text-field
                        label="账号"
                        name="login"
                        :value="loginForm.username"
                        prepend-icon="mdi-account"
                        type="text"
                      ></v-text-field>
                      <v-text-field
                        id="password"
                        label="密码"
                        name="password"
                        :value="loginForm.password"
                        prepend-icon="mdi-lock"
                        type="password"
                      ></v-text-field>
                    </v-form>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn @click="login()" color="primary">登录</v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-main>
      </v-app>
    </v-app>
  </div>
</template>
<script>
export default {
  name: "Login",
  data() {
    return {
      loginForm: {
        username: "user1",
        password: "123456",
      },
    };
  },
  methods: {
    login: function () {
      this.$store.dispatch("user/login", this.loginForm).then(response => {
          this.$router.push({ name: 'Index' })
      })
    },
  },
};
</script>
