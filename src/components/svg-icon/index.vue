<template>
  <svg aria-hidden="true" v-bind="$attrs" class="svg-icon">
    <use :xlink:href="iconName" />
  </svg>
</template>

<script>
  export default {
    name: 'SvgIcon',
    props: {
      iconClass: {
        type: String,
        required: true,
      },
    },
    computed: {
      iconName() {
        return `#icon-${this.iconClass}`
      },
    },
  }
</script>

<style lang="scss">
  .svg-icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }

  .svg-icon.is-loading {
    animation: rotating 2s linear infinite;
  }

  @keyframes rotating {
    0% {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>
