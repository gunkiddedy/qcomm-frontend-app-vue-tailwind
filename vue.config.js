module.exports = {
    devServer: {
        proxy: 'https://api-intranet.qcomm.id/api'
    }
    // devServer: {
    //     proxy: {
    //       "^/api": {
    //         target: "http://api.dapurtech.com/api",
    //         changeOrigin: true,
    //         logLevel: "debug",
    //         pathRewrite: { "^/api": "/" }
    //       }
    //     }
    // }
    // devServer: {
    //     proxy: {
    //       "^/api/": {
    //         target: "http://api.dapurtech.com/api",
    //         pathRewrite: { "^/api/": "/api/" },
    //         changeOrigin: true,
    //         logLevel: "debug"
    //       }
    //     }
    // } 
}
