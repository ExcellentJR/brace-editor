<template>
	<article>
		<div class="row">
			<div class="col-md-8 col-sm-8 col-lg-8 col-md-offset-2 col-sm-offset-2 col-lg-offset-2">
				<h4>基于brace的网页编辑器</h4>
				<editor :value.sync="code" :style="styleConfig" :config="editConfig"></editor>
			</div>
		</div>
	</article>
</template>
<script>
import Bus from '../common/js/bus.js'
import editor from '../components/editor'
export default {
	name: 'index',
	components: {
		editor
	},
	data () {
		return {
			code: '',
			editConfig: {
				language: 'sql',
				theme: 'chrome',
				fontsize: 16,
				enableBasicAutocompletion: true,
				enableSnippets: true,
				enableLiveAutocompletion: true,
				wrapLimitRange1: null,
				wrapLimitRange2: null,
				isWrap: true,
				isShowPrintMargin: false,
				isReadonly: false,
				placeholder: 'Insert Code Here Here！'
			},
			styleConfig: {
				width: '100%',
				minHeight: '300px',
				border: '1px solid #ddd'
			}
		}
	},
	beforeMount () {
		Bus.$on('init', () => {
			require('brace/mode/sql');
			require('brace/snippets/sql');
			require('brace/theme/chrome');
			require('brace/ext/language_tools');
		});
	},
	mounted () {

	},
	methods: {

	},
	watch: {

	}
}
</script>

