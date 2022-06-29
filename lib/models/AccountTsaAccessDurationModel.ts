/*
 * AvaTax Software Development Kit for JavaScript
 *
 * (c) 2004-2022 Avalara, Inc.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @author     Justin Soliz <justin.soliz@avalara.com>
 * @author     Ted Spence <ted.spence@avalara.com>
 * @copyright  2004-2018 Avalara, Inc.
 * @license    https://www.apache.org/licenses/LICENSE-2.0
 * @version    22.6.0
 * @link       https://github.com/avadev/AvaTax-REST-V2-JS-SDK
 */

import * as Enums from '../enums/index';
import * as Models from './index';

/**
 * Specifies a duration for which to grant TSA accounts write access.
See AVT-25316
 * @export
 * @interface AccountTsaAccessDurationModel
 */
 export interface AccountTsaAccessDurationModel {
    /**
     * @type {number}
     * @memberof AccountTsaAccessDurationModel
     */
   minutes?: number;
    /**
     * @type {number}
     * @memberof AccountTsaAccessDurationModel
     */
   hours?: number;
    /**
     * @type {number}
     * @memberof AccountTsaAccessDurationModel
     */
   days?: number;
 }