<template lang="pug">
div
  img.bg-image(alt="Страница входа", srcset="../assets/login.jpg")

  form.form
    h1.form__header Люди, которым можно довериться

    div.form__item.item
      label.item__label(for="login") Адрес электронной почты
      input#login.item__input(type="text", name="login")
    div.form__item.item
      label.item__label(for="password") Пароль
      input#password.item__input(type="password", name="password")
    div.form__item.item
      label
        input#checkbox.item__checkbox(type="checkbox")
        div.box
        span.text 123456654321
    div.form__item.item
      label
        input.item__radiobox(type="radio")
        div.box
        span.text 123456654321
    
    button.form__submit.btn.btn--primary.btn--full-width(type="button") Войти
  
    span.caption Еще не успели стать волонтером?
    a(href="#") Заполните анкету
</template>

<script>
export default {
  name: "Login",
  data: () => ({
    messages: [],
    textMessage: ""
  }),
  mounted() {
    window.Echo.channel("global").listen("GlobalNotification", global => {
      console.log(123, global);
      this.messages.push(global);
    });
  }
};
</script>

<style lang="scss" scoped>
.bg-image {
  width: 100%;
}

.form {
  position: fixed;
  bottom: 0;

  height: 440px;

  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}
</style>
