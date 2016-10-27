/**
 * 入口文件
 *
 * by tommyshao
 */
require('./polyfill')

// 导入公共样式
import './public/less/themeDefault.less'

import React from 'react'
import { render } from 'react-dom'

// 路由配置
// import routes from './routes'
import AppRouter from './routes'

// 渲染模板
render(
    // routes,
    <AppRouter />,
    document.getElementById('app')
)
