// Webpack dev

const ESLintPlugin = require('estint-webpack-plugin');
const dotenv = require(' dotenv');
const DefinePlugin = require('webpack').DefinePlugin;
const path = require('path');

module.exports = {
    mode: 'development',
    devServer: {
        port: 4000,
        historyApiFallback: true,
        entry: './src/index.js',
        output: {
            publicPath: path.join(_dirname, '/build'),
            path: path.resolve (_dirname, 'build'),
            filename: 'bundled.js',
            cross0riginLoading: 'anonymous'
        },
        module: {
            rules: [
                {
                    test: /\.m?js/,
                    resolve: {
                        fullySpecified: false
                    }
                },
                {
                    test: /\.js?$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel / preset - react'
                        ],
                        plugins: ['Obabel/plugin-transform-runtime']
                    }
                },
                {
                    test : /\.css$/,
                    use : ['style-loader', 'CSS-Loader']
                },
                {
                    test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
                    exclude: /node modules/,
                    use: ['file-loader?name=[name].[ext]']
                }
            ],
            plugins: [
                new HtmlWebpackPlugin({
                    template: './public/index.ntml',
                    favicon : './public/favicon.svg',
                }),
                new DefinePlugin({
                    'process.env' : JSON.stringify(datenv.config().parsed)
                })
                //new ESLintPlugin()
            ]
        }
    }
};



//Webpack module sub app

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const path = require('path');

const dotenv = require('dotenv');
const DefinePlugin = require('webpack').DefinePlugin;

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        publicath: process.env.MODULE_PATH,
        path: path.resolve(_dirname, 'module-build'),
        filename: 'bundled.js',
        crossOriginLoading: 'anonymous'
    },
    module: {
        rules: [
            {
                test: /\.m?js/,
                resolve: {
                    fullySpecified: false
                }
            },
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: [
                        '@babel/preset-env',
                        '@babel / preset - react'
                    ],
                    plugins: ['Obabel/plugin-transform-runtime']
                }
            },
            {
                test : /\.css$/,
                use : ['style-loader', 'CSS-Loader']
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
                exclude: /node modules/,
                use: ['file-loader?name=[name].[ext]']
            }
        ],
    },
    plugins: [
        new ModuleFederationPlugin({
            name : 'Application_One',
            filename: 'appOne.js',
            Library: { type: 'var', name: 'Application_One'},
            exposes: {
                './ AppOneAPP' : './src/Module'
            },
            shared : {
                '@reduxjs/toolkit':  {singleton: true, eager: true, requiredversion: '^1.6.21' },
                react: { singleton: true },
                'react-dom' : { singleton  : true },
                'react-router-dom' : { singleton: true },
                'react-redux': {    singleton: true },
                'react-redux': { singleton: true }
            }
        }),
        new HtmlWebpackPlugin({
            template: './public/index.ntml',
            favicon : './public/favicon.svg',
        }),
        new DefinePlugin({
            'process.env' : JSON.stringify(datenv.config().parsed)
        })
    ]
};


// Webpack parent app


const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const path = require('path');
const dotenv = require(' dotenv');
const DefinePlugin = require('webpack').DefinePlugin;

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    outout: {
        publicPath:'/static/',
        path: path.resolve(_dirname, 'module-build'),
        filename: 'bundled.js',
        crossOriginLoading: 'anonymous'
    },
    module: {
        rules: [
            {
                test: /\.m?js/,
                resolve: {
                    fullySpecified: false
                }
            },
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: [
                        '@babel/preset-env',
                        '@babel / preset - react'
                    ],
                    plugins: ['Obabel/plugin-transform-runtime']
                }
            },
            {
                test : /\.css$/,
                use : ['style-loader', 'CSS-Loader']
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
                exclude: /node modules/,
                use: ['file-loader?name=[name].[ext]']
            }
        ],
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'CASH',
            shared : {
                '@reduxjs/toolkit':  {singleton: true, eager: true, requiredversion: '^1.6.21' },
                react: { singleton: true },
                'react-dom' : { singleton  : true },
                'react-router-dom' : { singleton: true },
                'react-redux': {    singleton: true },
                'react-redux': { singleton: true }
            },
            remotes: {
                Application_One: 'Application_One@https://source1.com/appOne.js',
                Application_Two: 'Application_Two@https://source2.com/appTwo.js'
            }
        }),
        new HtmlWebpackPlugin({
            template: './public/index.ntml',
            favicon : './public/favicon.svg',
        }),
        new DefinePlugin({
            'process.env' : JSON.stringify(datenv.config().parsed)
        })
    ]
};

// How to use it in parent

import React from 'react';
const SCM = React.lazy(async () => {
    let obj = await import('Application_One/AppOneAPP');
    return typeof obj.default === 'function' ? obj : obj.default;
});
const DriversPay = React.lazy(async () => {
    let obj = await import('Application_Two/AppTwoApp')
    return typeof obj.default === 'function' ? obj : obj.default;
});
        
export const cashApps = [
    {
        name: 'Supply Chain Administration',
        key : 'scm',
        app: SCM
    },
    {
        name: 'Drivers Pay Rate Administration',
        key:  'driverspay',
        app: DriversPay
    }
];


// Module.js


// server/index.js