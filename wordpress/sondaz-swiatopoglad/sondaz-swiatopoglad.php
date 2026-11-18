<?php
/**
 * Plugin Name: Sondaż światopoglądowy
 * Description: Dodaje stronę z interaktywnym diagramem światopoglądowym. Po włączeniu strona jest od razu opublikowana.
 * Version: 1.0.2
 * Author: Kościół EXE
 * Text Domain: sondaz-swiatopoglad
 */

if (!defined('ABSPATH')) {
    exit;
}

register_activation_hook(__FILE__, 'sondaz_activate');

function sondaz_activate() {
    $page_id = sondaz_ensure_page();
    if ($page_id) {
        update_option('sondaz_page_id', $page_id);
        set_transient('sondaz_activated', $page_id, 60);
    }
}

function sondaz_ensure_page() {
    $candidates = ['sondaz', 'sondaz-swiatopoglad'];
    foreach ($candidates as $slug) {
        $existing = get_page_by_path($slug);
        if ($existing instanceof WP_Post && has_shortcode($existing->post_content, 'sondaz')) {
            return (int) $existing->ID;
        }
    }

    $slug = 'sondaz';
    if (get_page_by_path($slug) instanceof WP_Post) {
        $slug = 'sondaz-swiatopoglad';
    }
    if (get_page_by_path($slug) instanceof WP_Post) {
        return 0;
    }

    $page_id = wp_insert_post([
        'post_title' => 'Sondaż światopoglądowy',
        'post_name' => $slug,
        'post_status' => 'publish',
        'post_type' => 'page',
        'post_content' => '[sondaz]',
        'comment_status' => 'closed',
        'ping_status' => 'closed',
    ], true);

    if (is_wp_error($page_id) || !$page_id) {
        return 0;
    }

    update_post_meta($page_id, '_wp_page_template', 'elementor_header_footer');
    return (int) $page_id;
}

add_action('admin_notices', function () {
    $page_id = get_transient('sondaz_activated');
    if (!$page_id || !current_user_can('edit_pages')) {
        return;
    }
    delete_transient('sondaz_activated');
    $url = get_permalink((int) $page_id);
    if (!$url) {
        return;
    }
    echo '<div class="notice notice-success is-dismissible"><p>Sondaż światopoglądowy jest opublikowany: <a href="' . esc_url($url) . '">' . esc_html($url) . '</a></p></div>';
});

add_shortcode('sondaz', 'sondaz_render');

function sondaz_render() {
    $exe = esc_url(plugins_url('assets/logo-exe.png', __FILE__));
    $chsa = esc_url(plugins_url('assets/logo-chsa.png', __FILE__));

    ob_start();
    ?>
    <div class="sondaz">
      <header class="top">
        <div class="top-inner">
          <div class="brand">
            <a class="logo-link" href="https://exekosciol.pl">
              <img class="logo logo-exe" src="<?php echo $exe; ?>" alt="Kościół EXE" width="34" height="58">
            </a>
            <p class="brand-name">Sondaż światopoglądowy</p>
          </div>
          <nav class="top-nav">
            <button type="button" data-view="quiz" class="nav-btn is-on">Diagram</button>
            <button type="button" data-view="atlas" class="nav-btn">Karty</button>
          </nav>
        </div>
      </header>
      <main id="app"></main>
      <footer class="colophon">
        <div class="colophon-inner">
          <div class="logos">
            <a class="logo-link" href="https://exekosciol.pl">
              <img class="logo logo-exe" src="<?php echo $exe; ?>" alt="Kościół EXE" width="46" height="78">
            </a>
            <a class="logo-link" href="https://chsa.org.pl/">
              <img class="logo" src="<?php echo $chsa; ?>" alt="ChSA" width="72" height="72">
            </a>
          </div>
          <div>
            <p class="credit">Stworzone przez <a href="https://exekosciol.pl">Kościół EXE</a> we współpracy z <a href="https://chsa.org.pl/">ChSA</a>.</p>
            <p>Pytania, opisy i rozgałęzienia pochodzą z diagramu Camerona Blaira, © 2010 FEVA Ministries Inc. Pytania do rozmowy są zapisane głosem autora diagramu.</p>
          </div>
        </div>
      </footer>
    </div>
    <?php
    return ob_get_clean();
}

add_action('wp_enqueue_scripts', 'sondaz_enqueue_assets', 20);

function sondaz_page_uses_shortcode() {
    if (!is_singular()) {
        return false;
    }
    $post = get_queried_object();
    if (!$post instanceof WP_Post) {
        return false;
    }
    if (has_shortcode($post->post_content, 'sondaz')) {
        return true;
    }
    $elementor = get_post_meta($post->ID, '_elementor_data', true);
    return is_string($elementor) && str_contains($elementor, '[sondaz]');
}

function sondaz_enqueue_assets() {
    if (!sondaz_page_uses_shortcode()) {
        return;
    }

    wp_enqueue_style(
        'sondaz-font',
        'https://fonts.googleapis.com/css2?family=Barlow:wght@400;600;700&display=swap',
        [],
        null
    );
    wp_enqueue_style(
        'sondaz',
        plugins_url('embed.css', __FILE__),
        ['sondaz-font'],
        '1.0.2'
    );
    wp_enqueue_script(
        'sondaz-data',
        plugins_url('data.js', __FILE__),
        [],
        '1.0.2',
        true
    );
    wp_enqueue_script(
        'sondaz-app',
        plugins_url('app.js', __FILE__),
        ['sondaz-data'],
        '1.0.2',
        true
    );
}
