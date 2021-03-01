
import Router from 'next/router';

//third-party-package
import {ThemeProvider} from 'styled-components';
import NProgress from 'nprogress';

//styles.
import theme from '../themes/default.theme';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'nprogress/nprogress.css';

import Layout from '../components/Layout/Layout';

const App = ({Component,pageProps}) => {

    NProgress.configure({
        minimum:0.3,
        easing:'ease',
        speed:800,
        showSpinner:true
    });

    Router.events.on('routeChangeStart', () => {
        return NProgress.start();
    });

    Router.events.on('routeChangeComplete', () => {
        return NProgress.done();
    });

    Router.events.on('routeChangeError', () => {
        return NProgress.done();
    });
    
    return (
        <ThemeProvider theme={theme}>
        <Layout>
            <Component {...pageProps}/>
        </Layout>
        </ThemeProvider>
    )
};

export default App;