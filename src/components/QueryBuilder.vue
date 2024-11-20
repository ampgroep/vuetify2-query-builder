<template>
  <div>
    <div v-if='value.children'>
      <query-builder-group
        :group='outerGroup'
        :id='1'
        :fields='filterFields'
        :removable='false'
        @remove-group='removeGroup'
        :color='color'
        :operators='operators'
        :max-nested-level='maxNestedLevel'
      >
      </query-builder-group>
    </div>
  </div>
</template>

<script lang='ts'>
import QueryBuilderGroup from './QueryBuilderGroup.vue'
import Query from '@/models/Query'
import Child from '@/models/Child.ts'
import { defaultOperators } from '@/defaults.ts'
import { Operator } from '@/types.ts'

export default {
  components: { QueryBuilderGroup },
  props: {
    filterFields: {
      type: Array,
      required: true
    },
    value: {
      type: Object,
      required: true
    },
    color: {
      type: String,
      default: null
    },
    operators: {
      type: Array<Operator>,
      required: false,
      default() {
        return defaultOperators
      }
    },
    maxNestedLevel: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      // @ts-ignore Computed value for outerGroup based on value prop
      outerGroup: new Child(this.value)
    }
  },
  methods: {
    removeGroup(index: number) {
      // @ts-ignore
      this.value.children.splice(index, 1)
    },
    initializeValue() {
      // @ts-ignore
      if (!this.value?.children) {
        this.$emit('update:modelValue', { children: [], logicalOperator: 'AND' })
      }
    }
  },
  watch: {
    value: {
      handler(newValue) {
        this.outerGroup = new Child(newValue)
      },
      deep: true
    }
  },
  mounted() {
    this.initializeValue()
  }
}


</script>
