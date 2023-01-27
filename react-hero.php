<?php

/**
 * Plugin Name: React Hero
 * Plugin URI: a url
 * Description: A react application
 * Version: 0.1
 * Text Domain: React Hero
 * Author: Emanuele Del Monte
 * Author URI: https://emanueledelmonte.it
 */

// First register resources with init
function react_hero_init() {

    $path = "/frontend/build/static";

    wp_register_script("react_hero_js", plugins_url($path . "/js/main.js", __FILE__), array(), time(), false);
    wp_register_style("react_hero_css", plugins_url($path . "/css/main.css", __FILE__), array(), time(), "all");
}

add_action('init', 'react_hero_init');

// Function for the short code that call React app
function react_hero() {
    wp_enqueue_script("react_hero_js", '1.0', true);
    wp_enqueue_style("react_hero_css");
    return "<div id=\"react_hero\"></div>";
}

add_shortcode('react_hero', 'react_hero');
