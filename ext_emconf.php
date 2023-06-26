<?php

/**
 * Extension Manager/Repository config file for ext "theme_eahjena_course".
 */
$EM_CONF[$_EXTKEY] = [
    'title' => 'EAH Jena - Themes for the course sites',
    'description' => 'Sitepackage for the EAH Jena (course)',
    'category' => 'templates',
    'version' => '0.0.1',
    'state' => 'beta',
    'author' => 'Carsten Hoelbing',
    'author_email' => 'carsten.hoelbing@eah-jena.de',
    'author_company' => 'Ernst-Abbe-Hochschule Jena',
    'uploadfolder' => 0,
    'createDirs' => '',
    'clearCacheOnLoad' => 1,
    'constraints' => [
        'depends' => [
            'bootstrap_package' => '13.0.0-14.9.99'
        ],
    ],
    'autoload' => [
        'psr-4' => [
            'ErnstAbbeHochschuleJena\\ThemeEahjenaCourse\\' => 'Classes',
        ],
    ],
];
