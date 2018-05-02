<template>
  <dialog-container :title="extraParams.title">
    <div class="dsw-form-wrapper">
      <form class="form-horizontal" >
        <div class="form-group form-group-sm">
          <label class="control-label col-sm-3 dsw-required" >案卷编号：</label >
          <div class="col-sm-9">
            <input type="text" class="form-control" name="caseNo" v-model="caseNo" />
          </div>
        </div>
        <div class="form-group form-group-sm">
          <label class="control-label col-sm-3 dsw-required" >案卷名称：</label >
          <div class="col-sm-9">
            <input type="text" class="form-control" name="name" v-model="info.name" />
          </div>
        </div>
        <div class="form-group form-group-sm">
          <label class="control-label col-sm-3 dsw-required" >案卷类型：</label >
          <div class="col-sm-9">
            <input type="text" class="form-control" name="type" />
          </div>
        </div>
        <div class="form-group form-group-sm">
          <label class="control-label col-sm-3 dsw-required" >案卷状态：</label >
          <div class="col-sm-9">
            <input type="text" class="form-control" name="status" />
          </div>
        </div>
        <div class="form-group form-group-sm">
          <label class="control-label col-sm-3 dsw-required" >立案时间：</label >
          <div class="col-sm-9">
            <input type="text" class="form-control" name="regDate" />
          </div>
        </div>
        <div class="form-group form-group-sm">
          <label class="control-label col-sm-3 dsw-required" >简要案情：</label >
          <div class="col-sm-9">
            <textarea name="briefDesc" class="form-control" rows="3" ></textarea >
          </div>
        </div>
        <div class="form-group form-group-sm">
          <label class="control-label col-sm-3 dsw-required" >主办民警：</label >
          <div class="col-sm-9">
            <input type="text" class="form-control" name="hostPName" />
          </div>
        </div>
        <div class="form-group form-group-sm">
          <label class="control-label col-sm-3 dsw-required" >协办民警：</label >
          <div class="col-sm-9">
            <input type="text" class="form-control" name="caseNo" />
          </div>
        </div>
        <div class="form-group form-group-sm">
          <label class="control-label col-sm-3 dsw-required" >备注：</label >
          <div class="col-sm-9">
            <textarea name="remark" class="form-control" rows="3" ></textarea >
          </div>
        </div>
      </form >
    </div>
  </dialog-container>
</template>

<script>
import DialogContainer from 'components/common/dialog-container'

export default {
  name: 'DossierListsEdit',
  data () {
    return {
      id: 0,
      info: {},
      caseNo: '123'
    }
  },
  components: {
    DialogContainer
  },
  beforeMount () {
    this.id = this.extraParams.id
    this.getInfo()
  },
  methods: {
    getInfo () {
      const id = this.id
      this.$https.jsonp(this.$api.getDossierInfo, {params: {caseHeaderId: id}}).then((result) => {
        console.log(result.data)
        this.info = result.data
      }).catch((reason) => {
        this.$toastr.error('获取用户信息失败')
      })
    }
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
