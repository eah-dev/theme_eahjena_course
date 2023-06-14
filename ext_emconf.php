<?php

/**
 * Extension Manager/Repository config file for ext "theme_eahjena_course".
 */
$EM_CONF[$_EXTKEY] = [
    'title' => 'EAH Jena - Themes for the course sites',
    'description' => '',
    'category' => 'templates',
    'constraints' => [
        'depends' => [
            'bootstrap_package' => '12.0.0-13.9.99',
        ],
        'conflicts' => [
        ],
    ],
    'autoload' => [
        'psr-4' => [
            'ErnstAbbeHochschuleJena\\ThemeEahjenaCourse\\' => 'Classes',
        ],
    ],
    'state' => 'beta',
    'uploadfolder' => 0,
    'createDirs' => '',
    'clearCacheOnLoad' => 1,
    'author' => 'Carsten Hoeelbing',
    'author_email' => 'carsten.hoelbing@eah-jena.de',
    'author_company' => 'Ernst-Abbe-Hochschule Jena',
    'version' => '0.0.1',
];
