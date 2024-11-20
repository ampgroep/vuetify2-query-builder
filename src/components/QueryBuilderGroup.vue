<template>
  <div class='group-wrap'>
    <div class='group-header' v-if='group.query'>
      <div>
        <v-btn class='mr-2' @click='addGroup' :disabled='disableGroupButton'>
          <img src='../../public/plus.svg' alt='add' height='20' />group
        </v-btn>
      </div>
      <div>
        <v-btn class='mr-2' @click='addRule'>
          <img src='../../public/plus.svg' alt='add' height='20' /> rule
        </v-btn>
      </div>
      <div>
        <v-select
          style='max-width: 200px'
          class='mr-2'
          v-if='group.query.children.length > 1'
          label='logicalOperator'
          outlined
          dense
          hide-details
          v-model='group.query.logicalOperator'
          :items="['AND', 'OR']"
        ></v-select>
      </div>
      <div style='margin-left: auto' v-if='removable'>
        <img @click='removeGroup()' src='../../public/trash-can.svg' alt='delete' height='20' />
      </div>
    </div>
    <div>
      <div v-for='rule in sortedRules' class='child-wrap'>
        <query-builder-rule
          :rule='rule'
          :id='id + 1'
          :fields='fields'
          @remove-rule='removeNestedRule'
          :operators='operators'
        >
        </query-builder-rule>
      </div>
      <div v-for='group in sortedGroups' class='child-wrap'>
        <query-builder-group
          :group='group'
          :id='id + 1'
          :fields='fields'
          @remove-group='removeNestedGroup'
          :operators='operators'
          :max-nested-level='maxNestedLevel'
        >
        </query-builder-group>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import QueryBuilderRule from './QueryBuilderRule.vue'
import Query from '../models/Query.ts'
import Child from '../models/Child.ts'
import QueryRule from '@/models/QueryRule.ts'
import { Children, Operator } from '@/types'

export default {
  name: 'QueryBuilderGroup',
  components: {
    QueryBuilderRule
  },
  props: {
    group: {
      type: Child<Query>,
      required: true
    },
    id: {
      type: Number,
      default: 1
    },
    fields: {
      type: Array,
      required: true
    },
    removable: {
      type: Boolean,
      default: true
    },
    color: {
      type: String
    },
    operators: {
      type: Array<Operator>,
      required: true
    },
    maxNestedLevel: {
      type: Number,
      required: true
    }
  },
  computed: {
    sortedRules(): Children<QueryRule> {
      return (
        this.group.query.children
          ?.filter((item: Child<QueryRule | Query>, index: number) => {
            item.originalIndex = index
            return item.type === 'query-builder-rule'
          })
          // @ts-ignore
          .map((item: Child<QueryRule>) => {
            return new Child<QueryRule>(
              item.query,
              item.type,
              item.originalIndex
            )
          })
      )
    },
    sortedGroups(): Children<Query> {
      return (
        this.group.query.children
          ?.filter((item: Child<QueryRule | Query>) => {
            return item.type === 'query-builder-group'
          })
          // @ts-ignore
          .map((item: Child<Query>) => {
            return new Child<Query>(item.query, item.type, item.originalIndex)
          })
      )
    },
    disableGroupButton() {
      return this.maxNestedLevel != 0 && this.id >= this.maxNestedLevel
    }
  },
  methods: {
    addGroup() {
      const group: Child<Query> = {
        type: 'query-builder-group',
        query: {
          logicalOperator: 'AND',
          children: []
        }
      }

      this.group.query.children.push(group)
    },
    addRule() {
      const rule: Child<QueryRule> = {
        type: 'query-builder-rule',
        query: {
          rule: '',
          operator: 'eq',
          operand: '',
          value: ''
        }
      }

      this.group.query.children.push(rule)
    },
    removeGroup() {
      this.$emit('remove-group', this.id)
    },
    removeNestedGroup(index: number) {
      this.group.query.children.splice(index, 1)
    },
    removeNestedRule(index: number) {
      this.group.query.children.splice(index, 1)
    }
  },
  mounted() {
    let color
    if (!this.color) {
      color = this.$vuetify.theme.themes.light.primary
    } else {
      color = this.color
    }
    const defaultColor = document.documentElement.style.getPropertyValue('--group-color')
    document.documentElement.style.setProperty('--group-color', color ? color.toString() : defaultColor.toString())
  }
}
</script>

<style>
:root {
  --group-color: #1976D2;
}

.group-wrap {
  flex-grow: 1;
}

.group-header {
  display: flex;
  align-items: center;
  position: relative;
  gap: 10px;
  z-index: 1;
  background-color: var(--group-color);
  border-left: 3px solid var(--group-color);
  padding: 20px 20px 20px 40px;
  margin-top: 20px;
}

button:hover {
  cursor: pointer;
}

.child-wrap {
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  border-left: 3px solid var(--group-color);
  padding-left: 40px;
}
</style>
