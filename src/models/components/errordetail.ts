/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../internal/utils";
import { Expose } from "class-transformer";

export class ErrorDetail extends SpeakeasyBase {
    /**
     * Type of the error.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "type" })
    type: string;

    /**
     * Detailed error message.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "message" })
    message: string;

    /**
     * Specific error code.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "code" })
    code: string;
}
