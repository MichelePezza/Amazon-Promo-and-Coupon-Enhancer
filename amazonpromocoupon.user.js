// ==UserScript==
// @name         Amazon Promo and Coupon Enhancer
// @namespace    amazonpromocoupon
// @version      0.1
// @description  Make Amazon promo codes and coupons more visible + autoclick on coupon checkboxes
// @author       Michele Pezza
// @include        *://*.amazon.tld/*
// ==/UserScript==

(function() {
    'use strict';

    // Wait until the document is fully loaded before applying styles and extracting coupon information
    window.addEventListener('load', function() {


        //Define Style and append it to the document head:
        //Pulse animation
        //font and line-height size for promocodes and coupons badge
        var style = document.createElement('style');
        style.textContent = `
            :root {--mp-mysize: 22px;}
            @keyframes pulse {
                from {transform: scale(0.8);}
                to   {transform: scale(1.2);}
            }
            [id^="greenBadge"],
            .newCouponBadge {
                animation: pulse 1s infinite ease-in-out alternate;;
            }
            .newCouponBadge,
            [id^="promoMessage"],
            [id^="greenBadge"],
            [id^="couponText"]
            {font-size:  var(--mp-mysize) !important;
            line-height: calc(var(--mp-mysize) + 4px)} !important;}
        `;
        document.head.appendChild(style);


        // Product pages
        document.querySelectorAll('input[id^="checkboxpctch"]').forEach((checkbox) => {
            checkbox.click();
        });

        // Cart page
        document.querySelectorAll('.sc-coupon-wrapper a.sc-action-link').forEach(
            (link) => {
            link.click();
        });
    });
})();