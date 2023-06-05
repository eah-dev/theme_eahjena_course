<?php
defined('TYPO3') or die('Access denied.');

/***
 *
 * This file is part of the "theme_eahjena_course" Extension for TYPO3 CMS.
 *
 * For the full copyright and license information, please read the
 * LICENSE file that was distributed with this source code.
 *
 * (c) 2023 Carsten Hoelbing <carsten.hoelbing@eah-jena.de>, Ernst-Abbe-Hochschule Jena
 *
 */

call_user_func(function()
{
    /***
     * Extension key
     */
    $extensionKey = 'theme_eahjena_course';

    /**
     * Add default TypoScript (constants and setup)
     */
    \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile(
        $extensionKey,
        'Configuration/TypoScript',
        'EAH-Jena Template: Course (TypoScript)'
    );
});
