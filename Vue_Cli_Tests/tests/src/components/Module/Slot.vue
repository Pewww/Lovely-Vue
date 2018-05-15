<template>
  <div class="container">
    <speech-box :headerText="A.header" :footerText="A.footer">
      <div>
        <p>
          {{ A.message }}
        </p>
      </div>
    </speech-box>

    <speech-box class="sanders" :headerText="B.header" :footerText="B.footer">
      <div>
        <p class="sanders-content">
          {{ B.message }}
        </p>
      </div>
    </speech-box>
  </div>
</template>

<script>
import SpeechBox from './SpeechBox'

export default {
  name: 'slot',
  components: {
    SpeechBox
  },
  data () {
    return {
      A: {
        header: '오바마',
        footer: '2018-01-01',
        message: '저의 동료 여러분'
      },
      B: {
        header: '트럼프',
        footer: '2017-05-05',
        message: '감사합니다'
      }
    }
  }
}
</script>

<style scoped>
  .sanders {
    background-color: antiquewhite;
  }

  .sanders-content {
    font-family: sans-serif;
    text-decoration: underline;
  }
</style>

