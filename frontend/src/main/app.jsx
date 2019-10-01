import React from 'react'
import {HashRouter} from 'react-router-dom'

import Header from '../common/template/header'
import Sidebar from '../common/template/sidebar'
import Footer from '../common/template/footer'
import Messages from '../common/msg/messages'

import '../auth/auth.css'
import Routes from '../main/routes'

export default props => (
    <HashRouter>
        <div className="wrapper">
            <Header />
            <Sidebar />
            <Routes />
            <Footer />
            <Messages />
        </div>
    </HashRouter>
)