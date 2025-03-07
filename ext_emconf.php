<?php

/**
 * Extension Manager/Repository config file for ext "theme_eahjena_course".
 */
$EM_CONF[$_EXTKEY] = [
    'title' => 'EAH Jena - Themes for the course sites',
    'description' => 'Sitepackage for the EAH Jena (course)',
    'category' => 'templates',
    'author' => 'Carsten Hoelbing',
    'author_email' => 'carsten.hoelbing@eah-jena.de',
    'author_company' => 'Ernst-Abbe-Hochschule Jena',
    'state' => 'beta',
    'version' => '0.0.2',
    'constraints' => [
        'depends' => [
            'bootstrap_package' => '14.5.0-15.9.99'
        ],
    ],
];
