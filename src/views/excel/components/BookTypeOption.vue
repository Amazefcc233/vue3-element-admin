<template>
  <div style="display: inline-block">
    <label class="radio-label">Book Type: </label>
    <el-select v-model="bookType" style="width: 120px">
      <el-option
        v-for="item in options"
        :key="item"
        :label="item"
        :value="item"
      />
    </el-select>
  </div>
</template>

<script>
import { $on, $off, $once, $emit } from '../../../utils/gogocodeTransfer'
export default {
  props: {
    value: {
      type: String,
      default: 'xlsx',
    },
  },
  data() {
    return {
      options: ['xlsx', 'csv', 'txt'],
    }
  },
  computed: {
    bookType: {
      get() {
        return this.value
      },
      set(val) {
        $emit(this, 'update:value', val)
      },
    },
  },
  emits: ['update:value'],
}
</script>
