<template>
  <CHeader fixed with-subheader light>
    <CToggler
      in-header
      class="ml-3 d-lg-none"
      @click="$store.commit('toggleSidebarMobile')"
    />
    <CToggler
      in-header
      class="ml-3 d-md-down-none"
      @click="$store.commit('toggleSidebarDesktop')"
    />
    <CHeaderBrand class="mx-auto d-lg-none" to="/">
      <CIcon name="logo" height="48" alt="Logo"/>
    </CHeaderBrand>
    <CHeaderNav class="d-md-down-none mr-auto">
      <CHeaderNavItem class="px-3">
        <CHeaderNavLink to="/users" exact>
          Users
        </CHeaderNavLink>
      </CHeaderNavItem>
    </CHeaderNav>
    <CHeaderNav class="mr-4">
      <CHeaderNavItem class="d-md-down-none mx-3 md-4">
        <CHeaderNavLink>
          <CIcon name="cil-bell"/>
        </CHeaderNavLink>
      </CHeaderNavItem>
      <TheHeaderDropdownAccnt/>
    </CHeaderNav>
    <CSubheader class="px-1">
      <p> Vous êtes ici : Accueil > Mes services > Etat civil </p>
    </CSubheader>
  </CHeader>
</template>

<script>
import TheHeaderDropdownAccnt from './TheHeaderDropdownAccnt'

export default {
  name: 'TheHeader',
  components: {
    TheHeaderDropdownAccnt
  } 
}
</script>
<style lang="scss">
  CSubheader {
    width: "auto";
    color: 'black';
    height: 20px;
    background-color: whitesmoke;
  }
</style>
