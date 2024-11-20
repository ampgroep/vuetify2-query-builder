<script lang='ts'>
import Query from '@/models/Query.ts'
import QueryBuilder from './components/QueryBuilder.vue'
import { Operator } from '@/types.ts'

export default {
  components: { QueryBuilder },
  data() {
    return {
      // Reactive property for the filter
      filter: {
        logicalOperator: 'AND',
        children: [
          {
            type: 'query-builder-group',
            query: {
              logicalOperator: 'OR',
              children: [
                {
                  type: 'query-builder-rule',
                  query: {
                    rule: 'type',
                    operator: 'IN',
                    operand: 'type',
                    value: [1, 2, 3, 4, 5]
                  },
                  originalIndex: 0
                },
                {
                  type: 'query-builder-rule',
                  query: {
                    rule: 'category',
                    operator: 'IN',
                    operand: 'category',
                    value: [1, 2, 3]
                  },
                  originalIndex: 1
                },
                {
                  type: 'query-builder-group',
                  query: {
                    logicalOperator: 'AND',
                    children: [
                      {
                        type: 'query-builder-rule',
                        query: {
                          rule: '',
                          operator: 'gte',
                          operand: 'customerID',
                          value: '12400'
                        },
                        originalIndex: 0
                      },
                      {
                        type: 'query-builder-rule',
                        query: {
                          rule: '',
                          operator: 'in',
                          operand: 'deliveryDate',
                          value: 'configured_delivery_date'
                        },
                        originalIndex: 1
                      }
                    ]
                  },
                  originalIndex: 2
                }
              ]
            }
          },
          {
            type: 'query-builder-rule',
            query: {
              rule: 'status',
              operator: 'IN',
              operand: 'status',
              value: ['created', 'processing', 'done']
            }
          }
        ]
      },
      // Reactive property for an empty query
      emptyQuery: {},
      // Filter fields array
      filterFields: [
        'id',
        'name',
        'date',
        'type',
        'customerID',
        'satusraw',
        'coldchain',
        'ambient'
      ],
      // Operators array
      operators: [
        { value: 'eq', text: '=', type: 'string' },
        { value: 'ne', text: '!=', type: 'string' },
        { value: 'gt', text: '>', type: 'string' },
        { value: 'lt', text: '<', type: 'string' },
        { value: 'gte', text: '>=', type: 'string' },
        { value: 'lte', text: '<=', type: 'string' }
      ]
    }
  },
  methods: {
    // Add methods here for any interaction with the filter, operators, or fields
    updateFilter(newFilter: any) {
      this.filter = newFilter // Example method to update the filter
    }
  }
}

</script>

<template>
  <v-app>
    <v-app-bar
    >
      <v-app-bar-nav-icon>
        <img
          alt='Vue logo'
          class='logo'
          src='./assets/logo.svg'
          width='50'
          height='50'
        />
      </v-app-bar-nav-icon>
      <v-app-bar-title>Vuetify query builder</v-app-bar-title>
    </v-app-bar>
    <v-main style='width: 100%'>
      <v-container :fluid='true'>
        <h1>Examples:</h1>
        <hr />
        <div>
          <h2>Existing query object:</h2>
          <query-builder
            v-model='filter'
            :filter-fields='filterFields'
            :max-nested-level='0'
          ></query-builder>
        </div>
        <hr />
        <div>
          <h2>Empty object {}:</h2>
          <query-builder
            v-model='emptyQuery'
            :filter-fields='filterFields'
          ></query-builder>
        </div>
      </v-container>
    </v-main>
  </v-app>
</template>

<style scoped></style>
