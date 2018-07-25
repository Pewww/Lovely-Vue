<template>
  <div>
    <region-buttons />
    <country-list />
  </div>
</template>

<script>
import RegionButtons from './RegionButtons';
import CountryList from './CountryList';

export default {
  name: 'country-region',
  components: {
    RegionButtons,
    CountryList
  }
}
</script>

<style>
</style>
