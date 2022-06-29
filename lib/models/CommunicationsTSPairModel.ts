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
 * Represents a transaction/service type pair for telecommunications tax
 * @export
 * @interface CommunicationsTSPairModel
 */
 export interface CommunicationsTSPairModel {
    /**
     * @type {number}
     * @memberof CommunicationsTSPairModel
     */
   transactionTypeId: number;
    /**
     * @type {number}
     * @memberof CommunicationsTSPairModel
     */
   serviceTypeId: number;
    /**
     * @type {string}
     * @memberof CommunicationsTSPairModel
     */
   TransactionType: string;
    /**
     * @type {string}
     * @memberof CommunicationsTSPairModel
     */
   ServiceType: string;
    /**
     * @type {string}
     * @memberof CommunicationsTSPairModel
     */
   description: string;
    /**
     * @type {string[]}
     * @memberof CommunicationsTSPairModel
     */
   requiredParameters: string[];
 }