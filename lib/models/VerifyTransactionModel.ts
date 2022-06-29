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
 * Verify this transaction by matching it to values in your accounting system.
            
You may specify one or more of the following fields to verify: `date`, `totalAmount`, or `totalTax`.
This call will report an error if there is any difference between the data stored in AvaTax and
the data stored in your accounting system.
 * @export
 * @interface VerifyTransactionModel
 */
 export interface VerifyTransactionModel {
    /**
     * @type {Date}
     * @memberof VerifyTransactionModel
     */
   verifyTransactionDate?: Date;
    /**
     * @type {number}
     * @memberof VerifyTransactionModel
     */
   verifyTotalAmount?: number;
    /**
     * @type {number}
     * @memberof VerifyTransactionModel
     */
   verifyTotalTax?: number;
 }