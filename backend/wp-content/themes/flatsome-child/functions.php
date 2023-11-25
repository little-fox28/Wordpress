<?php
// Add custom Theme Functions here

function display_recently_viewed_products() {
    if ( function_exists('woocommerce_recently_viewed_products') ) {
        echo '<h2>Recently Viewed Products</h2>';
        echo do_shortcode('[woocommerce_recently_viewed_products per_page="4"]');
    }
}

add_action('woocommerce_before_single_product', 'display_recently_viewed_products');
