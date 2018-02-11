<template>
	<article>
		<header class="holy-grid-items">
			<h4 style="margin-top: 25px;">基于brace的网页编辑器</h4>
		</header>
		<div class="holy-grid-content holy-grid-items">
			<div class="holy-grid-content-items holy-grid-content-left">
				<div style="margin: 15px 0;">
					<h5>选择主题:</h5>
					<Select v-model="editConfig.theme" style="width:120px">
						<Option v-for="item in editorConfigData.themeList" :value="item.value" :key="item.value">{{ item.label }}</Option>
					</Select>
				</div>
				<div style="margin: 15px 0;">
					<h5>选择语言:</h5>
					<Select v-model="editConfig.language" style="width:120px">
						<Option v-for="item in editorConfigData.langList" :value="item.value" :key="item.value">{{ item.label }}</Option>
					</Select>
				</div>
				<div style="margin: 15px 0;">
					<h5>选择字号:</h5>
					<Select v-model="editConfig.fontsize" style="width:120px">
						<Option v-for="item in editorConfigData.fontList" :value="item.value" :key="item.value">{{ item.label }}</Option>
					</Select>
				</div>
				<div style="margin: 15px 0;">
					<h5>是否只读:</h5>
					<RadioGroup v-model="editorConfigData.isReadonly" type="button">
						<Radio label="是"></Radio>
						<Radio label="否"></Radio>
					</RadioGroup>
				</div>
			</div>
			<div class="holy-grid-content-items holy-grid-content-center">
				<editor :value="code" @update:value="val => code = val" :style="styleConfig" :config="editConfig"></editor>
			</div>
			<div class="holy-grid-content-items holy-grid-content-right">
				<p><strong>编辑器配置信息:</strong></p>
				<div style="overflow: auto;">{{editConfig}}</div>
			</div>
		</div>
		<footer class="holy-grid-items">
			<h4 style="margin-top: 10px;">编辑器主题:<strong>&nbsp&nbsp{{editConfig.theme}}</strong></h4>
			<h4 style="margin-top: 10px;">编辑器语言:<strong>&nbsp&nbsp{{editConfig.language}}</strong></h4>
			<h4 style="margin-top: 10px;">输入的代码:<strong>&nbsp&nbsp{{code.length?code:'暂无输入'}}</strong></h4>
		</footer>
	</article>
</template>
<script>
import $eventBus from '../common/js/bus.js'
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
				fontsize: '16',
				enableBasicAutocompletion: true,
				enableSnippets: true,
				enableLiveAutocompletion: true,
				wrapLimitRange1: null,
				wrapLimitRange2: null,
				isWrap: true,
				isShowPrintMargin: false,
				isReadonly: false,
				placeholder: 'Insert Code Here！'
			},
			styleConfig: {
				width: '100%',
				minHeight: '100%',
				border: '1px solid #ddd'
			},
			editorConfigData: {
				themeList: [
                    {
                        value: 'chrome',
                        label: 'chrome'
                    },
                    {
                        value: 'monokai',
                        label: 'monokai'
                    },
                    {
                        value: 'clouds',
                        label: 'clouds'
                    },
                    {
                        value: 'dawn',
                        label: 'dawn'
                    },
                    {
                        value: 'eclipse',
                        label: 'eclipse'
                    },
                    {
                        value: 'github',
                        label: 'github'
                    },
                    {
                        value: 'terminal',
                        label: 'terminal'
                    },
                    {
                        value: 'sqlserver',
                        label: 'sqlserver'
                    },
                    {
                        value: 'tomorrow',
                        label: 'tomorrow'
                    }
                ],
				langList: [
                    {
                        value: 'sql',
                        label: 'sql'
                    },
                    {
                        value: 'javascript',
                        label: 'javascript'
                    },
                    {
                        value: 'css',
                        label: 'css'
                    },
                    {
                        value: 'golang',
                        label: 'golang'
                    },
                    {
                        value: 'html',
                        label: 'html'
                    },
                    {
                        value: 'java',
                        label: 'java'
                    },
                    {
                        value: 'json',
                        label: 'json'
                    },
                    {
                        value: 'jsp',
                        label: 'jsp'
                    },
                    {
                        value: 'markdown',
                        label: 'markdown'
                    }
				],
				fontList: [
					{
                        value: '10',
                        label: '10'
                    },
                    {
						value: '12',
                        label: '12'
					},
					{
						value: '14',
                        label: '14'
					},
					{
						value: '16',
                        label: '16'
					},
					{
						value: '18',
                        label: '18'
					},
					{
						value: '20',
                        label: '20'
					},
					{
						value: '24',
                        label: '24'
					}
				],
				isReadonly: '否'
			}
		}
	},
	methods: {

	},
	beforeMount () {
		$eventBus.$on('init', () => {
			require('brace/mode/sql');
			require('brace/mode/javascript');
			require('brace/mode/css');
			require('brace/mode/golang');
			require('brace/mode/html');
			require('brace/mode/java');
			require('brace/mode/json');
			require('brace/mode/jsp');
			require('brace/snippets/sql');
			require('brace/snippets/javascript');
			require('brace/snippets/css');
			require('brace/snippets/golang');
			require('brace/snippets/html');
			require('brace/snippets/java');
			require('brace/snippets/json');
			require('brace/snippets/jsp');
			require('brace/snippets/markdown');
			require('brace/theme/chrome');
			require('brace/theme/monokai');
			require('brace/theme/clouds');
			require('brace/theme/dawn');
			require('brace/theme/eclipse');
			require('brace/theme/github');
			require('brace/theme/terminal');
			require('brace/theme/sqlserver');
			require('brace/theme/tomorrow');
			require('brace/ext/language_tools');
		});
	},
	mounted () {
		$eventBus.$on('updatecode', (val) => {
			this.code = val;
		});
	},
	watch: {
		'editorConfigData.isReadonly': {
			handler: function(val){
				if(val === '否'){
					this.editConfig.isReadonly = false
				}else{
					this.editConfig.isReadonly = true
				}
			}
		}
	}
}
</script>
<style scoped>
	article {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }

    header, footer {
        text-align: center;
        flex: 0 0 100px;
    }

    .holy-grid-content {
        display: flex;
        flex: 1;
    }

    .holy-grid-content-items {
        flex: 1;
    }
	.holy-grid-content-left {
        flex: 0 0 150px;
		padding: 0 15px;
    }

    .holy-grid-content-right {
        flex: 0 0 150px;
		padding: 0 15px;
    }
</style>


