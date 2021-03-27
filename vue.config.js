module.exports = {
    devServer: {
        proxy: 'http://api.dapurtech.com/api'
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