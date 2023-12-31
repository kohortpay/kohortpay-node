/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../internal/utils";
import { CreateLineItemDto } from "./createlineitemdto";
import { Expose, Transform, Type } from "class-transformer";

/**
 * Additional metadata for the checkout session.
 */
export class CreateCheckoutSessionDtoMetadata extends SpeakeasyBase {}

export class CreateCheckoutSessionDto extends SpeakeasyBase {
    /**
     * The URL to redirect the user to upon successful payment.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "successUrl" })
    successUrl?: string;

    /**
     * The URL to redirect the user to upon cancellation of payment.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "cancelUrl" })
    cancelUrl?: string;

    /**
     * The email of the customer.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "customerEmail" })
    customerEmail?: string;

    /**
     * The firstName of the customer.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "customerFirstName" })
    customerFirstName?: string;

    /**
     * The lastName of the customer.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "customerLastName" })
    customerLastName?: string;

    /**
     * The unique id of the customer
     */
    @SpeakeasyMetadata()
    @Expose({ name: "customerId" })
    customerId?: string;

    /**
     * The expiration date of the checkout session.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "expiresAt" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    expiresAt?: Date;

    /**
     * List of items in the checkout session.
     */
    @SpeakeasyMetadata({ elemType: CreateLineItemDto })
    @Expose({ name: "lineItems" })
    @Type(() => CreateLineItemDto)
    lineItems: CreateLineItemDto[];

    /**
     * Additional metadata for the checkout session.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "metadata" })
    @Type(() => CreateCheckoutSessionDtoMetadata)
    metadata?: CreateCheckoutSessionDtoMetadata;

    /**
     * The total amount of the checkout session
     */
    @SpeakeasyMetadata()
    @Expose({ name: "amountTotal" })
    amountTotal: number;

    /**
     * The locale of the checkout session. default: fr_FR
     */
    @SpeakeasyMetadata()
    @Expose({ name: "locale" })
    locale: string;
}
