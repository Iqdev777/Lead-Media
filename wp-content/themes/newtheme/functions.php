<?php
add_action( 'wp_enqueue_scripts', 'theme_name_scripts' );
function theme_name_scripts() {
    wp_enqueue_style( 'style-css', get_stylesheet_uri() );
    wp_enqueue_script( 'callback', get_template_directory_uri() . '/assets/js/callback.js', '', '1.0.0' );
    wp_enqueue_script( 'imask', get_template_directory_uri() . '/assets/js/imask.js', '', '1.0.0' );

}
?>
