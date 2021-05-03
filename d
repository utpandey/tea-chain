[33mcommit e2a6a5dd6b65e35ce66ad070d46bcae5f3061ee8[m[33m ([m[1;36mHEAD -> [m[1;32mmaster[m[33m)[m
Author: utpandey <utsavpandey8@gmail.com>
Date:   Sat May 1 13:09:39 2021 +0530

    scss base setup

[1mdiff --git a/frontend/src/App.css b/frontend/src/App.css[m
[1mdeleted file mode 100644[m
[1mindex 74b5e05..0000000[m
[1m--- a/frontend/src/App.css[m
[1m+++ /dev/null[m
[36m@@ -1,38 +0,0 @@[m
[31m-.App {[m
[31m-  text-align: center;[m
[31m-}[m
[31m-[m
[31m-.App-logo {[m
[31m-  height: 40vmin;[m
[31m-  pointer-events: none;[m
[31m-}[m
[31m-[m
[31m-@media (prefers-reduced-motion: no-preference) {[m
[31m-  .App-logo {[m
[31m-    animation: App-logo-spin infinite 20s linear;[m
[31m-  }[m
[31m-}[m
[31m-[m
[31m-.App-header {[m
[31m-  background-color: #282c34;[m
[31m-  min-height: 100vh;[m
[31m-  display: flex;[m
[31m-  flex-direction: column;[m
[31m-  align-items: center;[m
[31m-  justify-content: center;[m
[31m-  font-size: calc(10px + 2vmin);[m
[31m-  color: white;[m
[31m-}[m
[31m-[m
[31m-.App-link {[m
[31m-  color: #61dafb;[m
[31m-}[m
[31m-[m
[31m-@keyframes App-logo-spin {[m
[31m-  from {[m
[31m-    transform: rotate(0deg);[m
[31m-  }[m
[31m-  to {[m
[31m-    transform: rotate(360deg);[m
[31m-  }[m
[31m-}[m
[1mdiff --git a/frontend/src/App.test.js b/frontend/src/App.test.js[m
[1mdeleted file mode 100644[m
[1mindex 1f03afe..0000000[m
[1m--- a/frontend/src/App.test.js[m
[1m+++ /dev/null[m
[36m@@ -1,8 +0,0 @@[m
[31m-import { render, screen } from '@testing-library/react';[m
[31m-import App from './App';[m
[31m-[m
[31m-test('renders learn react link', () => {[m
[31m-  render(<App />);[m
[31m-  const linkElement = screen.getByText(/learn react/i);[m
[31m-  expect(linkElement).toBeInTheDocument();[m
[31m-});[m
[1mdiff --git a/frontend/src/App.tsx b/frontend/src/App.tsx[m
[1mindex 3d33227..4ddaf62 100644[m
[1m--- a/frontend/src/App.tsx[m
[1m+++ b/frontend/src/App.tsx[m
[36m@@ -1,5 +1,5 @@[m
 import React from 'react'[m
[31m-import './App.css';[m
[32m+[m[32m// import './App.css';[m
 import { useState } from 'react';[m
 import { ethers } from 'ethers'[m
 [m
[1mdiff --git a/frontend/src/index.css b/frontend/src/index.css[m
[1mdeleted file mode 100644[m
[1mindex 2950c3e..0000000[m
[1m--- a/frontend/src/index.css[m
[1m+++ /dev/null[m
[36m@@ -1,2 +0,0 @@[m
[31m-html {[m
[31m-  font-size: 50px; }[m
[1mdiff --git a/frontend/src/index.scss b/frontend/src/index.scss[m
[1mdeleted file mode 100644[m
[1mindex e96a80e..0000000[m
[1m--- a/frontend/src/index.scss[m
[1m+++ /dev/null[m
[36m@@ -1,3 +0,0 @@[m
[31m-html {[m
[31m-    font-size: 50px;[m
[31m-}[m
\ No newline at end of file[m
[1mdiff --git a/frontend/src/index.tsx b/frontend/src/index.tsx[m
[1mindex ef2edf8..71b00e2 100644[m
[1m--- a/frontend/src/index.tsx[m
[1m+++ b/frontend/src/index.tsx[m
[36m@@ -1,17 +1,11 @@[m
 import React from 'react';[m
 import ReactDOM from 'react-dom';[m
[31m-import './index.css';[m
[31m-import App from './App';[m
[31m-import reportWebVitals from './reportWebVitals';[m
[32m+[m[32mimport './styles/css/index.css';[m
[32m+[m[32m// import App from './App';[m
 [m
 ReactDOM.render([m
   <React.StrictMode>[m
[31m-    <App />[m
[32m+[m[32m    {/* <App /> */}[m
   </React.StrictMode>,[m
   document.getElementById('root')[m
 );[m
[31m-[m
[31m-// If you want to start measuring performance in your app, pass a function[m
[31m-// to log results (for example: reportWebVitals(console.log))[m
[31m-// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals[m
[31m-reportWebVitals();[m
[1mdiff --git a/frontend/src/styles/abstracts/_mixins.scss b/frontend/src/styles/abstracts/_mixins.scss[m
[1mnew file mode 100644[m
[1mindex 0000000..272cf0e[m
[1m--- /dev/null[m
[1m+++ b/frontend/src/styles/abstracts/_mixins.scss[m
[36m@@ -0,0 +1,63 @@[m
[32m+[m[32m@mixin clearfix {[m
[32m+[m[32m    &::after {[m
[32m+[m[32m        content: "";[m
[32m+[m[32m        display: table;[m
[32m+[m[32m        clear: both;[m
[32m+[m[32m    }[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m// MEDIA QUERY MANAGER[m
[32m+[m
[32m+[m[32m/*[m
[32m+[m[32m0 - 600px:      Phone[m
[32m+[m[32m600 - 900px:    Tablet portrait[m
[32m+[m[32m900 - 1200px:   Tablet landscape[m
[32m+[m[32m[1200 - 1800] is where our normal styles apply[m
[32m+[m[32m1800px + :      Big desktop[m
[32m+[m[32m$breakpoint arguement choices:[m
[32m+[m[32m- phone[m
[32m+[m[32m- tab-port[m
[32m+[m[32m- tab-land[m
[32m+[m[32m- big-desktop[m
[32m+[m[32mORDER: Base + typography > general layout + grid > page layout > components[m
[32m+[m[32m1em = 16px[m
[32m+[m[32m*/[m
[32m+[m
[32m+[m[32m@mixin respond($breakpoint) {[m
[32m+[m[32m    @if $breakpoint==small-phone {[m
[32m+[m[32m        @media only screen and (max-width: 23.75em) {[m
[32m+[m[32m            @content[m
[32m+[m[32m        }[m
[32m+[m[32m        ; //380px[m
[32m+[m[32m    }[m
[32m+[m[32m    @if $breakpoint==phone {[m
[32m+[m[32m        @media only screen and (max-width: 37.5em) {[m
[32m+[m[32m            @content[m
[32m+[m[32m        }[m
[32m+[m[32m        ; //600px[m
[32m+[m[32m    }[m
[32m+[m[32m    @if $breakpoint==tab-port {[m
[32m+[m[32m        @media only screen and (max-width: 56.25em) {[m
[32m+[m[32m            @content[m
[32m+[m[32m        }[m
[32m+[m[32m        ; //900px[m
[32m+[m[32m    }[m
[32m+[m[32m    @if $breakpoint==tab-land {[m
[32m+[m[32m        @media only screen and (max-width: 75em) {[m
[32m+[m[32m            @content[m
[32m+[m[32m        }[m
[32m+[m[32m        ; //1200px[m
[32m+[m[32m    }[m
[32m+[m[32m    @if $breakpoint==small-desktop {[m
[32m+[m[32m        @media only screen and (min-width: 90em) {[m
[32m+[m[32m            @content[m
[32m+[m[32m        }[m
[32m+[m[32m        ; //1440[m
[32m+[m[32m    }[m
[32m+[m[32m    @if $breakpoint==big-desktop {[m
[32m+[m[32m        @media only screen and (min-width: 150em) {[m
[32m+[m[32m            @content[m
[32m+[m[32m        }[m
[32m+[m[32m        ; //1800[m
[32m+[m[32m    }[m
[32m+[m[32m}[m
\ No newline at end of file[m
[1mdiff --git a/frontend/src/styles/abstracts/_variables.scss b/frontend/src/styles/abstracts/_variables.scss[m
[1mnew file mode 100644[m
[1mindex 0000000..af77044[m
[1m--- /dev/null[m
[1m+++ b/frontend/src/styles/abstracts/_variables.scss[m
[36m@@ -0,0 +1,31 @@[m
[32m+[m[32m// COLORS[m
[32m+[m[32m$color-white: #fff;[m
[32m+[m[32m$color-black: #000;[m
[32m+[m[32m// FONT[m
[32m+[m[32m$default-font-size: 1.6rem;[m
[32m+[m[32m// GRID[m
[32m+[m[32m$grid-width: 114rem;[m
[32m+[m[32m$gutter-vertical: 8rem;[m
[32m+[m[32m$gutter-vertical-small: 6rem;[m
[32m+[m[32m$gutter-horizontal: 6rem;[m
[32m+[m[32m$bp-largest: 75em; // 1200px[m
[32m+[m[32m$bp-large: 68.75em; // 1100px[m
[32m+[m[32m$bp-medium: 56.25em; // 900px[m
[32m+[m[32m$bp-small: 37.5em; // 600px[m
[32m+[m[32m$bp-smallest: 31.25em; // 500px[m
[32m+[m[32m:root {[m
[32m+[m[32m    --color-primary-1: #EE9999;[m
[32m+[m[32m    --color-primary-2: #FFFFFF;[m
[32m+[m[32m    --color-primary-3: #D44529;[m
[32m+[m[32m    --color-primary-dark: #BA265D;[m
[32m+[m[32m    --color-grey-light-1: #faf9f9;[m
[32m+[m[32m    --color-grey-light-2: #f4f2f2;[m
[32m+[m[32m    --color-grey-light-3: #f0eeee;[m
[32m+[m[32m    --color-grey-light-4: #ccc;[m
[32m+[m[32m    --color-grey-dark-1: #333;[m
[32m+[m[32m    --color-grey-dark-2: #777;[m
[32m+[m[32m    --color-grey-dark-3: #999;[m
[32m+[m[32m    --shadow-dark: 0 2rem 6rem rgba(0, 0, 0, .3);[m
[32m+[m[32m    --shadow-light: 0 2rem 5rem rgba(0, 0, 0, .06);[m
[32m+[m[32m    --line: 1px solid var(--color-grey-light-2);[m
[32m+[m[32m}[m
\ No newline at end of file[m
[1mdiff --git a/frontend/src/styles/base/_base.scss b/frontend/src/styles/base/_base.scss[m
[1mnew file mode 100644[m
[1mindex 0000000..c523b04[m
[1m--- /dev/null[m
[1m+++ b/frontend/src/styles/base/_base.scss[m
[36m@@ -0,0 +1,76 @@[m
[32m+[m[32m/* fonts */[m
[32m+[m
[32m+[m[32m@font-face {[m
[32m+[m[32m    font-family: 'Quicksand';[m
[32m+[m[32m    src: url('/Quicksand-Light.woff2') format('woff2'), url('/Quicksand-Light.woff') format('woff');[m
[32m+[m[32m    font-weight: 300;[m
[32m+[m[32m    font-style: normal;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m
[32m+[m[32m/* reset & common styles */[m
[32m+[m
[32m+[m[32mbody,[m
[32m+[m[32mul,[m
[32m+[m[32mh1,[m
[32m+[m[32mh2,[m
[32m+[m[32mh3,[m
[32m+[m[32mp,[m
[32m+[m[32mbutton,[m
[32m+[m[32ma,[m
[32m+[m[32mdiv {[m
[32m+[m[32m    margin: 0;[m
[32m+[m[32m    padding: 0;[m
[32m+[m[32m    color: var(--color-grey-dark-2);[m
[32m+[m[32m    background-image: linear-gradient(to right bottom, var(--color-primary-1), var(--color-primary-3));[m
[32m+[m[32m    background-size: cover;[m
[32m+[m[32m    background-repeat: no-repeat;[m
[32m+[m[32m    min-height: 100vh;[m
[32m+[m[32m    //font-family: 'Quicksand';[m
[32m+[m[32m    //font-family: 'Walter Turncoat', cursive !important;[m
[32m+[m[32m    letter-spacing: 2px;[m
[32m+[m[32m    list-style-type: none;[m
[32m+[m[32m    text-decoration: none;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m*,[m
[32m+[m[32m*::before,[m
[32m+[m[32m*::after {[m
[32m+[m[32m    box-sizing: inherit;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32mhtml {[m
[32m+[m[32m    box-sizing: border-box;[m
[32m+[m[32m    font-size: 62.5%; // 1rem = 10px, 10px/16px = 62.5%[m
[32m+[m[32m    @media only screen and (max-width: $bp-large) {[m
[32m+[m[32m        font-size: 50%;[m
[32m+[m[32m    }[m
[32m+[m[32m    @include respond(small-desktop) {[m
[32m+[m[32m        font-size: 59%; //1rem = 12, 12/16[m
[32m+[m[32m    }[m
[32m+[m[32m    @include respond(tab-land) {[m
[32m+[m[32m        // width < 1200?[m
[32m+[m[32m        font-size: 56.25%; //1 rem = 9px, 9/16 = 50%[m
[32m+[m[32m    }[m
[32m+[m[32m    @include respond(tab-port) {[m
[32m+[m[32m        // width < 900?[m
[32m+[m[32m        font-size: 50%; //1 rem = 8px, 8/16 = 50%[m
[32m+[m[32m    }[m
[32m+[m[32m    @include respond(phone) {[m
[32m+[m[32m        // width < 900?[m
[32m+[m[32m        font-size: 36%; //1 rem = 8px, 8/16 = 50%[m
[32m+[m[32m    }[m
[32m+[m[32m    @include respond(small-phone) {[m
[32m+[m[32m        // width < 900?[m
[32m+[m[32m        font-size: 36%; //1 rem = 8px, 8/16 = 50%[m
[32m+[m[32m    }[m
[32m+[m[32m    @include respond(big-desktop) {[m
[32m+[m[32m        font-size: 95%; //1rem = 12, 12/16[m
[32m+[m[32m    }[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32mbody {[m
[32m+[m[32m    /* background: rgb(100, 0, 123); */[m
[32m+[m[32m    background: radial-gradient(circle, #7E57C2 0%, #7E57C2 100%);[m
[32m+[m[32m    overflow: visible;[m
[32m+[m[32m}[m
\ No newline at end of file[m
[1mdiff --git a/frontend/src/styles/css/index.css b/frontend/src/styles/css/index.css[m
[1mnew file mode 100644[m
[1mindex 0000000..723dab6[m
[1m--- /dev/null[m
[1m+++ b/frontend/src/styles/css/index.css[m
[36m@@ -0,0 +1,99 @@[m
[32m+[m[32m/*[m
[32m+[m[32m0 - 600px:      Phone[m
[32m+[m[32m600 - 900px:    Tablet portrait[m
[32m+[m[32m900 - 1200px:   Tablet landscape[m
[32m+[m[32m[1200 - 1800] is where our normal styles apply[m
[32m+[m[32m1800px + :      Big desktop[m
[32m+[m[32m$breakpoint arguement choices:[m
[32m+[m[32m- phone[m
[32m+[m[32m- tab-port[m
[32m+[m[32m- tab-land[m
[32m+[m[32m- big-desktop[m
[32m+[m[32mORDER: Base + typography > general layout + grid > page layout > components[m
[32m+[m[32m1em = 16px[m
[32m+[m[32m*/[m
[32m+[m[32m:root {[m
[32m+[m[32m  --color-primary-1: #EE9999;[m
[32m+[m[32m  --color-primary-2: #FFFFFF;[m
[32m+[m[32m  --color-primary-3: #D44529;[m
[32m+[m[32m  --color-primary-dark: #BA265D;[m
[32m+[m[32m  --color-grey-light-1: #faf9f9;[m
[32m+[m[32m  --color-grey-light-2: #f4f2f2;[m
[32m+[m[32m  --color-grey-light-3: #f0eeee;[m
[32m+[m[32m  --color-grey-light-4: #ccc;[m
[32m+[m[32m  --color-grey-dark-1: #333;[m
[32m+[m[32m  --color-grey-dark-2: #777;[m
[32m+[m[32m  --color-grey-dark-3: #999;[m
[32m+[m[32m  --shadow-dark: 0 2rem 6rem rgba(0, 0, 0, .3);[m
[32m+[m[32m  --shadow-light: 0 2rem 5rem rgba(0, 0, 0, .06);[m
[32m+[m[32m  --line: 1px solid var(--color-grey-light-2); }[m
[32m+[m
[32m+[m[32m/* fonts */[m
[32m+[m[32m@font-face {[m
[32m+[m[32m  font-family: 'Quicksand';[m
[32m+[m[32m  src: url("/Quicksand-Light.woff2") format("woff2"), url("/Quicksand-Light.woff") format("woff");[m
[32m+[m[32m  font-weight: 300;[m
[32m+[m[32m  font-style: normal; }[m
[32m+[m
[32m+[m[32m/* reset & common styles */[m
[32m+[m[32mbody,[m
[32m+[m[32mul,[m
[32m+[m[32mh1,[m
[32m+[m[32mh2,[m
[32m+[m[32mh3,[m
[32m+[m[32mp,[m
[32m+[m[32mbutton,[m
[32m+[m[32ma,[m
[32m+[m[32mdiv {[m
[32m+[m[32m  margin: 0;[m
[32m+[m[32m  padding: 0;[m
[32m+[m[32m  color: var(--color-grey-dark-2);[m
[32m+[m[32m  background-image: linear-gradient(to right bottom, var(--color-primary-1), var(--color-primary-3));[m
[32m+[m[32m  background-size: cover;[m
[32m+[m[32m  background-repeat: no-repeat;[m
[32m+[m[32m  min-height: 100vh;[m
[32m+[m[32m  letter-spacing: 2px;[m
[32m+[m[32m  list-style-type: none;[m
[32m+[m[32m  text-decoration: none; }[m
[32m+[m
[32m+[m[32m*,[m
[32m+[m[32m*::before,[m
[32m+[m[32m*::after {[m
[32m+[m[32m  box-sizing: inherit; }[m
[32m+[m
[32m+[m[32mhtml {[m
[32m+[m[32m  box-sizing: border-box;[m
[32m+[m[32m  font-size: 62.5%; }[m
[32m+[m
[32m+[m[32m@media only screen and (max-width: 68.75em) {[m
[32m+[m[32m  html {[m
[32m+[m[32m    font-size: 50%; } }[m
[32m+[m
[32m+[m[32m@media only screen and (min-width: 90em) {[m
[32m+[m[32m  html {[m
[32m+[m[32m    font-size: 59%; } }[m
[32m+[m
[32m+[m[32m@media only screen and (max-width: 75em) {[m
[32m+[m[32m  html {[m
[32m+[m[32m    font-size: 56.25%; } }[m
[32m+[m
[32m+[m[32m@media only screen and (max-width: 56.25em) {[m
[32m+[m[32m  html {[m
[32m+[m[32m    font-size: 50%; } }[m
[32m+[m
[32m+[m[32m@media only screen and (max-width: 37.5em) {[m
[32m+[m[32m  html {[m
[32m+[m[32m    font-size: 36%; } }[m
[32m+[m
[32m+[m[32m@media only screen and (max-width: 23.75em) {[m
[32m+[m[32m  html {[m
[32m+[m[32m    font-size: 36%; } }[m
[32m+[m
[32m+[m[32m@media only screen and (min-width: 150em) {[m
[32m+[m[32m  html {[m
[32m+[m[32m    font-size: 95%; } }[m
[32m+[m
[32m+[m[32mbody {[m
[32m+[m[32m  /* background: rgb(100, 0, 123); */[m
[32m+[m[32m  background: radial-gradient(circle, #7E57C2 0%, #7E57C2 100%);[m
[32m+[m[32m  overflow: visible; }[m
[1mdiff --git a/frontend/src/styles/css/index.scss b/frontend/src/styles/css/index.scss[m
[1mnew file mode 100644[m
[1mindex 0000000..a955020[m
[1m--- /dev/null[m
[1m+++ b/frontend/src/styles/css/index.scss[m
[36m@@ -0,0 +1,3 @@[m
[32m+[m[32m@import "../abstracts/mixins";[m
[32m+[m[32m@import "../abstracts/variables";[m
[32m+[m[32m@import "../base/base";[m
\ No newline at end of file[m
[1mdiff --git a/package-lock.json b/package-lock.json[m
[1mindex 486108a..27eac87 100644[m
[1m--- a/package-lock.json[m
[1m+++ b/package-lock.json[m
[36m@@ -2,10 +2,235 @@[m
   "requires": true,[m
   "lockfileVersion": 1,[m
   "dependencies": {[m
[32m+[m[32m    "@babel/runtime": {[m
[32m+[m[32m      "version": "7.14.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@babel/runtime/-/runtime-7.14.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-JELkvo/DlpNdJ7dlyw/eY7E0suy5i5GQH+Vlxaq1nsNJ+H7f4Vtv3jMeCEgRhZZQFXTjldYfQgv2qmM6M1v5wA==",[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "regenerator-runtime": "^0.13.4"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "@emotion/is-prop-valid": {[m
[32m+[m[32m      "version": "0.8.8",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@emotion/is-prop-valid/-/is-prop-valid-0.8.8.tgz",[m
[32m+[m[32m      "integrity": "sha512-u5WtneEAr5IDG2Wv65yhunPSMLIpuKsbuOktRojfrEiEvRyC85LgPMZI63cr7NUqT8ZIGdSVg8ZKGxIug4lXcA==",[m
[32m+[m[32m      "optional": true,[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "@emotion/memoize": "0.7.4"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "@emotion/memoize": {[m
[32m+[m[32m      "version": "0.7.4",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@emotion/memoize/-/memoize-0.7.4.tgz",[m
[32m+[m[32m      "integrity": "sha512-Ja/Vfqe3HpuzRsG1oBtWTHk2PGZ7GR+2Vz5iYGelAw8dx32K0y7PjVuxK6z1nMpZOqAFsRUPCkK1YjJ56qJlgw==",[m
[32m+[m[32m      "optional": true[m
[32m+[m[32m    },[m
     "@types/node": {[m
       "version": "15.0.1",[m
       "resolved": "https://registry.npmjs.org/@types/node/-/node-15.0.1.tgz",[m
       "integrity": "sha512-TMkXt0Ck1y0KKsGr9gJtWGjttxlZnnvDtphxUOSd0bfaR6Q1jle+sPvrzNR1urqYTWMinoKvjKfXUGsumaO1PA=="[m
[32m+[m[32m    },[m
[32m+[m[32m    "framer-motion": {[m
[32m+[m[32m      "version": "4.1.11",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/framer-motion/-/framer-motion-4.1.11.tgz",[m
[32m+[m[32m      "integrity": "sha512-7N67I8PUNH3OT0RTlNB672k5UiuWg5B17c+9Lc6BjICRo66gKeiq/Hy091lWCqNuSLEO59F9z39zxb3wMg6Tjg==",[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "@emotion/is-prop-valid": "^0.8.2",[m
[32m+[m[32m        "framesync": "5.3.0",[m
[32m+[m[32m        "hey-listen": "^1.0.8",[m
[32m+[m[32m        "popmotion": "9.3.5",[m
[32m+[m[32m        "style-value-types": "4.1.4",[m
[32m+[m[32m        "tslib": "^2.1.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "framesync": {[m
[32m+[m[32m      "version": "5.3.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/framesync/-/framesync-5.3.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-oc5m68HDO/tuK2blj7ZcdEBRx3p1PjrgHazL8GYEpvULhrtGIFbQArN6cQS2QhW8mitffaB+VYzMjDqBxxQeoA==",[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "tslib": "^2.1.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "hey-listen": {[m
[32m+[m[32m      "version": "1.0.8",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/hey-listen/-/hey-listen-1.0.8.tgz",[m
[32m+[m[32m      "integrity": "sha512-COpmrF2NOg4TBWUJ5UVyaCU2A88wEMkUPK4hNqyCkqHbxT92BbvfjoSozkAIIm6XhicGlJHhFdullInrdhwU8Q=="[m
[32m+[m[32m    },[m
[32m+[m[32m    "history": {[m
[32m+[m[32m      "version": "4.10.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/history/-/history-4.10.1.tgz",[m
[32m+[m[32m      "integrity": "sha512-36nwAD620w12kuzPAsyINPWJqlNbij+hpK1k9XRloDtym8mxzGYl2c17LnV6IAGB2Dmg4tEa7G7DlawS0+qjew==",[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "@babel/runtime": "^7.1.2",[m
[32m+[m[32m        "loose-envify": "^1.2.0",[m
[32m+[m[32m        "resolve-pathname": "^3.0.0",[m
[32m+[m[32m        "tiny-invariant": "^1.0.2",[m
[32m+[m[32m        "tiny-warning": "^1.0.0",[m
[32m+[m[32m        "value-equal": "^1.0.1"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "hoist-non-react-statics": {[m
[32m+[m[32m      "version": "3.3.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/hoist-non-react-statics/-/hoist-non-react-statics-3.3.2.tgz",[m
[32m+[m[32m      "integrity": "sha512-/gGivxi8JPKWNm/W0jSmzcMPpfpPLc3dY/6GxhX2hQ9iGj3aDfklV4ET7NjKpSinLpJ5vafa9iiGIEZg10SfBw==",[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "react-is": "^16.7.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "isarray": {[m
[32m+[m[32m      "version": "0.0.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/isarray/-/isarray-0.0.1.tgz",[m
[32m+[m[32m      "integrity": "sha1-ihis/Kmo9Bd+Cav8YDiTmwXR7t8="[m
[32m+[m[32m    },[m
[32m+[m[32m    "js-tokens": {[m
[32m+[m[32m      "version": "4.0.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/js-tokens/-/js-tokens-4.0.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-RdJUflcE3cUzKiMqQgsCu06FPu9UdIJO0beYbPhHN4k6apgJtifcoCtT9bcxOpYBtpD2kCM6Sbzg4CausW/PKQ=="[m
[32m+[m[32m    },[m
[32m+[m[32m    "loose-envify": {[m
[32m+[m[32m      "version": "1.4.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/loose-envify/-/loose-envify-1.4.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-lyuxPGr/Wfhrlem2CL/UcnUc1zcqKAImBDzukY7Y5F/yQiNdko6+fRLevlw1HgMySw7f611UIY408EtxRSoK3Q==",[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "js-tokens": "^3.0.0 || ^4.0.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "mini-create-react-context": {[m
[32m+[m[32m      "version": "0.4.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/mini-create-react-context/-/mini-create-react-context-0.4.1.tgz",[m
[32m+[m[32m      "integrity": "sha512-YWCYEmd5CQeHGSAKrYvXgmzzkrvssZcuuQDDeqkT+PziKGMgE+0MCCtcKbROzocGBG1meBLl2FotlRwf4gAzbQ==",[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "@babel/runtime": "^7.12.1",[m
[32m+[m[32m        "tiny-warning": "^1.0.3"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "object-assign": {[m
[32m+[m[32m      "version": "4.1.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/object-assign/-/object-assign-4.1.1.tgz",[m
[32m+[m[32m      "integrity": "sha1-IQmtx5ZYh8/AXLvUQsrIv7s2CGM="[m
[32m+[m[32m    },[m
[32m+[m[32m    "path-to-regexp": {[m
[32m+[m[32m      "version": "1.8.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/path-to-regexp/-/path-to-regexp-1.8.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-n43JRhlUKUAlibEJhPeir1ncUID16QnEjNpwzNdO3Lm4ywrBpBZ5oLD0I6br9evr1Y9JTqwRtAh7JLoOzAQdVA==",[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "isarray": "0.0.1"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "popmotion": {[m
[32m+[m[32m      "version": "9.3.5",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/popmotion/-/popmotion-9.3.5.tgz",[m
[32m+[m[32m      "integrity": "sha512-Lr2rq8OP0j8D7CO2/6eO17ALeFCxjx1hfTGbMg+TLqFj+KZSGOoj6gRBVTzDINGqo6LQrORQSSSDaCL5OrB3bw==",[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "framesync": "5.3.0",[m
[32m+[m[32m        "hey-listen": "^1.0.8",[m
[32m+[m[32m        "style-value-types": "4.1.4",[m
[32m+[m[32m        "tslib": "^2.1.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "prop-types": {[m
[32m+[m[32m      "version": "15.7.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/prop-types/-/prop-types-15.7.2.tgz",[m
[32m+[m[32m      "integrity": "sha512-8QQikdH7//R2vurIJSutZ1smHYTcLpRWEOlHnzcWHmBYrOGUysKwSsrC89BCiFj3CbrfJ/nXFdJepOVrY1GCHQ==",[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "loose-envify": "^1.4.0",[m
[32m+[m[32m        "object-assign": "^4.1.1",[m
[32m+[m[32m        "react-is": "^16.8.1"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "react-dom": {[m
[32m+[m[32m      "version": "17.0.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/react-dom/-/react-dom-17.0.2.tgz",[m
[32m+[m[32m      "integrity": "sha512-s4h96KtLDUQlsENhMn1ar8t2bEa+q/YAtj8pPPdIjPDGBDIVNsrD9aXNWqspUe6AzKCIG0C1HZZLqLV7qpOBGA==",[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "loose-envify": "^1.1.0",[m
[32m+[m[32m        "object-assign": "^4.1.1",[m
[32m+[m[32m        "scheduler": "^0.20.2"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "react-is": {[m
[32m+[m[32m      "version": "16.13.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/react-is/-/react-is-16.13.1.tgz",[m
[32m+[m[32m      "integrity": "sha512-24e6ynE2H+OKt4kqsOvNd8kBpV65zoxbA4BVsEOB3ARVWQki/DHzaUoC5KuON/BiccDaCCTZBuOcfZs70kR8bQ=="[m
[32m+[m[32m    },[m
[32m+[m[32m    "react-router": {[m
[32m+[m[32m      "version": "5.2.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/react-router/-/react-router-5.2.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-smz1DUuFHRKdcJC0jobGo8cVbhO3x50tCL4icacOlcwDOEQPq4TMqwx3sY1TP+DvtTgz4nm3thuo7A+BK2U0Dw==",[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "@babel/runtime": "^7.1.2",[m
[32m+[m[32m        "history": "^4.9.0",[m
[32m+[m[32m        "hoist-non-react-statics": "^3.1.0",[m
[32m+[m[32m        "loose-envify": "^1.3.1",[m
[32m+[m[32m        "mini-create-react-context": "^0.4.0",[m
[32m+[m[32m        "path-to-regexp": "^1.7.0",[m
[32m+[m[32m        "prop-types": "^15.6.2",[m
[32m+[m[32m        "react-is": "^16.6.0",[m
[32m+[m[32m        "tiny-invariant": "^1.0.2",[m
[32m+[m[32m        "tiny-warning": "^1.0.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "react-router-dom": {[m
[32m+[m[32m      "version": "5.2.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/react-router-dom/-/react-router-dom-5.2.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-gxAmfylo2QUjcwxI63RhQ5G85Qqt4voZpUXSEqCwykV0baaOTQDR1f0PmY8AELqIyVc0NEZUj0Gov5lNGcXgsA==",[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "@babel/runtime": "^7.1.2",[m
[32m+[m[32m        "history": "^4.9.0",[m
[32m+[m[32m        "loose-envify": "^1.3.1",[m
[32m+[m[32m        "prop-types": "^15.6.2",[m
[32m+[m[32m        "react-router": "5.2.0",[m
[32m+[m[32m        "tiny-invariant": "^1.0.2",[m
[32m+[m[32m        "tiny-warning": "^1.0.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "regenerator-runtime": {[m
[32m+[m[32m      "version": "0.13.7",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/regenerator-runtime/-/regenerator-runtime-0.13.7.tgz",[m
[32m+[m[32m      "integrity": "sha512-a54FxoJDIr27pgf7IgeQGxmqUNYrcV338lf/6gH456HZ/PhX+5BcwHXG9ajESmwe6WRO0tAzRUrRmNONWgkrew=="[m
[32m+[m[32m    },[m
[32m+[m[32m    "resolve-pathname": {[m
[32m+[m[32m      "version": "3.0.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/resolve-pathname/-/resolve-pathname-3.0.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-C7rARubxI8bXFNB/hqcp/4iUeIXJhJZvFPFPiSPRnhU5UPxzMFIl+2E6yY6c4k9giDJAhtV+enfA+G89N6Csng=="[m
[32m+[m[32m    },[m
[32m+[m[32m    "scheduler": {[m
[32m+[m[32m      "version": "0.20.2",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/scheduler/-/scheduler-0.20.2.tgz",[m
[32m+[m[32m      "integrity": "sha512-2eWfGgAqqWFGqtdMmcL5zCMK1U8KlXv8SQFGglL3CEtd0aDVDWgeF/YoCmvln55m5zSk3J/20hTaSBeSObsQDQ==",[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "loose-envify": "^1.1.0",[m
[32m+[m[32m        "object-assign": "^4.1.1"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "style-value-types": {[m
[32m+[m[32m      "version": "4.1.4",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/style-value-types/-/style-value-types-4.1.4.tgz",[m
[32m+[m[32m      "integrity": "sha512-LCJL6tB+vPSUoxgUBt9juXIlNJHtBMy8jkXzUJSBzeHWdBu6lhzHqCvLVkXFGsFIlNa2ln1sQHya/gzaFmB2Lg==",[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "hey-listen": "^1.0.8",[m
[32m+[m[32m        "tslib": "^2.1.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "tiny-invariant": {[m
[32m+[m[32m      "version": "1.1.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/tiny-invariant/-/tiny-invariant-1.1.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-ytxQvrb1cPc9WBEI/HSeYYoGD0kWnGEOR8RY6KomWLBVhqz0RgTwVO9dLrGz7dC+nN9llyI7OKAgRq8Vq4ZBSw=="[m
[32m+[m[32m    },[m
[32m+[m[32m    "tiny-warning": {[m
[32m+[m[32m      "version": "1.0.3",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/tiny-warning/-/tiny-warning-1.0.3.tgz",[m
[32m+[m[32m      "integrity": "sha512-lBN9zLN/oAf68o3zNXYrdCt1kP8WsiGW8Oo2ka41b2IM5JL/S1CTyX1rW0mb/zSuJun0ZUrDxx4sqvYS2FWzPA=="[m
[32m+[m[32m    },[m
[32m+[m[32m    "tslib": {[m
[32m+[m[32m      "version": "2.2.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/tslib/-/tslib-2.2.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-gS9GVHRU+RGn5KQM2rllAlR3dU6m7AcpJKdtH8gFvQiC4Otgk98XnmMU+nZenHt/+VhnBPWwgrJsyrdcw6i23w=="[m
[32m+[m[32m    },[m
[32m+[m[32m    "value-equal": {[m
[32m+[m[32m      "version": "1.0.1",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/value-equal/-/value-equal-1.0.1.tgz",[m
[32m+[m[32m      "integrity": "sha512-NOJ6JZCAWr0zlxZt+xqCHNTEKOsrks2HQd4MqhP1qy4z1SkbEP467eNx6TgDKXMvUOb+OENfJCZwM+16n7fRfw=="[m
     }[m
   }[m
 }[m
[1mdiff --git a/package.json b/package.json[m
[1mindex 39fc270..5ad728e 100644[m
[1m--- a/package.json[m
[1m+++ b/package.json[m
[36m@@ -1,5 +1,8 @@[m
 {[m
   "dependencies": {[m
[31m-    "@types/node": "^15.0.1"[m
[32m+[m[32m    "@types/node": "^15.0.1",[m
[32m+[m[32m    "framer-motion": "^4.1.11",[m
[32m+[m[32m    "react-dom": "^17.0.2",[m
[32m+[m[32m    "react-router-dom": "^5.2.0"[m
   }[m
 }[m

[33mcommit 5efb89d7e8406de6601514d0f11b32351d77ece8[m
Author: utpandey <utsavpandey8@gmail.com>
Date:   Thu Apr 29 01:21:47 2021 +0530

    ts and scss added

[1mdiff --git a/frontend/.gitignore b/frontend/.gitignore[m
[1mindex 4d29575..3ba581d 100644[m
[1m--- a/frontend/.gitignore[m
[1m+++ b/frontend/.gitignore[m
[36m@@ -21,3 +21,9 @@[m
 npm-debug.log*[m
 yarn-debug.log*[m
 yarn-error.log*[m
[32m+[m
[32m+[m[32mnode_modules[m
[32m+[m
[32m+[m[32m#Hardhat files[m
[32m+[m[32mcache[m
[32m+[m[32martifacts[m
[1mdiff --git a/frontend/README.md b/frontend/README.md[m
[1mindex b58e0af..02aac3f 100644[m
[1m--- a/frontend/README.md[m
[1m+++ b/frontend/README.md[m
[36m@@ -44,3 +44,27 @@[m [mYou don’t have to ever use `eject`. The curated feature set is suitable for sm[m
 You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).[m
 [m
 To learn React, check out the [React documentation](https://reactjs.org/).[m
[32m+[m
[32m+[m[32m### Code Splitting[m
[32m+[m
[32m+[m[32mThis section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)[m
[32m+[m
[32m+[m[32m### Analyzing the Bundle Size[m
[32m+[m
[32m+[m[32mThis section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)[m
[32m+[m
[32m+[m[32m### Making a Progressive Web App[m
[32m+[m
[32m+[m[32mThis section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)[m
[32m+[m
[32m+[m[32m### Advanced Configuration[m
[32m+[m
[32m+[m[32mThis section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)[m
[32m+[m
[32m+[m[32m### Deployment[m
[32m+[m
[32m+[m[32mThis section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)[m
[32m+[m
[32m+[m[32m### `yarn build` fails to minify[m
[32m+[m
[32m+[m[32mThis section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)[m
[1mdiff --git a/frontend/contracts/Greeter.sol b/frontend/contracts/Greeter.sol[m
[1mnew file mode 100644[m
[1mindex 0000000..e3d9298[m
[1m--- /dev/null[m
[1m+++ b/frontend/contracts/Greeter.sol[m
[36m@@ -0,0 +1,22 @@[m
[32m+[m[32m//SPDX-License-Identifier: Unlicense[m
[32m+[m[32mpragma solidity ^0.8.3;[m
[32m+[m
[32m+[m[32mimport "hardhat/console.sol";[m
[32m+[m
[32m+[m[32mcontract Greeter {[m
[32m+[m[32m    string greeting;[m
[32m+[m
[32m+[m[32m    constructor(string memory _greeting) {[m
[32m+[m[32m        console.log("Deploying a Greeter with greeting:", _greeting);[m
[32m+[m[32m        greeting = _greeting;[m
[32m+[m[32m    }[m
[32m+[m
[32m+[m[32m    function greet() public view returns (string memory) {[m
[32m+[m[32m        return greeting;[m
[32m+[m[32m    }[m
[32m+[m
[32m+[m[32m    function setGreeting(string memory _greeting) public {[m
[32m+[m[32m        console.log("Changing greeting from '%s' to '%s'", greeting, _greeting);[m
[32m+[m[32m        greeting = _greeting;[m
[32m+[m[32m    }[m
[32m+[m[32m}[m
[1mdiff --git a/frontend/contracts/Token.sol b/frontend/contracts/Token.sol[m
[1mnew file mode 100644[m
[1mindex 0000000..c3052ec[m
[1m--- /dev/null[m
[1m+++ b/frontend/contracts/Token.sol[m
[36m@@ -0,0 +1,27 @@[m
[32m+[m[32m//SPDX-License-Identifier: Unlicense[m
[32m+[m[32mpragma solidity ^0.8.3;[m
[32m+[m
[32m+[m[32mimport "hardhat/console.sol";[m
[32m+[m
[32m+[m[32mcontract Token {[m
[32m+[m[32m  string public name = "Utshav Pandey Token";[m
[32m+[m[32m  string public symbol = "UPT";[m
[32m+[m[32m  uint public totalSupply = 1000000;[m
[32m+[m[32m  address public owner;[m
[32m+[m[32m  mapping(address => uint) balances;[m[41m  [m
[32m+[m
[32m+[m[32m  constructor() {[m
[32m+[m[32m    balances[msg.sender] = totalSupply;[m
[32m+[m[32m    // owner = msg.sender;[m
[32m+[m[32m  }[m
[32m+[m
[32m+[m[32m  function transfer(address to, uint amount) external {[m
[32m+[m[32m    require(balances[msg.sender] >= amount, "Not enough tokens");[m
[32m+[m[32m    balances[msg.sender] -= amount;[m
[32m+[m[32m    balances[to] += amount;[m
[32m+[m[32m  }[m
[32m+[m
[32m+[m[32m  function balanceOf(address account) external view returns (uint) {[m
[32m+[m[32m    return balances[account];[m
[32m+[m[32m  }[m
[32m+[m[32m}[m
\ No newline at end of file[m
[1mdiff --git a/frontend/contracts/UPToken.sol b/frontend/contracts/UPToken.sol[m
[1mnew file mode 100644[m
[1mindex 0000000..c7498ba[m
[1m--- /dev/null[m
[1m+++ b/frontend/contracts/UPToken.sol[m
[36m@@ -0,0 +1,10 @@[m
[32m+[m[32m//SPDX-License-Identifier: Unlicense[m
[32m+[m[32mpragma solidity ^0.8.3;[m
[32m+[m
[32m+[m[32mimport "@openzeppelin/contracts/token/ERC20/ERC20.sol";[m
[32m+[m
[32m+[m[32mcontract UPToken is ERC20 {[m
[32m+[m[32m    constructor(string memory name, string memory symbol) ERC20(name, symbol) {[m
[32m+[m[32m        _mint(msg.sender, 100000 * (10 ** 18));[m
[32m+[m[32m    }[m
[32m+[m[32m}[m
\ No newline at end of file[m
[1mdiff --git a/frontend/hardhat.config.js b/frontend/hardhat.config.js[m
[1mnew file mode 100644[m
[1mindex 0000000..7dc7c5c[m
[1m--- /dev/null[m
[1m+++ b/frontend/hardhat.config.js[m
[36m@@ -0,0 +1,35 @@[m
[32m+[m[32mrequire("@nomiclabs/hardhat-waffle");[m
[32m+[m
[32m+[m[32m// This is a sample Hardhat task. To learn how to create your own go to[m
[32m+[m[32m// https://hardhat.org/guides/create-task.html[m
[32m+[m[32mtask("accounts", "Prints the list of accounts", async() => {[m
[32m+[m[32m    const accounts = await ethers.getSigners();[m
[32m+[m
[32m+[m[32m    for (const account of accounts) {[m
[32m+[m[32m        console.log(account.address);[m
[32m+[m[32m    }[m
[32m+[m[32m});[m
[32m+[m
[32m+[m[32m// You need to export an object to set up your config[m
[32m+[m[32m// Go to https://hardhat.org/config/ to learn more[m
[32m+[m
[32m+[m[32m/**[m
[32m+[m[32m * @type import('hardhat/config').HardhatUserConfig[m
[32m+[m[32m */[m
[32m+[m[32mmodule.exports = {[m
[32m+[m[32m    solidity: "0.8.3",[m
[32m+[m[32m    paths: {[m
[32m+[m[32m        artifacts: './src/artifacts',[m
[32m+[m[32m    },[m
[32m+[m[32m    networks: {[m
[32m+[m[32m        hardhat: {[m
[32m+[m[32m            chainId: 1337[m
[32m+[m[32m        },[m
[32m+[m[32m        ropsten: {[m
[32m+[m[32m            url: "https://ropsten.infura.io/v3/b64c1b1e360a40cd8338ca8e72b83db4",[m
[32m+[m[32m            // accounts: [`0x${process.env.ACCOUNT_KEY}`][m
[32m+[m[32m            // accounts: ["1a05dad6f74f17415d7a1d6a7b026c6c28ead92ed0d6224035c68f51f834cc75"][m
[32m+[m[32m            accounts: ["37f669b41dfabedbe1d3a8f576315afb5ce46463019b306c3736b9ce95b95586"][m
[32m+[m[32m        }[m
[32m+[m[32m    }[m
[32m+[m[32m};[m
\ No newline at end of file[m
[1mdiff --git a/frontend/package-lock.json b/frontend/package-lock.json[m
[1mnew file mode 100644[m
[1mindex 0000000..871ff97[m
[1m--- /dev/null[m
[1m+++ b/frontend/package-lock.json[m
[36m@@ -0,0 +1,36454 @@[m
[32m+[m[32m{[m
[32m+[m[32m  "name": "react-dapp",[m
[32m+[m[32m  "version": "0.1.0",[m
[32m+[m[32m  "lockfileVersion": 1,[m
[32m+[m[32m  "requires": true,[m
[32m+[m[32m  "dependencies": {[m
[32m+[m[32m    "@babel/code-frame": {[m
[32m+[m[32m      "version": "7.12.13",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@babel/code-frame/-/code-frame-7.12.13.tgz",[m
[32m+[m[32m      "integrity": "sha512-HV1Cm0Q3ZrpCR93tkWOYiuYIgLxZXZFVG2VgK+MBWjUqZTundupbfx2aXarXuw5Ko5aMcjtJgbSs4vUGBS5v6g==",[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "@babel/highlight": "^7.12.13"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "@babel/compat-data": {[m
[32m+[m[32m      "version": "7.13.15",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@babel/compat-data/-/compat-data-7.13.15.tgz",[m
[32m+[m[32m      "integrity": "sha512-ltnibHKR1VnrU4ymHyQ/CXtNXI6yZC0oJThyW78Hft8XndANwi+9H+UIklBDraIjFEJzw8wmcM427oDd9KS5wA=="[m
[32m+[m[32m    },[m
[32m+[m[32m    "@babel/core": {[m
[32m+[m[32m      "version": "7.12.3",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@babel/core/-/core-7.12.3.tgz",[m
[32m+[m[32m      "integrity": "sha512-0qXcZYKZp3/6N2jKYVxZv0aNCsxTSVCiK72DTiTYZAu7sjg73W0/aynWjMbiGd87EQL4WyA8reiJVh92AVla9g==",[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "@babel/code-frame": "^7.10.4",[m
[32m+[m[32m        "@babel/generator": "^7.12.1",[m
[32m+[m[32m        "@babel/helper-module-transforms": "^7.12.1",[m
[32m+[m[32m        "@babel/helpers": "^7.12.1",[m
[32m+[m[32m        "@babel/parser": "^7.12.3",[m
[32m+[m[32m        "@babel/template": "^7.10.4",[m
[32m+[m[32m        "@babel/traverse": "^7.12.1",[m
[32m+[m[32m        "@babel/types": "^7.12.1",[m
[32m+[m[32m        "convert-source-map": "^1.7.0",[m
[32m+[m[32m        "debug": "^4.1.0",[m
[32m+[m[32m        "gensync": "^1.0.0-beta.1",[m
[32m+[m[32m        "json5": "^2.1.2",[m
[32m+[m[32m        "lodash": "^4.17.19",[m
[32m+[m[32m        "resolve": "^1.3.2",[m
[32m+[m[32m        "semver": "^5.4.1",[m
[32m+[m[32m        "source-map": "^0.5.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "lodash": {[m
[32m+[m[32m          "version": "4.17.21",[m
[32m+[m[32m          "resolved": "https://registry.npmjs.org/lodash/-/lodash-4.17.21.tgz",[m
[32m+[m[32m          "integrity": "sha512-v2kDEe57lecTulaDIuNTPy3Ry4gLGJ6Z1O3vE1krgXZNrsQ+LFTGHVxVjcXPs17LhbZVGedAJv8XZ1tvj5FvSg=="[m
[32m+[m[32m        },[m
[32m+[m[32m        "semver": {[m
[32m+[m[32m          "version": "5.7.1",[m
[32m+[m[32m          "resolved": "https://registry.npmjs.org/semver/-/semver-5.7.1.tgz",[m
[32m+[m[32m          "integrity": "sha512-sauaDf/PZdVgrLTNYHRtpXa1iRiKcaebiKQ1BJdpQlWH2lCvexQdX55snPFyK7QzpudqbCI0qXFfOasHdyNDGQ=="[m
[32m+[m[32m        },[m
[32m+[m[32m        "source-map": {[m
[32m+[m[32m          "version": "0.5.7",[m
[32m+[m[32m          "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.5.7.tgz",[m
[32m+[m[32m          "integrity": "sha1-igOdLRAh0i0eoUyA2OpGi6LvP8w="[m
[32m+[m[32m        }[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "@babel/generator": {[m
[32m+[m[32m      "version": "7.13.16",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@babel/generator/-/generator-7.13.16.tgz",[m
[32m+[m[32m      "integrity": "sha512-grBBR75UnKOcUWMp8WoDxNsWCFl//XCK6HWTrBQKTr5SV9f5g0pNOjdyzi/DTBv12S9GnYPInIXQBTky7OXEMg==",[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "@babel/types": "^7.13.16",[m
[32m+[m[32m        "jsesc": "^2.5.1",[m
[32m+[m[32m        "source-map": "^0.5.0"[m
[32m+[m[32m      },[m
[32m+[m[32m      "dependencies": {[m
[32m+[m[32m        "source-map": {[m
[32m+[m[32m          "version": "0.5.7",[m
[32m+[m[32m          "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.5.7.tgz",[m
[32m+[m[32m          "integrity": "sha1-igOdLRAh0i0eoUyA2OpGi6LvP8w="[m
[32m+[m[32m        }[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "@babel/helper-annotate-as-pure": {[m
[32m+[m[32m      "version": "7.12.13",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@babel/helper-annotate-as-pure/-/helper-annotate-as-pure-7.12.13.tgz",[m
[32m+[m[32m      "integrity": "sha512-7YXfX5wQ5aYM/BOlbSccHDbuXXFPxeoUmfWtz8le2yTkTZc+BxsiEnENFoi2SlmA8ewDkG2LgIMIVzzn2h8kfw==",[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "@babel/types": "^7.12.13"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "@babel/helper-builder-binary-assignment-operator-visitor": {[m
[32m+[m[32m      "version": "7.12.13",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@babel/helper-builder-binary-assignment-operator-visitor/-/helper-builder-binary-assignment-operator-visitor-7.12.13.tgz",[m
[32m+[m[32m      "integrity": "sha512-CZOv9tGphhDRlVjVkAgm8Nhklm9RzSmWpX2my+t7Ua/KT616pEzXsQCjinzvkRvHWJ9itO4f296efroX23XCMA==",[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "@babel/helper-explode-assignable-expression": "^7.12.13",[m
[32m+[m[32m        "@babel/types": "^7.12.13"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "@babel/helper-compilation-targets": {[m
[32m+[m[32m      "version": "7.13.16",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@babel/helper-compilation-targets/-/helper-compilation-targets-7.13.16.tgz",[m
[32m+[m[32m      "integrity": "sha512-3gmkYIrpqsLlieFwjkGgLaSHmhnvlAYzZLlYVjlW+QwI+1zE17kGxuJGmIqDQdYp56XdmGeD+Bswx0UTyG18xA==",[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "@babel/compat-data": "^7.13.15",[m
[32m+[m[32m        "@babel/helper-validator-option": "^7.12.17",[m
[32m+[m[32m        "browserslist": "^4.14.5",[m
[32m+[m[32m        "semver": "^6.3.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "@babel/helper-create-class-features-plugin": {[m
[32m+[m[32m      "version": "7.13.11",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@babel/helper-create-class-features-plugin/-/helper-create-class-features-plugin-7.13.11.tgz",[m
[32m+[m[32m      "integrity": "sha512-ays0I7XYq9xbjCSvT+EvysLgfc3tOkwCULHjrnscGT3A9qD4sk3wXnJ3of0MAWsWGjdinFvajHU2smYuqXKMrw==",[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "@babel/helper-function-name": "^7.12.13",[m
[32m+[m[32m        "@babel/helper-member-expression-to-functions": "^7.13.0",[m
[32m+[m[32m        "@babel/helper-optimise-call-expression": "^7.12.13",[m
[32m+[m[32m        "@babel/helper-replace-supers": "^7.13.0",[m
[32m+[m[32m        "@babel/helper-split-export-declaration": "^7.12.13"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "@babel/helper-create-regexp-features-plugin": {[m
[32m+[m[32m      "version": "7.12.17",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@babel/helper-create-regexp-features-plugin/-/helper-create-regexp-features-plugin-7.12.17.tgz",[m
[32m+[m[32m      "integrity": "sha512-p2VGmBu9oefLZ2nQpgnEnG0ZlRPvL8gAGvPUMQwUdaE8k49rOMuZpOwdQoy5qJf6K8jL3bcAMhVUlHAjIgJHUg==",[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "@babel/helper-annotate-as-pure": "^7.12.13",[m
[32m+[m[32m        "regexpu-core": "^4.7.1"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "@babel/helper-define-polyfill-provider": {[m
[32m+[m[32m      "version": "0.2.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@babel/helper-define-polyfill-provider/-/helper-define-polyfill-provider-0.2.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-JT8tHuFjKBo8NnaUbblz7mIu1nnvUDiHVjXXkulZULyidvo/7P6TY7+YqpV37IfF+KUFxmlK04elKtGKXaiVgw==",[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "@babel/helper-compilation-targets": "^7.13.0",[m
[32m+[m[32m        "@babel/helper-module-imports": "^7.12.13",[m
[32m+[m[32m        "@babel/helper-plugin-utils": "^7.13.0",[m
[32m+[m[32m        "@babel/traverse": "^7.13.0",[m
[32m+[m[32m        "debug": "^4.1.1",[m
[32m+[m[32m        "lodash.debounce": "^4.0.8",[m
[32m+[m[32m        "resolve": "^1.14.2",[m
[32m+[m[32m        "semver": "^6.1.2"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "@babel/helper-explode-assignable-expression": {[m
[32m+[m[32m      "version": "7.13.0",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@babel/helper-explode-assignable-expression/-/helper-explode-assignable-expression-7.13.0.tgz",[m
[32m+[m[32m      "integrity": "sha512-qS0peLTDP8kOisG1blKbaoBg/o9OSa1qoumMjTK5pM+KDTtpxpsiubnCGP34vK8BXGcb2M9eigwgvoJryrzwWA==",[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "@babel/types": "^7.13.0"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "@babel/helper-function-name": {[m
[32m+[m[32m      "version": "7.12.13",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@babel/helper-function-name/-/helper-function-name-7.12.13.tgz",[m
[32m+[m[32m      "integrity": "sha512-TZvmPn0UOqmvi5G4vvw0qZTpVptGkB1GL61R6lKvrSdIxGm5Pky7Q3fpKiIkQCAtRCBUwB0PaThlx9vebCDSwA==",[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "@babel/helper-get-function-arity": "^7.12.13",[m
[32m+[m[32m        "@babel/template": "^7.12.13",[m
[32m+[m[32m        "@babel/types": "^7.12.13"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "@babel/helper-get-function-arity": {[m
[32m+[m[32m      "version": "7.12.13",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@babel/helper-get-function-arity/-/helper-get-function-arity-7.12.13.tgz",[m
[32m+[m[32m      "integrity": "sha512-DjEVzQNz5LICkzN0REdpD5prGoidvbdYk1BVgRUOINaWJP2t6avB27X1guXK1kXNrX0WMfsrm1A/ZBthYuIMQg==",[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "@babel/types": "^7.12.13"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "@babel/helper-hoist-variables": {[m
[32m+[m[32m      "version": "7.13.16",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@babel/helper-hoist-variables/-/helper-hoist-variables-7.13.16.tgz",[m
[32m+[m[32m      "integrity": "sha512-1eMtTrXtrwscjcAeO4BVK+vvkxaLJSPFz1w1KLawz6HLNi9bPFGBNwwDyVfiu1Tv/vRRFYfoGaKhmAQPGPn5Wg==",[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "@babel/traverse": "^7.13.15",[m
[32m+[m[32m        "@babel/types": "^7.13.16"[m
[32m+[m[32m      }[m
[32m+[m[32m    },[m
[32m+[m[32m    "@babel/helper-member-expression-to-functions": {[m
[32m+[m[32m      "version": "7.13.12",[m
[32m+[m[32m      "resolved": "https://registry.npmjs.org/@babel/helper-member-expression-to-functions/-/helper-member-expression-to-functions-7.13.12.tgz",[m
[32m+[m[32m      "integrity": "sha512-48ql1CLL59aKbU94Y88Xgb2VFy7a95ykGRbJJaaVv+LX5U8wFpLfiGXJJGUozsmA1oEh/o5Bp60Voq7ACyA/Sw==",[m
[32m+[m[32m      "requires": {[m
[32m+[m[32m        "@babel/types": "^7.13.12"