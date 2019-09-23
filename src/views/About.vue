<template lang="pug">
div
  img.bg-image(alt="Страница входа", srcset="../assets/login.jpg")

  form.form
    h1.form__header Люди, которым можно довериться

    div.form__item
      label.form__label(for="login") Адрес электронной почты
      input#login.form__input(type="text", name="login")
    div.form__item
      label.form__label(for="password") Пароль
      input#password.form__input(type="password", name="password")
    
    button.form__submit.btn.btn--primary.btn--full-width(type="button") Войти
  
    span.caption Еще не успели стать волонтером?
    a(href="#") Заполните анкету
</template>

<script>
export default {
  name: "Login"
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