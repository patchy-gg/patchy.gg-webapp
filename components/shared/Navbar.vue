<template>
  <nav
    role="navigation"
    aria-label="main navigation"
    id="navbar"
    class="navbar"
  >
    <div class="container">
      <div class="navbar-brand navbar-center"></div>
      <div class="navbar-menu">
        <div class="navbar-brand">
          <div
            class="navbar-item has-text-white"
            style="font-family: impact"
          ></div>
        </div>
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <nuxt-link class="login-button button" to="/auth/login">
                Login
              </nuxt-link>
              <nuxt-link class="button cta cta-button" to="/auth/register">
                Sign up
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style lang="scss">
#navbar {
  background-color: $outer-space;
}
</style>
