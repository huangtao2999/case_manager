<template>
  <dialog-container :title="extraParams.title">
    <div class="dsw-form-wrapper">
    <form class="form-horizontal" >
      <div class="form-group form-group-sm">
        <label class="control-label col-sm-3 dsw-required" >角色名称：</label>
        <div class="col-sm-9">
          <input type="text" class="form-control" name="caseNo" v-model="info.roleName" />
        </div>
      </div>
      <div class="form-group form-group-sm">
        <label class="control-label col-sm-3 dsw-required" >角色描述：</label>
        <div class="col-sm-9">
          <textarea name="remark" class="form-control" rows="3" v-model="info.remark" ></textarea >
        </div>
      </div>
    </form >
    </div>
  </dialog-container>
</template>

<script>
import DialogContainer from 'components/common/dialog-container'

export default {
  name: 'Add',
  data () {
    return {
      info: {}
    }
  },
  components: {
    DialogContainer
  },
  methods: {

  }
}
</script>

<style lang="stylus">

</style>

<style lang="stylus" scoped>
  .dsw-form-wrapper{
    width :60%;
    margin :0 auto;
  }
</style>
